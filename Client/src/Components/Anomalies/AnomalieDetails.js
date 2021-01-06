import React, { useEffect, useState }  from 'react';
import { useDispatch, useSelector  } from "react-redux";
import {  getAnomalie,  deleteAnomalie,editAnomalie} from "../../JS/Actions/Anomalies";

import { Row, Col } from 'reactstrap';

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
    Statistic
  } from 'semantic-ui-react';
  import moment from 'moment';
import User from '../../Pages/User/User';
  
function AnomalieDetails() {

    const dispatch = useDispatch();
    const selectedAnomalie = useSelector((state) => state.anomaliesList.selectedAnomalie);

    const [ Anomalie , setAnomalie ] = useState({ name: "", description: "", status: "", createdAt:"", modifiedAt: "", responsible:"", deadline: "", createdby:"" })
    
    //const [ name, setname ] = useState(selectedAnomalie.name);
    //const [ description, setdescription ] = useState(selectedAnomalie.description);

    const options = [
        { key: 'En cours', text: 'En cours', value: 'En cours' },
        { key: 'Terminé', text: 'Terminé', value: 'Terminé' },
        { key: 'Bloqué', text: 'Bloqué', value: 'Bloqué' },
      ]
      


    function myalert() { 
    
        if (window.confirm('êtes vous sûr de supprimer ?')) {
            dispatch(deleteAnomalie(selectedAnomalie._id))
        }
    }

    const [ edit, setedit ] = useState(false);
    
    const handlePostAnomalie = () => {
        const date = new Date();
        const dateTransformed = date.toISOString();

        setAnomalie({ ...Anomalie.modifiedAt = dateTransformed })

        dispatch(editAnomalie(selectedAnomalie._id, Anomalie));
        setedit(false); 
    };

    const handleChange = (e) => {
        e.preventDefault();
       
        setAnomalie({ ...Anomalie, [e.target.name]: e.target.value});

        console.log(e.target.name)

    };

    useEffect(() => { 
       setAnomalie(selectedAnomalie);

    }, [selectedAnomalie, edit]);

    console.log(selectedAnomalie.anomalies)


    return (
        <>

            <Form>

            

            { (Object.entries(selectedAnomalie).length === 0) ? (

                <p>Veuillez sélectionner un Anomalie de la liste pour voir les détails.</p>

            ) : (
                <Card fluid>
                    
                    <Card.Content>

                        <Button.Group floated='right' size='tiny'>    

                            {edit? 
                                <Button basic type='submit' color='blue'
                                onClick= {handlePostAnomalie}
                                >Sauvegarder</Button>
                            :  
                        
                                <Button basic color='blue'
                                    onClick={() => {
                                                //dispatch(updateTask({...task,name: name,}));
                                                //setname(selectedAnomalie.name);
                                                //setdescription(selectedAnomalie.description)
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
                                <input value={Anomalie.name} name='name'  onChange={handleChange} fluid/>
                            </Form.Field>
                            
                            

                            
                            : 
                                <Header as='h4'>
                                    <Icon name='check' />
                                    <Header.Content>
                                        {selectedAnomalie.name}
                                    </Header.Content>
                                </Header>
                            }
                            
                        </Card.Header>
                     </Card.Content>

                    <Card.Content>
                        <Card.Meta> Crée: <b>{moment(selectedAnomalie.createdAt).fromNow()}</b> | Modifié <b>{moment(selectedAnomalie.modifiedAt).fromNow()}</b></Card.Meta>
                        
                        <Message >
                            <Message.Header>Description</Message.Header>
                            {edit?

                            <Form.Field>
                                <input value={Anomalie.description} name='description' onChange={handleChange}  fluid/>
                            </Form.Field>


                            :
                            <p>{selectedAnomalie.description}</p>
                            }
                        </Message>
                        
                        <Message >

                            <Message.Header>Status</Message.Header>


                            {edit?
                                <Form.Field>
                                    <select name="status" onChange={handleChange}>
                                        <option value="En cours" selected={ selectedAnomalie.status === 'En cours'}>En cours</option>
                                        <option value="Terminé" selected={ selectedAnomalie.status === 'Terminé'}>Terminé</option>
                                        <option value="Bloqué" selected={ selectedAnomalie.status === 'Bloqué'}>Bloqué</option>
                                    </select>
                                </Form.Field>

                            :

                            <Step.Group   widths={3} >

                                <Step className={selectedAnomalie.status === "En cours" ? 'active' : 'disabled' } >
                                <Icon name='hourglass half' />
                                <Step.Content>
                                    <Step.Title>En cours</Step.Title>
                                    <Step.Description>Cet Anomalie est en cours de préparation.</Step.Description>
                                </Step.Content>
                                </Step>

                                <Step  className={selectedAnomalie.status === "Terminé" ? 'active' : 'disabled' } >
                                <Icon name='calendar check' />
                                <Step.Content>
                                    <Step.Title>Terminé</Step.Title>
                                    <Step.Description>Cet Anomalie a été cloturé.</Step.Description>
                                </Step.Content>
                                </Step>

                                <Step  className={selectedAnomalie.status === "Bloqué" ? 'active' : 'disabled' } >
                                <Icon name='calendar times' />
                                <Step.Content>
                                    <Step.Title>Bloqué</Step.Title>
                                    <Step.Description>Cet Anomalie a été bloqué.</Step.Description>
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
                                 <input type="date" value={Anomalie.deadline} name='deadline' onChange={handleChange}  fluid style={{ width:'150px'}}/>
                            </Form.Field>
                            
                           
                            :

                            <Statistic label={moment(selectedAnomalie.deadline).fromNow()}  value={moment(selectedAnomalie.deadline).format("D/M/YYYY") } size='tiny' />
                            }

                           </Message.Content>               
                        </Message>

                                
                            </Col>

                            <Col xs='8' >
                            <Message>
                            <Message.Header >
                            <Icon name='exclamation' /> Audits concernés  </Message.Header> 
                            <List divided relaxed>

                            {selectedAnomalie.audits.length !== 0 ?
            
                                selectedAnomalie.audits.map((audit) => 
                                
                                <List.Item  key={audit._id}>
            
                                        <List.Icon name='hand point right' size='large' verticalAlign='middle' />

                                        <List.Content>
                                            <List.Header as='a'>{audit.name}
                                            {(() => {
                                                    switch (audit.status) {
                                                        case 'En cours':
                                                            return (
                                                            <Label color='purple' horizontal style={{marginLeft:'10px'}}> {audit.status} </Label>
                                                            )
                                                        case 'Bloqué':
                                                            return (
                                                            <Label color='red' horizontal style={{marginLeft:'10px'}}>{audit.status}</Label>
                                                            )
                                                        case 'Terminé':
                                                            return (
                                                            <Label color='green' horizontal style={{marginLeft:'10px'}}>{audit.status}</Label>
                                                            )
                                                        default:
                                                            return (
                                                            <Label horizontal>{audit.status}</Label>
                                                            )
                                                    }

                                            })()}



                                        
                                            <Button circular icon='trash alternate'  floated='right'/>
                                            </List.Header>
                                        
                                            <List.Description >{audit.description}</List.Description>
                                            
                                        
                                        </List.Content>
                                </List.Item>

                                )

                                : <p> Cette Anomalie ne posséde pas encore d'audits. </p> 
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

export default AnomalieDetails
