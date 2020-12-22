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
    Form
  } from 'semantic-ui-react';
  import moment from 'moment';
import User from '../../Pages/User/User';
  
function AuditDetails() {

    const dispatch = useDispatch();
    const selectedAudit = useSelector((state) => state.auditsList.selectedAudit);

    const [ audit , setaudit ] = useState({ name: "", description: "", status: "", createdAt:"", modifiedAt: "", responsible:"", deadline: "", createdby:"" })
    
    //const [ name, setname ] = useState(selectedAudit.name);
    //const [ description, setdescription ] = useState(selectedAudit.description);

    const [ edit, setedit ] = useState(false);

    const handlePostAudit = () => {
        dispatch(editAudit(selectedAudit._id, audit));
        setedit(false); 
         
        }
      ;

    const handleChange = (e) => {
        e.preventDefault();
        setaudit({ ...audit, [e.target.name]: e.target.value });
    };

    useEffect(() => { 
       //setname(selectedAudit.name);
       //setdescription(selectedAudit.description);
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
                                onClick={() => dispatch(deleteAudit(selectedAudit._id))} >Supprimer</Button>
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

                    </Card.Content>
                
             </Card> 
            )}

        </Form>


        </>
    )
}

export default AuditDetails
