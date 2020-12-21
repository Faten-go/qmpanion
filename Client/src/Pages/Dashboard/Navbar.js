import React from 'react';
import Searchbar from '../../Components/Searchbar';
import {
    Dropdown,
    Icon,
    Menu,
    Header
  } from 'semantic-ui-react';


function Navbar() {

    return (
        <div>
            <Menu fixed='top' color='blue' inverted>

                <Dropdown item icon='bars' simple inverted>
                    <Dropdown.Menu inverted>

                        <Dropdown.Header>
                            <Header as='h4' icon='check date' content='Audits' color='teal'/>
                        </Dropdown.Header>
                        
                        <Dropdown.Item as='a' href=''>Afficher Tout</Dropdown.Item>
                        <Dropdown.Item as='a' href=''>Créer</Dropdown.Item>
                        
                        <Dropdown.Divider />

                        <Dropdown.Header>
                            <Header as='h4' icon='exclamation' content='Anomalies' color='teal'/>
                        </Dropdown.Header>

                        <Dropdown.Item>Afficher</Dropdown.Item>
                        <Dropdown.Item>Créer</Dropdown.Item>

                        <Dropdown.Divider />

                        <Dropdown.Header>
                            <Header as='h4' icon='medkit' content='Actions' color='teal'/>
                        </Dropdown.Header>

                        <Dropdown.Item>Afficher</Dropdown.Item>
                        <Dropdown.Item>Créer</Dropdown.Item>
                        
                    </Dropdown.Menu>
                </Dropdown>

                <Menu.Item as='a' header>
                    QMpanion
                </Menu.Item>

                <Menu.Menu position='right'>

                    <Menu.Item fitted>
                        <Searchbar/>
                    </Menu.Item>
                    
                    <Dropdown item simple text='Faten Fadhlaoui'>
                    <Dropdown.Menu>
                        <Dropdown.Item>Gérer mon compte</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item>Déconnexion</Dropdown.Item>
                    </Dropdown.Menu>
                    </Dropdown>
                        
                    </Menu.Menu>
                </Menu>
                
        </div>
    )
}

export default Navbar
