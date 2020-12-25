import React, { useEffect, useState }  from 'react';
import { useDispatch, useSelector  } from "react-redux";
import {  getAudit,  deleteAudit,editAudit} from "../../JS/Actions/Audits";

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
  
function AuditDetails() {

    const dispatch = useDispatch();
    const selectedAudit = useSelector((state) => state.auditsList.selectedAudit);

    const [ audit , setaudit ] = useState({ name: "", description: "", status: "", createdAt:"", modifiedAt: "", responsible:"", deadline: "", createdby:"" })
    
    //const [ name, setname ] = useState(selectedAudit.name);
    //const [ description, setdescription ] = useState(selectedAudit.description);

    const options = [
        { key: 'En cours', text: 'En cours', value: 'En cours' },
        { key: 'Terminé', text: 'Terminé', value: 'Terminé' },
        { key: 'Bloqué', text: 'Bloqué', value: 'Bloqué' },
      ]
      


    function myalert() { 
    
        if (window.confirm('êtes vous sûr de supprimer ?')) {
            dispatch(deleteAudit(selectedAudit._id))
        }
    }

    const [ edit, setedit ] = useState(false);
    
    const handlePostAudit = () => {
       
        dispatch(editAudit(selectedAudit._id, audit));
        setedit(false); 
    };

    const handleChange = (e) => {
        e.preventDefault();
       
        setaudit({ ...audit, [e.target.name]: e.target.value});

        console.log(e.target.name)

    };

    useEffect(() => { 
       setaudit(selectedAudit);

    }, [selectedAudit, edit]);


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
                        <Card.Meta> Crée: <b>{moment(selectedAudit.createdAt).fromNow()}</b> | Modifié <b>{moment(selectedAudit.modifiedAt).fromNow()}</b></Card.Meta>

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
                                    <Form.Field>
                                        <select name="status" onChange={handleChange}>
                                            <option value="En cours" selected={ selectedAudit.status === 'En cours'}>En cours</option>
                                            <option value="Terminé" selected={ selectedAudit.status === 'Terminé'}>Terminé</option>
                                            <option value="Bloqué" selected={ selectedAudit.status === 'Bloqué'}>Bloqué</option>
                                        </select>
                                    </Form.Field>
 
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

                        <Message icon>
                                <Icon name='time'  />
                                <Message.Content>
                                    <Message.Header>Délai</Message.Header>
                                    
                                
                                {edit?
                            
                            <Form.Field>
                                 <input type="date" value={audit.deadline} name='deadline' onChange={handleChange}  fluid/>
                            </Form.Field>
                            
                           
                            :

                            <Statistic label={moment(selectedAudit.deadline).fromNow()}  value={moment(selectedAudit.deadline).format("D/M/YYYY") } size='tiny' />
                            }

                           </Message.Content>               
                        </Message>



                    </Card.Content>
                
             </Card> 
            )}

        </Form>


        </>
    )
}

export default AuditDetails
