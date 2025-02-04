import React, { useEffect, useState }  from 'react';
import { useDispatch, useSelector  } from "react-redux";
import {  getAudit,  deleteAudit,editAudit} from "../../JS/Actions/Audits";
import { getAllUsers } from '../../JS/Actions/User';

import { Row, Col, CustomInput } from 'reactstrap';

import {
    Sidebar,
    Menu,
    Icon,
    Card,
    Pagination,
    Feed,
    List,
    Image,
    Segment,
    Label,
    Input,
    Search,
    Header,
    Breadcrumb,
    Dropdown,
    Divider,
    Message,
    Button,
    Step,
    Item,
    Form,
    Statistic,
    Checkbox
  } from 'semantic-ui-react';
  import moment from 'moment';
import User from '../../Pages/User/User';
import { getAllAnomalies } from '../../JS/Actions/Anomalies';
  
function AuditDetails() {

    const dispatch = useDispatch();
    const selectedAudit = useSelector((state) => state.auditsList.selectedAudit);

    const user = JSON.parse(localStorage.getItem('user'));

    const allAnomalies = useSelector((state) => state.anomaliesList.anomalies);
    const users = useSelector((state) => state.user.users);

    const [ audit , setaudit ] = useState({ name: "", description: "", status: "", createdAt:"", modifiedAt: "", responsible:"", deadline: "" })
    
    //const [ name, setname ] = useState(selectedAudit.name);
    //const [ description, setdescription ] = useState(selectedAudit.description);

    dispatch(getAllAnomalies()); 

    function myalert() { 
    
        if (window.confirm('êtes vous sûr de supprimer ?')) {
            dispatch(deleteAudit(selectedAudit._id))
        }
    }

    const [ edit, setedit ] = useState(false);
    
    const handlePostAudit = () => {
        const date = new Date();
        const dateTransformed = date.toISOString();

        setaudit({ ...audit.modifiedAt = dateTransformed })

        dispatch(editAudit(selectedAudit._id, audit));
        setedit(false); 
    };

    const handleChange = (e) => {
        e.preventDefault();
       
        setaudit({ ...audit, [e.target.name]: e.target.value});

        //console.log(e.target.name)

    };

    useEffect(() => { 
       setaudit(selectedAudit);
       dispatch(getAllUsers());
       dispatch(getAllAnomalies()); 
       console.log(allAnomalies)

    }, [selectedAudit, edit]);

    //console.log(selectedAudit.anomalies)


    return (
        <>

            <Form>

            

            { (Object.entries(selectedAudit).length === 0) ? (

                <p>Veuillez sélectionner un audit de la liste pour voir les détails.</p>

            ) : (
                <Card fluid>
                    
                    <Card.Content>

                        <Button.Group floated='right' size='tiny'>    

                            {edit? 
                                <Button basic type='submit' color='blue'
                                onClick= {handlePostAudit}
                                >Sauvegarder</Button>
                            :  
                        
                                <Button basic color='blue'
                                    onClick={() => {
                                                //dispatch(updateTask({...task,name: name,}));
                                                //setname(selectedAudit.name);
                                                //setdescription(selectedAudit.description)
                                                setedit(true);
                                            }}  
                                >Modifier</Button>
                            }
            
                            {edit? 
                                <Button  basic color='red'
                                    onClick={() => {
                                        setedit (false) ;  
                                    }}
                                >Annuler</Button>
                            :
                                <Button  basic color='red'
                                onClick=  {myalert}    >Supprimer</Button>
                                }
                             

                    
                        </Button.Group>

                        
  
                        <Card.Header>

                            {edit? 
                            <Form.Field>
                                <input value={audit.name} name='name'  onChange={handleChange} fluid/>
                            </Form.Field>
                            
                            

                            
                            : 
                                <Header as='h4'>
                                    <Icon name='check' />
                                    <Header.Content>
                                        {selectedAudit.name}
                                    </Header.Content>
                                </Header>
                            }
                            
                        </Card.Header>
                     </Card.Content>

                    <Card.Content>
                        <Card.Meta> Crée: <b>{moment(selectedAudit.createdAt).fromNow()}</b> | Modifié <b>{moment(selectedAudit.modifiedAt).fromNow()}</b> | Crée par <b>{selectedAudit.createdBy.firstName + ' ' + selectedAudit.createdBy.lastName}</b></Card.Meta>
                        
                        <Message >
                            <Message.Header>Description</Message.Header>
                            {edit?

                            <Form.Field>
                                <input value={audit.description} name='description' onChange={handleChange}  fluid/>
                            </Form.Field>


                            :
                            <p>{selectedAudit.description}</p>
                            }
                        </Message>
                        
                        <Message >

                            <Message.Header>Status</Message.Header>


                            {edit?
                                (user.role === 'Responsable qualité')? 
                                <Form.Field>
                                    <select name="status" onChange={handleChange}>
                                        <option value="En cours" selected={ selectedAudit.status === 'En cours'}>En cours</option>
                                        <option value="Terminé" selected={ selectedAudit.status === 'Terminé'}>Terminé</option>
                                        <option value="Bloqué" selected={ selectedAudit.status === 'Bloqué'}>Bloqué</option>
                                    </select>
                                </Form.Field>


                                : 
                                'Seul un Responsable qualité peut changer le status'        

                            :

                            <Step.Group   widths={3} >

                                <Step className={selectedAudit.status === "En cours" ? 'active' : 'disabled' } >
                                <Icon name='hourglass half' />
                                <Step.Content>
                                    <Step.Title>En cours</Step.Title>
                                    <Step.Description>Cet audit est en cours de préparation.</Step.Description>
                                </Step.Content>
                                </Step>

                                <Step  className={selectedAudit.status === "Terminé" ? 'active' : 'disabled' } >
                                <Icon name='calendar check' />
                                <Step.Content>
                                    <Step.Title>Terminé</Step.Title>
                                    <Step.Description>Cet audit a été cloturé.</Step.Description>
                                </Step.Content>
                                </Step>

                                <Step  className={selectedAudit.status === "Bloqué" ? 'active' : 'disabled' } >
                                <Icon name='calendar times' />
                                <Step.Content>
                                    <Step.Title>Bloqué</Step.Title>
                                    <Step.Description>Cet audit a été bloqué.</Step.Description>
                                </Step.Content>
                                </Step>
                            </Step.Group>

                            }
                            </Message>
 
                                    
                        <Row>
                            <Col xs='4'>
                                
                            <Message icon fluid>
                                <Icon name='time'  />
                                <Message.Content>
                                    <Message.Header>Délai</Message.Header>
                                    
                                
                                {edit?
                            
                            <Form.Field fluid>
                                 <input type="date" value={audit.deadline} name='deadline' onChange={handleChange}  fluid style={{ width:'150px'}}/>
                            </Form.Field>
                            
                           
                            :

                            <Statistic label={moment(selectedAudit.deadline).fromNow()}  value={moment(selectedAudit.deadline).format("D/M/YYYY") } size='tiny' />
                            }

                           </Message.Content>               
                        </Message>

                        <Message>  
                             
                             <Item.Group>  
                                                     <Item>
                             <Item.Image size='tiny' src={selectedAudit.responsible.imageLink} />

                             <Item.Content>
                                 <Item.Header as='h6'>Responsable</Item.Header>

                                 {edit?

                                     <Form.Field>
                                         <select name="responsible" onChange={handleChange}>
                                             {users.map((user) => <option value={user._id} selected='false'  >{user.firstName + ' ' + user.lastName}</option> )}
                                         </select>
                                     </Form.Field>

                                 :
                                 
                                     <Item.Description>{selectedAudit.responsible.firstName + ' ' + selectedAudit.responsible.lastName}</Item.Description>

                                 }
                                
                                 
                             
                             </Item.Content>
                             </Item>
                             </Item.Group> 
                         </Message>  

                                
                            </Col>

                            <Col xs='8' >
                            <Message>
                            <Message.Header >
                            <Icon name='exclamation' /> Anomalies  </Message.Header> 
                            <List divided relaxed>

                            
                            {edit?
                                <Form.Group>
                                       
                                        {allAnomalies.map((el) => 
                                            <Form.Field>
                                                <Checkbox type="checkbox"  name={el.name} id={el._id} label={el.name} checked  /> 
                                            </Form.Field>
                                        )}  
                                    
                                </Form.Group>
                                
                                
                                :
                                 selectedAudit.anomalies.length !== 0 ?
                                    selectedAudit.anomalies.map((anomalie) => 
                                    <List.Item  key={anomalie._id}>
                
                                            <List.Icon name='hand point right' size='large' verticalAlign='middle' />
    
                                            <List.Content>
                                                <List.Header as='a'>{anomalie.name}
                                                {(() => {
                                                        switch (anomalie.status) {
                                                            case 'Maitrisée':
                                                                return (
                                                                <Label color='green' horizontal style={{marginLeft:'10px'}}> {anomalie.status} </Label>
                                                                )
                                                            case 'Non maitrisée':
                                                                return (
                                                                <Label color='red' horizontal style={{marginLeft:'10px'}}>{anomalie.status}</Label>
                                                                )
                                                            default:
                                                                return (
                                                                <Label horizontal>{anomalie.status}</Label>
                                                                )
                                                        }
    
                                                })()}
    
                                                        {(() => {
                                                        switch (anomalie.severity) {
                                                            case 'Faible':
                                                                return (
                                                                <Label color='green' horizontal style={{marginLeft:'3px'}}>Sévérité: {anomalie.severity} </Label>
                                                                )
                                                            case 'Moyenne':
                                                                return (
                                                                <Label color='yellow' horizontal style={{marginLeft:'3px'}}> Sévérité: {anomalie.severity}</Label>
                                                                )
                                                            case 'Elevée':
                                                                return (
                                                                <Label color='red' horizontal style={{marginLeft:'3px'}}> Sévérité: {anomalie.severity}</Label>
                                                                )
                                                            default:
                                                                return (
                                                                <Label horizontal style={{marginLeft:'3px'}}>Sévérité: {anomalie.severity}</Label>
                                                                )
                                                        }
    
                                                })()}
    
    
    
                                            
                                                <Button circular icon='trash alternate'  floated='right'/>
                                                </List.Header>
                                            
                                                <List.Description >{anomalie.description}</List.Description>
                                                
                                            
                                            </List.Content>
                                    </List.Item>
                                    )
    
                                    : <p> Cet audit ne posséde pas encore d'anomalie. </p> 
                                
                            }

                            

                            </List>
                        </Message>
                      
                            
                            
                            </Col>

                        </Row>
                       
                        
                        
                        
                      </Card.Content>
                  
                  </Card> 
            )}

        </Form>


        </>
    )
}

export default AuditDetails
