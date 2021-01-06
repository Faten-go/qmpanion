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
import { hideAddAudit } from '../../JS/Actions/DashbordActions';
import { postAudit } from '../../JS/Actions/Audits';
  
function AddAudit() {

    const dispatch = useDispatch();

    const user = useSelector((state) => state.user.user);
    
    //const selectedAudit = useSelector((state) => state.auditsList.selectedAudit);

    const [ audit , setaudit ] = useState({ name: "", description: "", status: "", createdAt:"", modifiedAt: "", responsible:"", deadline: "", createdBy: user._id})
    
    //const [ name, setname ] = useState(selectedAudit.name);
    //const [ description, setdescription ] = useState(selectedAudit.description);

    // function myalert() { 
    
    //     if (window.confirm('êtes vous sûr de supprimer ?')) {
    //         dispatch(deleteAudit(selectedAudit._id))
    //     }
    // }
    
    const handlePostAudit = () => {
          dispatch(postAudit(audit));
    };

    const handleChange = (e) => {
        e.preventDefault();
       
        setaudit({ ...audit, [e.target.name]: e.target.value});

        console.log(e.target.name)

    };

    useEffect(() => { 
       

    }, []);
    


    return (
        <>

<Form>
    <Card fluid>
        <Card.Content>
            <Button.Group floated='right' size='tiny'>  

                <Button basic type='submit' color='blue'
                    onClick= {handlePostAudit}
                >Sauvegarder</Button>

                <Button  basic color='red'
                    onClick={() => {
                        dispatch(hideAddAudit()) ;  
                    }}
                >Annuler</Button>  

            </Button.Group>
            
            <Card.Header>                   
                <Form.Field>
                    <input placeholder="Le nom de votre audit" name='name'  onChange={handleChange} fluid/>
                </Form.Field>
            </Card.Header>
        </Card.Content>

        <Card.Content>
            <Message >
                <Message.Header>Description</Message.Header>                          
            
                <Form.Field>
                    <input value={audit.description} name='description' onChange={handleChange}  fluid/>
                </Form.Field>
            
            </Message>

            <Message icon>
                <Icon name='time'  />
                
                <Message.Content>
                    <Message.Header>Délai</Message.Header> 

                    <Form.Field>
                        <input type="date" value={audit.deadline} name='deadline' onChange={handleChange}  fluid/>
                    </Form.Field>                  
                </Message.Content>               
            </Message>
        </Card.Content>              
    </Card> 
</Form>
        </>
    )
}

export default AddAudit
