import React, { useEffect }  from 'react';
import { useDispatch, useSelector  } from "react-redux";
import {  getAudit} from "../../JS/Actions/Audits";
function AuditDetails() {

    const dispatch = useDispatch();
    const selectedAudit = useSelector((state) => state.auditsList.selectedAudit);

    useEffect(() => {
        dispatch(getAudit());
      }, []);


    return (
        <div>
           {selectedAudit.name} 
        </div>
    )
}

export default AuditDetails
