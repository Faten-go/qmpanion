import React,{ useState } from 'react'
import { Button, Form, Grid, Header, Tab, Icon} from 'semantic-ui-react'
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { changeAccount } from '../../JS/Actions/User';
import Navbar from '../AuditDashboard/Navbar';
import { Container, Row, Col } from 'reactstrap';
import SideMenu from '../../Components/SideMenu';
import {  useSelector } from "react-redux";

const User = () => {

    const user = JSON.parse(localStorage.getItem('user'));

    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const [email, setEmail] = useState(user.email);
    const [password, setPassword] = useState(null);
    const [imageLink, setImageLink] = useState(user.imageLink);
    const [id, setId] = useState(user._id);

    const dispatch = useDispatch();

    const history = useHistory();


    const sideMenuVisible = useSelector((state) => state.dashboardInfo.sideMenuVisible);
    
    console.log(id)

    return (
        <div>


<Navbar/>
            <Container fluid style={{
                marginTop: '45px'
            }}>
                <Row>
               

                    {sideMenuVisible? 
                        
                        <Col xs='2'> < SideMenu /> </Col>
                    :
                        <></>  
                    }                
                    

                    <Col xs={sideMenuVisible? '10' : '12'}     style={{
                        //width: '100%'
                    }}>
                     <Form size='large'>

<Form.Field>
    <input 
        value={email}
        fluid 
        placeholder='Votre Adresse Email'
        id='email'
        type='text'
        onChange={(e) => setEmail(e.target.value)}
    />
</Form.Field>

<Form.Field>
    <input value={firstName}
        fluid 
        placeholder='Votre prénom'
        id='firstName'
        type='text'
        onChange={(e) => {
            setFirstName(e.target.value) 
            console.log(firstName)
        } }
    />
</Form.Field>

<Form.Field>
    <input value={lastName}
        fluid 
        placeholder='Votre Nom'
        id='lastName'
        type='text'
        onChange={(e) => setLastName(e.target.value)}
    />
</Form.Field>

<Form.Field>
    <input 
        fluid 
        placeholder='changer ou garder le mot de passe'
        id='password'
        type='password'
        data-type='password'
        onChange={(e) => setPassword(e.target.value)}
    />
</Form.Field>

<Form.Field>
    <input value={imageLink}
        fluid 
        placeholder='Lien de la photo de profil'
        id='imageLink'
        type='text'
        onChange={(e) => setImageLink(e.target.value)}
    />
</Form.Field>

<Button type='submit' color='blue' fluid size='large'
    onClick={() =>
        dispatch(
          changeAccount({ firstName, lastName, email, password, imageLink, id })
        )
      }
>
    Modifier mon compte
</Button>

</Form>

                    </Col>





                </Row>

            </Container>



          
        </div>
    )
}

export default User
