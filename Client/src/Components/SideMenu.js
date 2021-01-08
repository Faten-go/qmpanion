import React, { useEffect } from 'react'
import { useSelector } from "react-redux"
import { Dropdown, Icon, Input, Menu, Segment, Image, Header } from 'semantic-ui-react'
import { useDispatch } from "react-redux"; 
import { current } from '../JS/Actions/User';

function SideMenu() {

    const dispatch = useDispatch();
    //const user = useSelector((state) => state.user.user);
    const user = JSON.parse(localStorage.getItem('user'));


    useEffect(() => {
     // dispatch(current)
    }, [])

    return (
       <div>
          <Segment raised fluid inverted style={{
            width: '100%',
            height: '90vh'
          }}>

          <Menu inverted fluid vertical >
            <Menu.Item>
                <Image circular centered src={user.imageLink} style={{ maxWidth: '80px'}} />
                <Header as='h3' icon inverted color='blue'>
                    Bienvenue {user? user.firstName : "Nom d'utilisateur"}
                    <Header.Subheader>
                    Vous êtes ici en tant que : <b>{user? user.role : "role de l'utilisateur"}</b>
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

            <Menu.Item  as='a' href="/actions-correctives"
              name='browse'
              //active={activeItem === 'browse'}
              //onClick={this.handleItemClick}
            >
              <Icon name='medkit' />
              Actions correctives
            </Menu.Item>

      { user.role === "Admin" ?  
            <Menu.Item  as='a' href="/Admin"
              name='browse' 
              //active={activeItem === 'browse'}
              //onClick={this.handleItemClick}
            >
              <Icon name='users' />
              Gérer les utilisateurs
            </Menu.Item>
        :
        ''
        }

</Menu> 
      </Segment>
        </div>
    )
}

export default SideMenu
