import React, { useEffect } from 'react';
import Searchbar from '../../Components/Searchbar';
import {
    Dropdown,
    Icon,
    Menu,
    Header
  } from 'semantic-ui-react';
  import { Link } from 'react-router-dom';
import { showSideMenu , hideSideMenu } from '../../JS/Actions/DashbordActions';
import { useDispatch, useSelector } from "react-redux";


const Navbar = () => {
    const dispatch = useDispatch();

    const sideMenuVisible = useSelector((state) => state.dashboardInfo.sideMenuVisible);

    const handleClick = () => {
        sideMenuVisible ?  
            dispatch (hideSideMenu ())  
        :    
            dispatch( showSideMenu())      
    }

    useEffect(() => {
        
      }, []);



    return (
        <div>
            <Menu fixed='top' color='blue' inverted>

            <Menu.Item
          name='bars'
         // active={activeItem === 'bars'}
          onClick= {handleClick}    
        >
        
          <Icon name='bars' />
        </Menu.Item>
                    <Link to={'/'}>
                    <Menu.Item as='a'  header>
                        QMpanion
                    </Menu.Item>

                </Link>

                

                <Menu.Menu position='right'>
                    
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
