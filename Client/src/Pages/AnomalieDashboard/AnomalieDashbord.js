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
import AnomalieList from '../../Components/Anomalies/AnomalieList';
import AnomalieDetails from '../../Components/Anomalies/AnomalieDetails';
import FilterAnomalies from '../../Components/Anomalies/FilterAnomalies';
import Searchbar from '../../Components/Searchbar';
import SideMenu from '../../Components/SideMenu';
import {  useSelector } from "react-redux";
import AddAnomalie from '../../Components/Anomalies/AddAnomalie';

function AnomalieDashbord()  {
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
                            <FilterAnomalies setTextSearch={setTextSearch} >
                            <Searchbar/>
                                </FilterAnomalies> 
                            </Col>
                            
                        </Row>

                        <Row>
                            <Col xs='4'>
                                <AnomalieList textSearch={textSearch} />
                                

                            </Col>

                            <Col xs='8'>
                                {create?
                                    <AddAnomalie></AddAnomalie>
                                :
                                    <AnomalieDetails> </AnomalieDetails>
                                }
                            </Col>
                                        
                        </Row>
                    </Col>





                </Row>

            </Container>
           
            


             

        </div>
    )
}

export default AnomalieDashbord
