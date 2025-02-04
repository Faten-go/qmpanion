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
import Navbar from './Navbar';
import { Container, Row, Col } from 'reactstrap';
import AuditList from '../../Components/Audits/AuditList';
import AuditDetails from '../../Components/Audits/AuditDetails';
import FilterAudits from '../../Components/Audits/FilterAudits';
import Searchbar from '../../Components/Searchbar';
import SideMenu from '../../Components/SideMenu';
import {  useSelector, useDispatch } from "react-redux";
import AddAudit from '../../Components/Audits/AddAudit';
import { current } from '../../JS/Actions/User';

function AuditDashbord()  {
    const dispatch = useDispatch()
    const sideMenuVisible = useSelector((state) => state.dashboardInfo.sideMenuVisible);
    const create = useSelector((state) => state.dashboardInfo.create);

    const [textSearch, setTextSearch] = useState("")

    useEffect(() => {
       dispatch(current)
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
                            <FilterAudits setTextSearch={setTextSearch} >
                            <Searchbar/>
                                </FilterAudits> 
                            </Col>
                            
                        </Row>

                        <Row>
                            <Col xs='4'>
                                <AuditList textSearch={textSearch} />
                                

                            </Col>

                            <Col xs='8'>
                                {create?
                                    <AddAudit></AddAudit>
                                :
                                    <AuditDetails> </AuditDetails>
                                }
                            </Col>
                                        
                        </Row>
                    </Col>





                </Row>

            </Container>
           
            


             

        </div>
    )
}

export default AuditDashbord
