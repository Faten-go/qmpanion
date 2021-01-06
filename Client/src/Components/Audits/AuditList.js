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
import { getAllAudits } from '../../JS/Actions/Audits';
  import AuditCard from './AuditCard';
  import AuditsLoader from './AuditsLoader';
  import { Link } from "react-router-dom";
import FilterAudits from "./FilterAudits";


function AuditList({ textSearch }) {

    const dispatch = useDispatch();
    const audits= useSelector((state) => state.auditsList.audits);
    const loading = useSelector((state) => state.auditsList.loadingAudits);



    useEffect(() => {
      dispatch(getAllAudits());
    }, []);

    return (
        <div>
         
            <Card.Group fluid 
                itemsPerRow={1}
                style={{
                    overflow: 'auto',
                    maxHeight: '100vh'
                }}
            >
                
                {loading ? (
                    <AuditsLoader></AuditsLoader>
                ) : (
                    audits
                    .filter((el) => el.name.toUpperCase().includes(textSearch.toUpperCase()))                    
                    .map((el) => <AuditCard key={el._id} audit={el} />)
                )}
                                
            </Card.Group>
            
        </div>
    )
}

export default AuditList
