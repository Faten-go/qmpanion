import React, { useEffect, useState }  from 'react';
import { useDispatch, useSelector  } from "react-redux";
// import {  getAnomalie,  deleteAnomalie, editAnomalie} from "../../JS/Actions/Anomalies";

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
import { hideAddActionCorrective, hideAddAnomalie } from '../../JS/Actions/DashbordActions';
import { postActionCorrective } from '../../JS/Actions/ActionsCorrectives';
import { getAllUsers } from '../../JS/Actions/User';
  
function AddActionCorrective() {

    const dispatch = useDispatch();
    
    //const user = useSelector((state) => state.user.user);
    const user = JSON.parse(localStorage.getItem('user'));
    const users = useSelector((state) => state.user.users);

    const [ actionCorrective , setActionCorrective ] = useState({ name: "", description: "", status: "", createdAt:"", modifiedAt: "", severity: "", createdBy: user._id, responsible: user._id })
    
    const handlePostActionCorrective = () => {
        dispatch(postActionCorrective(actionCorrective));
    };

    const handleChange = (e) => {
        e.preventDefault();
        
        setActionCorrective({ ...actionCorrective, [e.target.name]: e.target.value});
    };

    useEffect(() => {
        dispatch(getAllUsers()); 
    }, []);
    

    return (
        <>

<Form>
    <Card fluid>
        <Card.Content>
            <Button.Group floated='right' size='tiny'>  

                <Button basic type='submit' color='blue'
                    onClick= {handlePostActionCorrective}
                >Sauvegarder</Button>

                <Button  basic color='red'
                    onClick={() => {
                        dispatch(hideAddActionCorrective()) ;  
                    }}
                >Annuler</Button>  

            </Button.Group>
            
            <Card.Header>                   
                <Form.Field>
                    <input placeholder="Le nom de votre Anomalie" name='name'  onChange={handleChange} fluid/>
                </Form.Field>
            </Card.Header>
        </Card.Content>

        <Card.Content>
            <Message >
                <Message.Header>Description</Message.Header>                          
            
                <Form.Field>
                    <input value={actionCorrective.description} name='description' onChange={handleChange}  fluid/>
                </Form.Field>
            
            </Message>

            <Message >
                <Message.Header>Responsable</Message.Header>                          
            
                <Form.Field>
                    <select name="responsible" onChange={handleChange}>
                        {users.map((user) => <option value={user._id} >{user.firstName + ' ' + user.lastName}</option> )}
                    </select>
                </Form.Field>
            
            </Message>

        </Card.Content>              
    </Card> 
</Form>
        </>
    )
}

export default AddActionCorrective
