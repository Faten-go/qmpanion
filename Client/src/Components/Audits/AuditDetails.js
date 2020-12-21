import React, { useEffect }  from 'react';
import { useDispatch, useSelector  } from "react-redux";
import {  getAudit,  deleteAudit} from "../../JS/Actions/Audits";

import {
    Sidebar,
    Menu,
    Icon,
    Card,
    Pagination,
    Feed,
    List,
    Image,
    Segment,
    Label,
    Input,
    Search,
    Header,
    Breadcrumb,
    Dropdown,
    Divider,
    Message,
    Button,
    Step,
    Item
  } from 'semantic-ui-react';
  import moment from 'moment';
  
function AuditDetails() {

    const dispatch = useDispatch();
    const selectedAudit = useSelector((state) => state.auditsList.selectedAudit);

    useEffect(() => {
        dispatch(getAudit());
      }, []);


    return (
        <>

            {!selectedAudit? (

                <p>Veuillez sélectionner un audit de la liste pour voir ses détails.</p>

            ) : (
                <Card fluid>
                    <Card.Content>

                        <Button.Group floated='right' size='tiny'>
                            <Button basic color='blue' >Modifier</Button>
                            <Button onClick={() => {
                        {
                            dispatch(deleteAudit(selectedAudit._id));
                            
                        }
                    }} basic color='red' >Supprimer</Button>
                        </Button.Group>
  
                        <Card.Header>
                            <Header as='h4'>
                                <Icon name='check' />
                                <Header.Content>
                                    {selectedAudit.name}
                                </Header.Content>
                            </Header>
                        </Card.Header>
                    </Card.Content>

                    <Card.Content>
                        <Card.Meta> Crée: <b>{moment(selectedAudit.createdAt).fromNow()}</b> | Modifié <b>{moment(selectedAudit.modifiedAt).fromNow()}</b></Card.Meta>

                        <Message >
                            <Message.Header>Description</Message.Header>
                            <p>{selectedAudit.description}</p>
                        </Message>

                    </Card.Content>
                
             </Card> 
            )}


        </>
    )
}

export default AuditDetails
