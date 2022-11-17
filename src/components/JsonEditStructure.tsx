import React, { useEffect, useState } from "react";
import JSONEditorDemo2 from './jsonmaps/JSONEditorDemo2';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../redux/';
import { Link } from "react-router-dom"


function JsonEditStructure() {

    const state = useSelector((state: any) => state.schemaState);
    const [data3, setData3] = useState(state.jsonstructureview[0]);
    const [data4, setData4] = useState(state.jsonstructureview[0])

    const dispatch = useDispatch();
    const { jsonstructureeditsave } = bindActionCreators(actionCreators, dispatch);

    const onChangeJSON = (json: any) => {
        setData3({ json });
    };

    const handleeditsave = () => {
        const combinedata = { ...data4, ...data3 };
        jsonstructureeditsave(combinedata)
    }

    return (
        <div style={{ display: "flex", width: "100%" }}>
            <div style={{ width: "20%", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", backgroundColor: "#324BCA" }}>
                <h2 style={{ color: "white", marginBottom: "20px" }}>Edit {data4.id} Structure</h2>
                <Link to="/settings"><button className="createschemabutton" onClick={handleeditsave}>Save</button></Link>
            </div>
            <div style={{ width: "80%", minHeight: "90vh", display: "flex" }}>
                <JSONEditorDemo2
                    onChangeJSON={onChangeJSON}
                    json={data3.json}
                    style={{ width: "10%" }}
                />
                <div style={{ width: "90%" }}>
                    <pre>
                        <code>
                            {JSON.stringify(data3, null, 2)}
                        </code>
                    </pre>
                </div>
            </div>
        </div>)
}

export default JsonEditStructure