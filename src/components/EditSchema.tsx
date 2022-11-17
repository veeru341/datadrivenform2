import React, { useState } from 'react';
import Editor from '@data-driven-forms/editor-pro/editor';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../redux/';


export default function EditSchema() {
    const [data1, setData1] = useState<any>({ "id": "" });
    const [data2, setData2] = useState<any>({});

    const state = useSelector((state: any) => state.schemaState);


    const dispatch = useDispatch();
    const { editschema } = bindActionCreators(actionCreators, dispatch);


    const handleChange2 = (e: any) => {
        setData2(e.target.value);
        console.log(data2)
    }

    const handleClick = (schemas : any) => {
        data1.id = schemas.id;
        setData1({ ...data1 });
        console.log(data1)
        const newdata = JSON.parse(data2);
        const object3 = { ...data1, ...newdata };
        console.log(object3);
        editschema(object3);
    }

    return (
        <div style={{display:"flex"}}>
            <div style={{width:"75%"}}>
                <Editor />
            </div>
            <div style={{padding: "10px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "#324BCA", width:"25%" }}>
                <h1 style={{color: "white" }}>Edit Form</h1>
                {
                    state.schemaview.map((schemas: any, index: number) => {
                        return (
                            <div className="editschemaform" key={index}>
                                <h2 className="editformheading">{schemas.id}</h2>
                                <input type="text" placeholder="Enter Schema Here" name="field" style={{width:"100%"}} className="logininput" onChange={handleChange2} autoComplete="off" /><br />
                                <button className="createschemabutton" onClick={()=>handleClick(schemas)}>Update Form</button>
                            </div>)
                    })
                }
            </div>
        </div>
    )
}

