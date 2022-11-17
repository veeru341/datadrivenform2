import React, { useState } from 'react';
import JSONEditorDemo from './jsonmaps/JSONEditorDemo';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../redux/';
import { Link } from "react-router-dom"

function JsonMaps() {

  const [isshowing, setIsshowing] = useState(false);

  const state = useSelector((state: any) => state.schemaState);

  const dispatch = useDispatch();
  const { jsonstructure } = bindActionCreators(actionCreators, dispatch);
  const { jsonstructureedit } = bindActionCreators(actionCreators, dispatch);


  const [data1, setData1] = useState<any>({ "id": "" });

  const [data2, setData2] = useState({
    json: {}
  });

  const onChangeJSON = (json: any) => {
    setData2({ json });
  };

  const handleChange1 = (e: any) => {
    data1.id = e.target.value;
    setData1({ ...data1 });
    console.log(data1)
  }

  const handleClick = () => {
    //const newdata = JSON.parse(data2);
    const object3 = { ...data1, ...data2 };
    console.log(object3);
    jsonstructure(object3);
    setIsshowing(!isshowing)
  }

  const showjsoneditor = () => {
    setIsshowing(true);
  }

  const editjson = (i: any) => {
    jsonstructureedit(i);
    setIsshowing(false);
  }

  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "15%", minHeight: "90vh", backgroundColor: "#324BCA", display: "flex", flexDirection: "column" }}>
        <div>
          <button style={{ height: "45px", color: 'white', width: '80%', marginTop: "20px", marginLeft: "10%", fontSize: "15px", cursor: 'pointer', backgroundColor: "#56baed", border: "none" }} onClick={showjsoneditor}>Create Json Structure</button>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {
            state.jsonstructure.map((i: any) => {
              return (
                <Link to="/jsoneditstructure"><button style={{ height: "45px", color: 'white', width: '80%', marginTop: "20px", marginLeft: "10%", fontSize: "15px", cursor: 'pointer', backgroundColor: "#56baed", border: "none" }} onClick={() => editjson(i)}>{i.id}</button></Link>
              )
            })
          }
        </div>
      </div>
      {isshowing ?
        (<div style={{ display: "flex", width: "85%" }}>
          <div style={{ width: "75%", minHeight: "90vh", display: "flex" }}>
            <div style={{width:"50%"}}>
            <JSONEditorDemo
              json={data2.json}
              onChangeJSON={onChangeJSON}
            />
            </div>
            <div style={{width:"50%"}}>
              <pre>
                <code>
                  {JSON.stringify(data2.json, null, 2)}
                </code>
              </pre>
            </div>
          </div>
          <div style={{ width: "25%", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", backgroundColor: "#324BCA" }}>
            <h2 style={{ color: "white", marginBottom: "20px" }}>Create Json Structure</h2>
            <input type="text" placeholder="Enter Json name" name="id" style={{ width: "70%" }} className="logininput" onChange={handleChange1} autoComplete="off" /><br />
            <button className="createschemabutton" onClick={handleClick}>Add Json Structure</button>
          </div>
        </div>) : null}
    </div>
  );
}

export default JsonMaps;