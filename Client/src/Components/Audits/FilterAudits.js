import React from 'react';
import {
    Menu,
    Icon,
    Dropdown,
    Input
  } from 'semantic-ui-react';
import Searchbar from '../Searchbar';


function FilterAudits() {
    return (
        <>
            <Menu borderless>
                <Menu.Item>
                    <Icon color='red' className='sort amount down'></Icon>
                <Dropdown text='Trier par'>
                    <Dropdown.Menu>
                    <Dropdown.Item text='Date de modification descendant' description='Plus récent > Plus ancien' />
                    <Dropdown.Item text='Date de modification Ascendant' description='Plus ancien > Plus récent'/>
                    </Dropdown.Menu>
                    </Dropdown>
                </Menu.Item>

                <Menu.Item>
                    <Icon className='filter'></Icon>
                    <Dropdown text='Filtrer'>
                        <Dropdown.Menu>
                        <Dropdown.Item text='Afficher mes Audits' description='Plus récent > Plus ancien' />
                        <Dropdown.Item text='Afficher les' description='Plus ancien > Plus récent'/>
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Item>
                <Menu.Menu position='right'>
                <Menu.Item>
                <Searchbar/>
                </Menu.Item>
                </Menu.Menu>
           
        </Menu>
       
        </>
    )
}

export default FilterAudits
