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
  
function AddAnomalie() {

    const dispatch = useDispatch();
    
    //const selectedAnomalie = useSelector((state) => state.AnomaliesList.selectedAnomalie);

    const [ Anomalie , setAnomalie ] = useState({ name: "", description: "", status: "", createdAt:"", modifiedAt: "", responsible:"", severity: "", createdby:"" })
    
    //const [ name, setname ] = useState(selectedAnomalie.name);
    //const [ description, setdescription ] = useState(selectedAnomalie.description);

    // function myalert() { 
    
    //     if (window.confirm('êtes vous sûr de supprimer ?')) {
    //         dispatch(deleteAnomalie(selectedAnomalie._id))
    //     }
    // }
    
    const handlePostAnomalie = () => {
        console.log('sauvegarder clické')  
        dispatch(postAnomalie(Anomalie));
        console.log('aprés dispatch')
    };

    const handleChange = (e) => {
        e.preventDefault();
       
        setAnomalie({ ...Anomalie, [e.target.name]: e.target.value});

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

            <Message icon>
                <Icon name='time'  />
                
                <Message.Content>
                                  
                </Message.Content>               
            </Message>
        </Card.Content>              
    </Card> 
</Form>
        </>
    )
}

export default AddAnomalie
