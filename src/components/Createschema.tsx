import React, { useState } from 'react';
import Editor from '@data-driven-forms/editor-pro/editor';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../redux';
var jsonfn = require('./jsonfn/jsonfn');

export default function Testing() {
  const [data1, setData1] = useState<any>({ "id": "" });
  const [data2, setData2] = useState<any>();

  const dispatch = useDispatch();
  const { depositMoney } = bindActionCreators(actionCreators, dispatch);
  

  const handleChange1 = (e: any) => {
    data1.id = e.target.value;
    setData1({ ...data1 });
    console.log(data1)
  }

  const handleChange2 = (e: any) => {
    setData2(e.target.value);
    console.log(data2)
  }

  const handleClick = () => {
    const newdata = eval("(" + data2 + ")");
    const object3 = { ...data1, ...newdata };
    console.log("checking data combining", object3);
    depositMoney(object3);
  }

  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "75%" }}>
        <Editor />
      </div>
      <div style={{ padding: "10px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "#324BCA", width: "25%" }}>
        <h1 style={{ color: "white", marginTop: "20px", marginBottom: "30px" }}>Create New Form</h1>
        <input type="text" placeholder="Enter Schema Name" name="id" style={{ width: "100%" }} className="logininput" onChange={handleChange1} autoComplete="off" /><br />
        <input type="text" placeholder="Enter Schema Here" name="field" style={{ width: "100%" }} className="logininput" onChange={handleChange2} autoComplete="off" /><br />
        <button className="createschemabutton" onClick={handleClick}>Add Form</button>
      </div>
    </div>
  )
}