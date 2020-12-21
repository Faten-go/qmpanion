import React from 'react';
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

function AuditDashbord() {  

    return (

        

        <div>
            <Navbar/>
            <Container fluid style={{
                marginTop: '45px'
            }}>
                <Row>
                    <Col xs='2'>
                    <p>
                        Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.
                    </p>                    
                    </Col>

                    <Col xs='10' style={{
                        //width: '100%'
                    }}>
                        <Row style={{
                            marginBottom: '5px'
                        }}>
                            <Col xs='12'>
                            <FilterAudits>
                            <Searchbar/>
                                </FilterAudits> 
                            </Col>
                            
                        </Row>

                        <Row>
                            <Col xs='4'>
                                <AuditList/>
                            </Col>

                            <Col xs='8'>
                                <AuditDetails> </AuditDetails>
                            </Col>

                        </Row>
                    </Col>





                </Row>

            </Container>
           
            


             

        </div>
    )
}

export default AuditDashbord
