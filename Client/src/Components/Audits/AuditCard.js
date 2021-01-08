import React from 'react';
import { useDispatch } from "react-redux";
import {  getAudit} from "../../JS/Actions/Audits";
import {
    Sidebar,
    Menu,
    Icon,
    Card,
    Image,
    Label,
    List,
    
  } from 'semantic-ui-react';
  import moment from 'moment';
import { hideAddAudit } from '../../JS/Actions/DashbordActions';

const AuditCard = ({ audit }) => { 

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(hideAddAudit())
        dispatch(getAudit(audit._id))

    }
    
    return (
        <>
            <Card>
                <Card.Content>                                
                    <Image
                        floated='right'
                        size='mini'
                        src={ audit.responsible.imageLink}
                    />
                    
                    <Card.Header as='a' onClick={handleClick} >{audit.name}</Card.Header>
                    
                    <Card.Meta> Crée: <b>{moment(audit.createdAt).fromNow()}</b> | Modifié <b>{moment(audit.modifiedAt).fromNow()}</b></Card.Meta>
                    <Card.Description>
                        {audit.description}
                    </Card.Description>

                </Card.Content>

                <Card.Content>
                    
                    <List.Item size='tiny'>
                    {(() => {
  
                        switch (audit.status) {
                            case 'Terminé':
                                return (
                                <Label color='green' horizontal>{audit.status}</Label>
                                )
                            
                            case 'En cours':
                                return (
                                    <Label color='purple' horizontal>{audit.status}</Label>
                                )
                            case 'Bloqué':
                                return (
                                    <Label color='red' horizontal>{audit.status}</Label>
                                )
                            default:
                                return (
                                <Label horizontal>{audit.status}</Label>
                                )
                        }

                        })()}
                    
                    <Label content={`Délai: ${moment(audit.deadline).format('D/M/YYYY')}`} icon='time' />

                    </List.Item>
                    </Card.Content>
            </Card>
            
        </>
    )
}

export default AuditCard
