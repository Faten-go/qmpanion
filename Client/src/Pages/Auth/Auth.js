import React, { useState } from 'react'
import { Button, Form, Grid, Header, Tab, Icon} from 'semantic-ui-react'
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { loginUser, registerUser } from '../../JS/Actions/User';



const Auth = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [imageLink, setImageLink] = useState("");

    const dispatch = useDispatch();

    const history = useHistory();

    const panes = [
        {
          menuItem: 'S\'identifier',
          render: () => <Tab.Pane attached={false}>
                            <Form size='large'>
                                
                                <Form.Field>
                                    <input 
                                        fluid 
                                        placeholder='Votre Adresse Email'
                                        id='email'
                                        type='text'
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </Form.Field>

                                <Form.Field>
                                    <input 
                                        fluid 
                                        placeholder='Votre mot de passe'
                                        id='password'
                                        type='password'
                                        data-type='password'
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </Form.Field>
    
                                <Button type='submit' color='blue' fluid size='large'
                                    onClick={() =>
                                        dispatch(loginUser({ email, password }, history))
                                      }
                                >
                                    Login
                                </Button>
    
                                Mot de passe oublié? <a href='/'>Clique ici</a>
                                
                            </Form>
                        </Tab.Pane>,
        },
        {
          menuItem: 'S\'enregistrer',
          render: () => <Tab.Pane attached={false}>
                            <Form size='large'>

                                <Form.Field>
                                    <input 
                                        fluid 
                                        placeholder='Votre Adresse Email'
                                        id='email'
                                        type='text'
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </Form.Field>

                                <Form.Field>
                                    <input 
                                        fluid 
                                        placeholder='Votre prénom'
                                        id='firstName'
                                        type='text'
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                </Form.Field>

                                <Form.Field>
                                    <input 
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
                                        placeholder='Votre mot de passe'
                                        id='password'
                                        type='password'
                                        data-type='password'
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </Form.Field>

                                <Form.Field>
                                    <input 
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
                                          registerUser({ firstName, lastName, email, password, imageLink }, history)
                                        )
                                      }
                                >
                                    Créer un compte
                                </Button>
                                
                            </Form>

                        </Tab.Pane>,
        },
      ]


    return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='blue' textAlign='center' fluid>
                <Icon name='calendar check' />
                <Header.Content textAlign='center'>
                 QMpanion
                <Header.Subheader textAlign='center'>Manage your quality</Header.Subheader>
                </Header.Content>
            </Header>

            <Tab menu={{ secondary: true, pointing: true }} panes={panes} />

        </Grid.Column>
    </Grid>
  );
}

export default Auth