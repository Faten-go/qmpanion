import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    Sidebar,
    Menu,
    Icon,
    Card,
    Image,
    Label,
    List
  } from 'semantic-ui-react';
import { getAllActionCorrectives } from '../../JS/Actions/ActionsCorrectives';
  import ActionCorrectiveCard from './ActionCorrectiveCard';
  import ActionsCorrectivesLoader from './ActionsCorrectivesLoader';
  import { Link } from "react-router-dom";
import FilterActionsCorrectives from "./FilterActionsCorrectives";


function ActionCorrectiveList({ textSearch }) {

    const dispatch = useDispatch();
    const ActionCorrectives = useSelector((state) => state.actionCorrectivesList.actionCorrectives);
    const loading = useSelector((state) => state.actionCorrectivesList.loadingActionCorrectives);



    useEffect(() => {
      dispatch(getAllActionCorrectives());
    }, []);

    return (
        <div>
         
            <Card.Group fluid 
                itemsPerRow={1}
                style={{
                    overflow: 'auto',
                    maxHeight: '85vh'
                }}
            >
                
                {loading ? (
                    <ActionsCorrectivesLoader></ActionsCorrectivesLoader>
                ) : (
                    ActionCorrectives
                    .filter((el) => el.name.toUpperCase().includes(textSearch.toUpperCase()))                    
                    .map((el) => <ActionCorrectiveCard key={el._id} ActionCorrective={el} />)
                )}
                                
            </Card.Group>
            
        </div>
    )
}

export default ActionCorrectiveList