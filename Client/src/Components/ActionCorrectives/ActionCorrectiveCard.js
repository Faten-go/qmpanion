import React from 'react';
import { useDispatch } from "react-redux";
import {  getActionCorrective} from "../../JS/Actions/ActionsCorrectives";
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
import { hideAddActionCorrective } from '../../JS/Actions/DashbordActions';

const ActionCorrectiveCard = ({ ActionCorrective }) => { 

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(hideAddActionCorrective())
        dispatch(getActionCorrective(ActionCorrective._id))

    }
    
    return (
        <>
            <Card>
                <Card.Content>                                
                    <Image
                        floated='right'
                        size='mini'
                        src={ActionCorrective.responsible.imageLink}
                    />
                    
                    <Card.Header as='a' onClick={handleClick} >{ActionCorrective.name}</Card.Header>
                    
                    <Card.Meta> Crée: <b>{moment(ActionCorrective.createdAt).fromNow()}</b> | Modifié <b>{moment(ActionCorrective.modifiedAt).fromNow()}</b></Card.Meta>
                    <Card.Description>
                        {ActionCorrective.description}
                    </Card.Description>

                </Card.Content>

                <Card.Content>
                    
                    <List.Item size='tiny'>
                    {(() => {
  
                        switch (ActionCorrective.status) {
                            case 'Bloquée':
                                return (
                                <Label color='red' horizontal>{ActionCorrective.status}</Label>
                                )
                            
                         
                            case 'Terminée':
                                return (
                                    <Label color='green' horizontal>{ActionCorrective.status}</Label>
                                )
                                case 'En cours':
                                    return (
                                        <Label color='purple' horizontal>{ActionCorrective.status}</Label>
                                    )

                            default:
                                return (
                                <Label horizontal>{ActionCorrective.status}</Label>
                                )
                        }

                        })()}
                    
                    </List.Item>
                    </Card.Content>
            </Card>
            
        </>
    )
}

export default ActionCorrectiveCard