import React, { useEffect, useState } from 'react';
import {
    Sidebar,
    Menu,
    Icon,
    Card,
    Image,
    Label,
    List
  } from 'semantic-ui-react';
import Navbar from '../AuditDashboard/Navbar';
import { Container, Row, Col } from 'reactstrap';
import ActionCorrectiveList from '../../Components/ActionCorrectives/ActionCorrectiveList';
import ActionCorrectiveDetails from '../../Components/ActionCorrectives/ActionCorrectiveDetails';
import FilterActionCorrectives from '../../Components/ActionCorrectives/FilterActionsCorrectives';
import Searchbar from '../../Components/Searchbar';
import SideMenu from '../../Components/SideMenu';
import {  useSelector } from "react-redux";
import AddActionCorrective from '../../Components/ActionCorrectives/AddActionCorrective';

function ActionCorrectiveDashbord()  {
    const sideMenuVisible = useSelector((state) => state.dashboardInfo.sideMenuVisible);
    const create = useSelector((state) => state.dashboardInfo.create);

    const [textSearch, setTextSearch] = useState("")

    useEffect(() => {
        
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
                        <Row style={{
                            marginBottom: '5px'
                        }}>
                            <Col xs='12'>
                            <FilterActionCorrectives setTextSearch={setTextSearch} >
                                <Searchbar/>
                            </FilterActionCorrectives> 
                            </Col>
                            
                        </Row>

                        <Row>
                            <Col xs='4'>
                                <ActionCorrectiveList textSearch={textSearch} />
                                

                            </Col>

                            <Col xs='8'>
                                {create?
                                   <AddActionCorrective></AddActionCorrective>
                                :
                                    <ActionCorrectiveDetails> </ActionCorrectiveDetails>
                                }
                            </Col>
                                        
                        </Row>
                    </Col>





                </Row>

            </Container>
           
            


             

        </div>
    )
}

export default ActionCorrectiveDashbord