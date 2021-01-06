import React from 'react';
import { useDispatch } from "react-redux";
import {  getAnomalie} from "../../JS/Actions/Anomalies";
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
import { hideAddAnomalie } from '../../JS/Actions/DashbordActions';

const AnomalieCard = ({ Anomalie }) => { 

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(hideAddAnomalie())
        dispatch(getAnomalie(Anomalie._id))

    }
    
    return (
        <>
            <Card>
                <Card.Content>                                
                    <Image
                        floated='right'
                        size='mini'
                        src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
                    />
                    
                    <Card.Header as='a' onClick={handleClick} >{Anomalie.name}</Card.Header>
                    
                    <Card.Meta> Crée: <b>{moment(Anomalie.createdAt).fromNow()}</b> | Modifié <b>{moment(Anomalie.modifiedAt).fromNow()}</b></Card.Meta>
                    <Card.Description>
                        {Anomalie.description}
                    </Card.Description>

                </Card.Content>

                <Card.Content>
                    
                    <List.Item size='tiny'>
                    {(() => {
  
                        switch (Anomalie.status) {
                            case 'Maitrisée':
                                return (
                                <Label color='green' horizontal>{Anomalie.status}</Label>
                                )
                            
                         
                            case 'Non maitrisée':
                                return (
                                    <Label color='red' horizontal>{Anomalie.status}</Label>
                                )
                            default:
                                return (
                                <Label horizontal>{Anomalie.status}</Label>
                                )
                        }

                        })()}
                    
                    <Label content={`Délai: ${moment(Anomalie.deadline).format('D/M/YYYY')}`} icon='time' />

                    </List.Item>
                    </Card.Content>
            </Card>
            
        </>
    )
}

export default AnomalieCard
