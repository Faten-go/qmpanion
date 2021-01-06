import React, { useEffect, useState } from 'react';
import Searchbar from '../../Components/Searchbar';
import {
    Dropdown,
    Icon,
    Menu,
    Header
  } from 'semantic-ui-react';
  import { Link, useHistory } from 'react-router-dom';
import { showSideMenu , hideSideMenu } from '../../JS/Actions/DashbordActions';
import { useDispatch, useSelector } from "react-redux";
import { logout, current } from '../../JS/Actions/User';


const Navbar = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const sideMenuVisible = useSelector((state) => state.dashboardInfo.sideMenuVisible);
    const user= useSelector((state) => state.user.user);

    const [ currentUser, setCurrentUser ] = useState(user);

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
                    
                    
                    <Dropdown item simple text={user? user.firstName + ' ' + user.lastName : 'User'}>
                    
                         
                    <Dropdown.Menu>
                        <Dropdown.Item as='a' href='/my-account' >Gérer mon compte</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item 
                            onClick={() => {
                                dispatch(logout());
                                history.push("/login");
                              }}
                        >Déconnexion</Dropdown.Item>
                    </Dropdown.Menu>
                    </Dropdown>
                        
                    </Menu.Menu>
                </Menu>
                
        </div>
    )
}

export default Navbar
