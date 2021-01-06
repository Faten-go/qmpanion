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

    const [ Anomalie , setAnomalie ] = useState({ name: "", description: "", status: "", createdAt:"", modifiedAt: "", responsible:"", severity: "", createdby:"" })
    
    //const [ name, setname ] = useState(selectedAnomalie.name);
    //const [ description, setdescription ] = useState(selectedAnomalie.description);

    const options = [
        { key: 'Maitrisée', text: 'Maitrisée', value: 'Maitrisée' },
        { key: 'Non maitrisée', text: 'Non maitrisée', value: 'Non maitrisée' },
       
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
                        <Card.Meta> Crée: <b>{moment(selectedAnomalie.createdAt).fromNow()}</b> | Modifié <b>{moment(selectedAnomalie.modifiedAt).fromNow()}</b> | Crée par <b>{selectedAnomalie.createdBy.firstName + ' ' + selectedAnomalie.createdBy.lastName}</b></Card.Meta>
                        
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
                                        <option value="Maitrisée" selected={ selectedAnomalie.status === 'Maitrisée'}>Maitrisée</option>
                                        <option value="Non maitrisée " selected={ selectedAnomalie.status === 'Non maitrisée'}>Non maitrisée</option>
                                   
                                    </select>
                                </Form.Field>

                            :

                            <Step.Group   widths={3} >

                                <Step className={selectedAnomalie.status === "Non maitrisée" ? 'active' : 'disabled' } >
                                <Icon name='hourglass half' />
                                <Step.Content>
                                    <Step.Title>Non maitrisée</Step.Title>
                                    <Step.Description>Cette Anomalie est non maitrisée.</Step.Description>
                                </Step.Content>
                                </Step>

                                <Step  className={selectedAnomalie.status === "Maitrisée" ? 'active' : 'disabled' } >
                                <Icon name='calendar check' />
                                <Step.Content>
                                    <Step.Title>Maitrisée</Step.Title>
                                    <Step.Description>Cette Anomalie est maitrisée.</Step.Description>
                                </Step.Content>
                                </Step>
                            </Step.Group>

                            }
                            </Message>

                            <Message>
                            <Message.Header>Sévérité</Message.Header>


{edit?
    <Form.Field>
        <select name="severity" onChange={handleChange}>
            <option value="Faible" selected={ selectedAnomalie.severity === 'Faible'}>Faible</option>
            <option value="Moyenne" selected={ selectedAnomalie.severity=== 'Moyenne'}>Moyenne</option>
            <option value="Elevée" selected={ selectedAnomalie.severity=== 'Elevée'}>Elevée</option>
       
        </select>
    </Form.Field>

:

<Step.Group   widths={3} >

    <Step className={selectedAnomalie.severity === "Faible" ? 'active' : 'disabled' } >
    <Icon name='smile outline' />
    <Step.Content>
        <Step.Title>Faible</Step.Title>
        <Step.Description>Cette Anomalie est faible.</Step.Description>
    </Step.Content>
    </Step>

    <Step  className={selectedAnomalie.severity === "Moyenne" ? 'active' : 'disabled' } >
    <Icon name='meh outline' />
    <Step.Content>
        <Step.Title>Moyenne</Step.Title>
        <Step.Description>Cette Anomalie est moyenne.</Step.Description>
    </Step.Content>
    </Step>
    <Step  className={selectedAnomalie.severity === "Elevée" ? 'active' : 'disabled' } >
    <Icon name='frown outline' />
    <Step.Content>
        <Step.Title>Elevée</Step.Title>
        <Step.Description>Cette Anomalie est élevée.</Step.Description>
    </Step.Content>
    </Step>

</Step.Group>

}
</Message>



 
                                    
                        <Row>
                            <Col xs='5'>
                            <Message>  
                             
      <Item.Group>  
                            <Item>
      <Item.Image size='tiny' src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />

      <Item.Content>
        <Item.Header as='h6'>Responsable </Item.Header>
        <Item.Description>Faten Fadhlaoui</Item.Description>
        
    
      </Item.Content>
    </Item>
    </Item.Group> 
    </Message>                
                           
                             

                                
                            </Col>

                            <Col xs='7' >
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
                                                        case 'Terminé':
                                                            return (
                                                            <Label color='green' horizontal style={{marginLeft:'10px'}}> {audit.status} </Label>
                                                            )
                                                        case 'Bloqué':
                                                            return (
                                                            <Label color='red' horizontal style={{marginLeft:'10px'}}>{audit.status}</Label>
                                                            )

                                                            case 'En cours':
                                                                return (
                                                                <Label color='purple' horizontal style={{marginLeft:'10px'}}>{audit.status}</Label>
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
