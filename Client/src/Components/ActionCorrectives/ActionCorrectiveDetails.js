import React, { useEffect, useState }  from 'react';
import { useDispatch, useSelector  } from "react-redux";
import {  getActionCorrective,  deleteActionCorrective,editActionCorrective} from "../../JS/Actions/ActionsCorrectives";

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
import { getAllUsers } from '../../JS/Actions/User';
  
function ActionCorrectiveDetails() {

    const dispatch = useDispatch();

    const users = useSelector((state) => state.user.users);

    const selectedActionCorrective = useSelector((state) => state.actionCorrectivesList.selectedActionCorrective);

    const [ ActionCorrective , setActionCorrective ] = useState({ name: "", description: "", status: "", createdAt:"", modifiedAt: "" })



    function myalert() { 
    
        if (window.confirm('êtes vous sûr de supprimer ?')) {
            dispatch(deleteActionCorrective(selectedActionCorrective._id))
        }
    }

    const [ edit, setedit ] = useState(false);
    
    const handlePostActionCorrective = () => {
        const date = new Date();
        const dateTransformed = date.toISOString();

        setActionCorrective({ ...ActionCorrective.modifiedAt = dateTransformed })

        dispatch(editActionCorrective(selectedActionCorrective._id, ActionCorrective));
        setedit(false); 
    };

    const handleChange = (e) => {
        e.preventDefault();
       
        setActionCorrective({ ...ActionCorrective, [e.target.name]: e.target.value});

        console.log(e.target.name)

    };

    useEffect(() => { 
       setActionCorrective(selectedActionCorrective);
       dispatch(getAllUsers()); 
    }, [selectedActionCorrective, edit]);


    return (
        <>

            <Form>

            

            { (Object.entries(selectedActionCorrective).length === 0) ? (

                <p>Veuillez sélectionner un ActionCorrective de la liste pour voir les détails.</p>

            ) : (
                <Card fluid>
                    
                    <Card.Content>

                        <Button.Group floated='right' size='tiny'>    

                            {edit? 
                                <Button basic type='submit' color='blue'
                                onClick= {handlePostActionCorrective}
                                >Sauvegarder</Button>
                            :  
                        
                                <Button basic color='blue'
                                    onClick={() => {
                                                //dispatch(updateTask({...task,name: name,}));
                                                //setname(selectedActionCorrective.name);
                                                //setdescription(selectedActionCorrective.description)
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
                                <input value={ActionCorrective.name} name='name'  onChange={handleChange} fluid/>
                            </Form.Field>
                            
                            

                            
                            : 
                                <Header as='h4'>
                                    <Icon name='check' />
                                    <Header.Content>
                                        {selectedActionCorrective.name}
                                    </Header.Content>
                                </Header>
                            }
                            
                        </Card.Header>
                     </Card.Content>

                    <Card.Content>
                        <Card.Meta> Crée: <b>{moment(selectedActionCorrective.createdAt).fromNow()}</b> | Modifié <b>{moment(selectedActionCorrective.modifiedAt).fromNow()}</b> | Crée par <b>{selectedActionCorrective.createdBy.firstName + ' ' + selectedActionCorrective.createdBy.lastName}</b></Card.Meta>
                        
                        <Message >
                            <Message.Header>Description</Message.Header>
                            {edit?

                            <Form.Field>
                                <input value={ActionCorrective.description} name='description' onChange={handleChange}  fluid/>
                            </Form.Field>


                            :
                            <p>{selectedActionCorrective.description}</p>
                            }
                        </Message>
                        
                        <Message >

                            <Message.Header>Status</Message.Header> 


                            {edit?
                                <Form.Field>
                                    <select name="status" onChange={handleChange}>
                                        <option value="Bloquée" selected={ selectedActionCorrective.status === 'Bloquée'}>Bloquée</option>
                                        <option value="Terminée" selected={ selectedActionCorrective.status === 'Terminée'}>Terminée</option>
                                        <option value="En cours" selected={ selectedActionCorrective.status === 'En cours'}>En cours</option>
                                   
                                    </select>
                                </Form.Field>
                               

                            :

<Step.Group   widths={3} >

<Step className={selectedActionCorrective.status === "En cours" ? 'active' : 'disabled' } >
<Icon name='hourglass half' />
<Step.Content>
    <Step.Title>En cours</Step.Title>
    <Step.Description>Cette ActionCorrective est en cours de préparation.</Step.Description>
</Step.Content>
</Step>

<Step  className={selectedActionCorrective.status === "Terminée" ? 'active' : 'disabled' } >
<Icon name='calendar check' />
<Step.Content>
    <Step.Title>Terminée</Step.Title>
    <Step.Description>Cettte ActionCorrective a été cloturée.</Step.Description>
</Step.Content>
</Step>

<Step  className={selectedActionCorrective.status === "Bloquée" ? 'active' : 'disabled' } >
<Icon name='calendar times' />
<Step.Content>
    <Step.Title>Bloquée</Step.Title>
    <Step.Description>Cette ActionCorrective a été bloquée.</Step.Description>
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
                                <Item.Image size='tiny' src={selectedActionCorrective.responsible.imageLink} />

                                <Item.Content>
                                    <Item.Header as='h6'>Responsable </Item.Header>

                                    {edit?

                                        <Form.Field>
                                            <select name="responsible" onChange={handleChange}>
                                                {users.map((user) => <option value={user._id} selected='false'  >{user.firstName + ' ' + user.lastName}</option> )}
                                            </select>
                                        </Form.Field>

                                    :
                                    
                                        <Item.Description>{selectedActionCorrective.responsible.firstName + ' ' + selectedActionCorrective.responsible.lastName}</Item.Description>

                                    }
                                   
                                    
                                
                                </Item.Content>
                                </Item>
                                </Item.Group> 
                            </Message>                
                           
                             

                                
                            </Col>

                            <Col xs='7' >
                            <Message>
                            <Message.Header >
                            <Icon name='exclamation' /> Anomalies concernées </Message.Header> 
                            <List divided relaxed>

                            {selectedActionCorrective.anomalies.length !== 0 ?
            
                                selectedActionCorrective.anomalies.map((anomalie) => 
                                
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



                                        
                                            <Button circular icon='trash alternate'  floated='right'/>
                                            </List.Header>
                                        
                                            <List.Description >{anomalie.description}</List.Description>
                                            
                                        
                                        </List.Content>
                                </List.Item>

                                )

                                : <p> Cette ActionCorrective ne posséde pas encore d'anomalies. </p> 
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

export default ActionCorrectiveDetails
