import React from 'react'
import { Button, Form, Grid, Header, Tab, Icon} from 'semantic-ui-react'

const panes = [
    {
      menuItem: 'S\'identifier',
      render: () => <Tab.Pane attached={false}>
                        <Form size='large'>
                            
                            <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
                            <Form.Input
                                fluid
                                icon='lock'
                                iconPosition='left'
                                placeholder='Password'
                                type='password'
                            />

                            <Button color='blue' fluid size='large'>
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
                            
                                <Form.Input fluid icon='user' iconPosition='left' placeholder='Adresse Email' />
                                <Form.Input fluid icon='user' iconPosition='left' placeholder='Prénom' />
                                <Form.Input fluid icon='user' iconPosition='left' placeholder='Nom' />
                                <Form.Input
                                    fluid
                                    icon='lock'
                                    iconPosition='left'
                                    placeholder='Mot de Passe'
                                    type='password'
                                />

                                <Button color='blue' fluid size='large'>
                                    Créer un compte
                                </Button>
                            
                        </Form>
                    
                    
                    </Tab.Pane>,
    },
  ]

function Auth() {

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