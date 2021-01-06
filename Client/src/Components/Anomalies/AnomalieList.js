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
import { getAllAnomalies } from '../../JS/Actions/Anomalies';
  import AnomalieCard from './AnomalieCard';
  import AnomaliesLoader from './AnomaliesLoader';
  import { Link } from "react-router-dom";
import FilterAnomalies from "./FilterAnomalies";


function AnomalieList({ textSearch }) {

    const dispatch = useDispatch();
    const Anomalies= useSelector((state) => state.anomaliesList.anomalies);
    const loading = useSelector((state) => state.anomaliesList.loadingAnomalies);



    useEffect(() => {
      dispatch(getAllAnomalies());
    }, []);

    return (
        <div>
         
            <Card.Group fluid 
                itemsPerRow={1}
                style={{

                }}
            >
                
                {loading ? (
                    <AnomaliesLoader></AnomaliesLoader>
                ) : (
                    Anomalies
                    .filter((el) => el.name.toUpperCase().includes(textSearch.toUpperCase()))                    
                    .map((el) => <AnomalieCard key={el._id} Anomalie={el} />)
                )}
                                
            </Card.Group>
            
        </div>
    )
}

export default AnomalieList
