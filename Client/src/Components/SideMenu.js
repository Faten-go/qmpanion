import React from 'react'
import { useSelector } from "react-redux"
import { Dropdown, Icon, Input, Menu, Segment, Image, Header } from 'semantic-ui-react'

function SideMenu() {

    const user = useSelector((state) => state.user.user);

    return (
       <div>
          <Segment raised fluid inverted style={{
            width: '100%',
            height: '90vh'
          }}>

          <Menu inverted fluid vertical >
            <Menu.Item>
                <Image circular centered src='https://react.semantic-ui.com/images/avatar/large/patrick.png' style={{ maxWidth: '80px'}} />
                <Header as='h3' icon inverted color='blue'>
                    Bienvenue {user? user.firstName : "Nom d'utilisateur"}
                    <Header.Subheader>
                    Vous êtes ici en tant que : <b>Responsable Qualité</b>
                    </Header.Subheader>
                </Header>
            </Menu.Item>

            <Menu.Item as='a' href='/'>
              Dashboard
             
              </Menu.Item>  

            <Menu.Item as='a' href="/audits"
              name='browse'
              //active={activeItem === 'browse'}
              //onClick={this.handleItemClick}
            >
              <Icon name='calender check' />
              Audits
            </Menu.Item>
            <Menu.Item  as='a' href="/anomalies"
              name='browse'
              //active={activeItem === 'browse'}
              //onClick={this.handleItemClick}
            >
              <Icon name='exclamation' />
              Anomalies
            </Menu.Item>

            <Menu.Item  as='a' href="/actionsCorrectives"
              name='browse'
              //active={activeItem === 'browse'}
              //onClick={this.handleItemClick}
            >
              <Icon name='medkit' />
              Actions correctives
            </Menu.Item>



            <Dropdown item text='Options'>
              <Dropdown.Menu>
                <Dropdown.Item icon='edit' text='Edit Profile' />
                <Dropdown.Item icon='globe' text='Choose Language' />
                <Dropdown.Item icon='settings' text='Account Settings' />
              </Dropdown.Menu>
            </Dropdown>
          </Menu> 
      </Segment>
        </div>
    )
}

export default SideMenu
