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


function AuditList() {

    const dispatch = useDispatch();
    const audits= useSelector((state) => state.auditsList.audits);
    const loading = useSelector((state) => state.auditsList.loadingAudits);
    useEffect(() => {
      dispatch(getAllAudits());
    }, []);

    return (
        <div>
          <FilterAudits></FilterAudits>  
            <Card.Group fluid 
                itemsPerRow={1}
                style={{

                }}
            >
                
                {loading ? (
                    <AuditsLoader></AuditsLoader>
                ) : (
                    audits.map((el) => <AuditCard key={el._id} audit={el} />)
                )}
                                
            </Card.Group>
            
        </div>
    )
}

export default AuditList
