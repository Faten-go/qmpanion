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
import AuditList from '../../Components/Audits/AuditList';
import AuditDetails from '../../Components/Audits/AuditDetails';
import FilterAudits from '../../Components/Audits/FilterAudits';
import Searchbar from '../../Components/Searchbar';
import SideMenu from '../../Components/SideMenu';
import {  useSelector } from "react-redux";
import AddAudit from '../../Components/Audits/AddAudit';

function Dashboard()  {
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
                       <Image src='dashboard.jpg' size='massive' />
                    </Col>





                </Row>

            </Container>
           
            


             

        </div>
    )
}

export default Dashboard
