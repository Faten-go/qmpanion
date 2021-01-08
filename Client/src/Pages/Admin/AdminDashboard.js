import React, { useEffect, useState } from 'react';
import {
    Sidebar,
    Menu,
    Icon,
    Card,
    Image,
    Table,
    Header,
    Button,
    Label,
    List
  } from 'semantic-ui-react';
import Navbar from '../AuditDashboard/Navbar';
import { Container, Row, Col } from 'reactstrap';
import AuditList from '../../Components/Audits/AuditList';
import AuditDetails from '../../Components/Audits/AuditDetails';
import FilterAudits from '../../Components/Audits/FilterAudits';
import Searchbar from '../../Components/Searchbar';
import SideMenu from '../../Components/SideMenu';
import {  useSelector } from "react-redux";
import AddAudit from '../../Components/Audits/AddAudit';
import { getAllUsers } from '../../JS/Actions/User';
import { useDispatch } from "react-redux";
import { blockUser, validateUser, setResponsible, setAdmin, setAgent } from '../../JS/Actions/AdminActions';

function AdminDashboard()  {

    const dispatch = useDispatch();

    const sideMenuVisible = useSelector((state) => state.dashboardInfo.sideMenuVisible);

    const users = useSelector((state) => state.user.users);

    useEffect(() => {
        dispatch(getAllUsers());
      }, []);

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
                        <Table basic='very' celled collapsing fluid>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Utilisateur</Table.HeaderCell>
        <Table.HeaderCell>Status</Table.HeaderCell>
        <Table.HeaderCell>Actions</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
        {users.map((user) => 
            <Table.Row>
            <Table.Cell>
            <Header as='h4' image>
                <Image src={user.imageLink} rounded size='mini' />
                <Header.Content>
                {user.firstName} ' ' {user.lastName}
                <Header.Subheader>Role: {user.role}</Header.Subheader>
                <Header.Subheader>{user.email}</Header.Subheader>
                </Header.Content>
            </Header>
            </Table.Cell>
                <Table.Cell>
                    {user.isValidated? 
                    'Validé'
                    :
                    'Non validé'
                    }
                
                </Table.Cell>
            <Table.Cell>
                    {user.isValidated? 
                        <Button  size='tiny' color='red' onClick={() => {
                            dispatch(blockUser(user._id))

                        }}>Bloquer</Button>
                    :
                        <Button size='tiny' color='green' onClick={() => {
                            dispatch(validateUser(user._id))

                        }
                            
                        }>Valider</Button>
                    }

                    {(() => {
                    
                    switch (user.role) {
                        case 'Admin':
                            return (
                                <>
                                    <Button size='tiny' color='blue' onClick={() => {dispatch(setResponsible(user._id))}}>Changer en Responsable qualité</Button>
                                    <Button size='tiny' color='blue' onClick={() => {dispatch(setAgent(user._id))}}>Changer en Agent de qualité</Button>
                                </>
                            )
                        
                        case 'Agent qualité':
                            return (
                                <>
                                    <Button size='tiny' color='blue' onClick={() => {dispatch(setResponsible(user._id))}}>Changer en Responsable qualité</Button>
                                    <Button size='tiny' color='blue'onClick={() => {dispatch(setAdmin(user._id))}}>Changer en Admin</Button>
                                </>
                            )
                        case 'Responsable qualité':
                            return (
                                <>
                                    <Button size='tiny' color='blue' onClick={() => {dispatch(setAgent(user._id))}}>Changer en Agent qualité</Button>
                                    <Button size='tiny' color='blue'onClick={() => {dispatch(setAdmin(user._id))}}>Changer en Admin</Button>
                                </>
                            )
                        default:
                            return (
                                ''
                            )
                    }

                    })()}
                
                
            </Table.Cell>
        </Table.Row>
        
        )}

        
      
    </Table.Body>
  </Table>
                    </Col>


                </Row>

            </Container>
           
            


             

        </div>
    )
}

export default AdminDashboard
