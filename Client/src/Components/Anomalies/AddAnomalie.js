import React, { useEffect, useState }  from 'react';
import { useDispatch, useSelector  } from "react-redux";
import {  getAnomalie,  deleteAnomalie,editAnomalie} from "../../JS/Actions/Anomalies";

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
import { hideAddAnomalie } from '../../JS/Actions/DashbordActions';
import { postAnomalie } from '../../JS/Actions/Anomalies';
import { getAllUsers } from '../../JS/Actions/User';
  
function AddAnomalie() {

    const dispatch = useDispatch();
    
    //const selectedAnomalie = useSelector((state) => state.AnomaliesList.selectedAnomalie);
    //const user = useSelector((state) => state.user.user);
    const user = JSON.parse(localStorage.getItem('user'));
    const users = useSelector((state) => state.user.users);

    const [ Anomalie , setAnomalie ] = useState({ name: "", description: "", status: "", createdAt:"", modifiedAt: "", severity: "Faible", createdBy: user._id, responsible: user._id })
    
    //const [ name, setname ] = useState(selectedAnomalie.name);
    //const [ description, setdescription ] = useState(selectedAnomalie.description);

    // function myalert() { 
    
    //     if (window.confirm('êtes vous sûr de supprimer ?')) {
    //         dispatch(deleteAnomalie(selectedAnomalie._id))
    //     }
    // }
    
    const handlePostAnomalie = () => {
        dispatch(postAnomalie(Anomalie));
    };

    const handleChange = (e) => {
        e.preventDefault();
       
        setAnomalie({ ...Anomalie, [e.target.name]: e.target.value});

        console.log(e.target.name)

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
                    onClick= {handlePostAnomalie}
                >Sauvegarder</Button>

                <Button  basic color='red'
                    onClick={() => {
                        dispatch(hideAddAnomalie()) ;  
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
                    <input value={Anomalie.description} name='description' onChange={handleChange}  fluid/>
                </Form.Field>
            
            </Message>

            <Message >
                <Message.Header>Sévérité</Message.Header>                          
            
                <Form.Field>
                    <select name="severity" onChange={handleChange}>
                        <option value="Faible" >Faible</option>
                        <option value="Moyenne" >Moyenne</option>
                        <option value="Elevée" >Elevée</option>
                
                    </select>
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

export default AddAnomalie
