import React, {useEffect} from 'react';
import {
    Menu,
    Icon,
    Dropdown,
    Input
  } from 'semantic-ui-react';
import { hideAddAudit, showAddAudit } from '../../JS/Actions/DashbordActions';
import Searchbar from '../Searchbar';
import { useDispatch, useSelector } from "react-redux";


function FilterAudits({setTextSearch}) {
    const dispatch = useDispatch();

    const user = JSON.parse(localStorage.getItem('user'));

    const create = useSelector((state) => state.dashboardInfo.create);

    const handleClick = () => {   
        dispatch (showAddAudit ())      
    }

    useEffect(() => {
        
      }, []);
    return (
        <>
            <Menu borderless secondary>
                { (user.role === 'Responsable qualité') ?
                <Menu.Item onClick={handleClick}>
                    <Icon className='add'></Icon>
                    Créer

                </Menu.Item>

                :
                    ''
                }
                    

                    <Menu.Item>
                        <Icon className='filter'></Icon>
                        <Dropdown text='Filtrer par status' >
                            <Dropdown.Menu>
                            <Dropdown.Item text='En cours' />
                            <Dropdown.Item text='Terminé' />
                            <Dropdown.Item text='Bloqué' />
                            </Dropdown.Menu>
                        </Dropdown>
                    </Menu.Item>
                    <Menu.Menu position='right'>
                    
                    <Menu.Item fitted>
                        <Icon name='search'/>
                        <input
                            placeholder='Chercher par nom...'
                            onChange={
                                (e)=> setTextSearch(e.target.value)
                            }
                        />
                    </Menu.Item>
                
                </Menu.Menu>
           
        </Menu>
       
        </>
    )
}

export default FilterAudits
