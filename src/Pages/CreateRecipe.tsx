import React, { useState, useEffect } from "react";
import FormRenderer from "@data-driven-forms/react-form-renderer/form-renderer";
import componentTypes from "@data-driven-forms/react-form-renderer/component-types";
import TextField from "@data-driven-forms/mui-component-mapper/text-field";
import Tabs from "@data-driven-forms/mui-component-mapper/tabs";
import Wizard from "@data-driven-forms/mui-component-mapper/wizard";
import Checkbox from "@data-driven-forms/mui-component-mapper/checkbox";
import fieldArray from "@data-driven-forms/mui-component-mapper/field-array";
import { Select, Radio, Textarea, DatePicker } from "@data-driven-forms/mui-component-mapper";
import SendIcon from "@mui/icons-material/Send";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid-pro";
import DDFButton from "../CustomControls/DDFButton";
import DdfGrid from "../CustomControls/DdfGrid";
import DdfGrid2 from "../CustomControls/DdfGrid2";
import Filler from "../CustomControls/Filler";
import SingleColumnLayout from "../CustomControls/SingleColumnLayout"
import ThreeColumnLayout from "../CustomControls/ThreeColumnLayout"
import MuiFormTemplate from '@data-driven-forms/mui-component-mapper/form-template';
import CreateRecipeWizardCCL from "../CustomControls/CreateRecipeWizardCCL";
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../redux/';
import axios from "axios"
import { useSelector } from 'react-redux';

const componentMapper = {
    [componentTypes.TEXT_FIELD]: TextField,
    [componentTypes.WIZARD]: Wizard,
    [componentTypes.RADIO]: Radio,
    [componentTypes.SELECT]: Select,
    [componentTypes.CHECKBOX]: Checkbox,
    [componentTypes.TEXTAREA]: Textarea,
    [componentTypes.FIELD_ARRAY]: fieldArray,
    [componentTypes.TABS]: Tabs,
    [componentTypes.DATE_PICKER]: DatePicker,
    "demogrid": DdfGrid,
    "demogrid2": DdfGrid2,
    "Button": DDFButton,
    "SingleColumnLayout": SingleColumnLayout,
    "ThreeColumnLayout": ThreeColumnLayout,
    "CreateRecipeWizardCCL": CreateRecipeWizardCCL,
    "Filler": Filler
};

const FormTemplate = (props: any) => <MuiFormTemplate {...props} showFormControls={false} />

export default function Createrecipe2() {

    const [istheredata, setIstheredata] = useState(false)

    const columns: GridColDef[] = [
        { field: "col1", headerName: "Parameter", width: 140, flex: 1, editable: true },
        { field: "col2", headerName: "Value", width: 140, flex: 1, editable: true },
        { field: "col3", headerName: "UOM", width: 140, flex: 1, editable: true },
        { field: "col4", headerName: "Max", width: 140, flex: 1, editable: true },
        { field: "col5", headerName: "Min", width: 140, flex: 1, editable: true },
        { field: "col6", headerName: "Map Name 1", width: 140, flex: 1, editable: true },
        { field: "col7", headerName: "Map Name 2", width: 140, flex: 1, editable: true },
        { field: "col8", headerName: "Map Name 3", width: 140, flex: 1, editable: true },
        {
            field: "col9", headerName: "", width: 150, flex: 1,
            renderCell: (params: any) => {
                return (
                    <>
                        <Button onClick={() => {
                            console.log(params.row);
                            params.row.EditClick(params.row, params.row.form, params.row.grid);
                        }}><BorderColorIcon /></Button>

                        <Button onClick={() => {
                            console.log(params.row);
                            params.row.DeleteClick(params.row, params.row.form, params.row.grid);
                        }}><DeleteIcon /></Button>
                    </>);
            }
        },
    ];

    const [gridrows, setGridRows] = useState([
        { id: 1, col1: "Thickness", col2: "0.7", col3: "mm", col4: "0.5", col5: "0.9", col6: "sample text", col7: "sample text", col8: "sample text", col9: "" },
        { id: 2, col1: "Spin Speed", col2: "2", col3: "kk", col4: "3", col5: "5", col6: "sample text", col7: "sample text", col8: "sample text", col9: "" },
        { id: 3, col1: "Recipe Name", col2: "ETCH", col3: "Text", col4: "sample text", col5: "sample text", col6: "sample text", col7: "sample text", col8: "sample text", col9: "" }
    ]);

    const matrixcolumns: GridColDef[] = [
        { field: "matrixcol1", headerName: "Equipment family", width: 185, flex: 1 },
        { field: "matrixcol2", headerName: "Equipment", width: 185, flex: 1 },
        { field: "matrixcol3", headerName: "Spec", width: 185, flex: 1 },
        { field: "matrixcol4", headerName: "Product", width: 185, flex: 1 },
        { field: "matrixcol5", headerName: "Process Spec", width: 185, flex: 1 },
        { field: "matrixcol6", headerName: "Last Modified", width: 185, flex: 1 },
        { field: "matrixcol7", headerName: "Modified By", width: 185, flex: 1 }
    ];

    const matrixgridrows = [
        { id: 1, matrixcol1: "sample text", matrixcol2: "sample text", matrixcol3: "sample text", matrixcol4: "sample text", matrixcol5: "sample text", matrixcol6: "sample text", matrixcol7: "sample text" },
        { id: 2, matrixcol1: "sample text", matrixcol2: "sample text", matrixcol3: "sample text", matrixcol4: "sample text", matrixcol5: "sample text", matrixcol6: "sample text", matrixcol7: "sample text" },
        { id: 3, matrixcol1: "sample", matrixcol2: "sample text", matrixcol3: "sample text", matrixcol4: "sample text", matrixcol5: "sample text", matrixcol6: "sample text", matrixcol7: "sample text" }
    ];

    const schema3 = {

        "fields": [
            {
                "component": "tabs",
                "name": "tabs",
                "fields": [
                    {
                        "name": "1",
                        "title": "Detail",
                        "description": "Here you can find fruits",
                        "fields": [
                            {
                                "component": "ThreeColumnLayout",
                                "name": "ThreeColumnLayout",
                                "fields": [
                                    {
                                        component: 'text-field',
                                        label: "Parameter",
                                        name: "col1",
                                    },
                                    {
                                        component: 'text-field',
                                        label: "value",
                                        name: "col2",
                                    },
                                    {
                                        component: 'text-field',
                                        label: "UOM",
                                        name: "col3",
                                    },
                                    {
                                        component: 'text-field',
                                        label: "Min",
                                        name: "col4",
                                    },
                                    {
                                        component: 'text-field',
                                        label: "Max",
                                        name: "col5",
                                    },
                                    {
                                        component: 'text-field',
                                        label: "Map Name 1",
                                        name: "col6",
                                    },
                                    {
                                        component: 'text-field',
                                        label: "Map Name 2",
                                        name: "col7",
                                    },
                                    {
                                        component: 'text-field',
                                        label: "Map Name 3",
                                        name: "col8",
                                    },
                                    {
                                        "component": "Filler",
                                        "name": "filler1",
                                        "label": "filler1",
                                        xs: "6",
                                        onBlur: (e: any) => { },
                                    },
                                    {
                                        component: "Button",
                                        label: "Checkbox",
                                        name: "Add New",
                                        icon: <SendIcon />,
                                        clickHandler: (formOptions: any) => {
                                            debugger;
                                            var col11 = formOptions.getState().values.col1;
                                            var col12 = formOptions.getState().values.col2;
                                            var col13 = formOptions.getState().values.col3;
                                            var col14 = formOptions.getState().values.col4;
                                            var col15 = formOptions.getState().values.col5;
                                            var col16 = formOptions.getState().values.col6;
                                            var col17 = formOptions.getState().values.col7;
                                            var col18 = formOptions.getState().values.col8;
                                            setGridRows([...gridrows, {
                                                id: Math.trunc(Math.random() * 100),
                                                col1: col11,
                                                col2: col12,
                                                col3: col13,
                                                col4: col14,
                                                col5: col15,
                                                col6: col16,
                                                col7: col17,
                                                col8: col18,
                                                col9: ""
                                            }])
                                            formOptions.change("col1", "");
                                            formOptions.change("col2", "");
                                            formOptions.change("col3", "");
                                            formOptions.change("col4", "");
                                            formOptions.change("col5", "");
                                            formOptions.change("col6", "");
                                            formOptions.change("col7", "");
                                            formOptions.change("col8", "");
                                        }
                                    }
                                ]
                            },
                            {
                                "component": "Filler",
                                "name": "filler1",
                                "label": "filler1",
                                xs: "6",
                                onBlur: (e: any) => { },
                            },
                            {
                                component: "demogrid",
                                label: "hello",
                                name: "adf",
                                rows: gridrows,
                                columns: columns,
                                checkboxSelection: false,
                                gridApi: [],
                                formOptions: [],
                                //Signature is tied to render cell method of GridColumn
                                EditClick: (data: any, formAPI: any, gridAPI: any) => {
                                    formAPI.change('col1', data.col1);
                                    formAPI.change('col2', data.col2);
                                    formAPI.change('col3', data.col3);
                                    formAPI.change('col4', data.col4);
                                    formAPI.change('col5', data.col5);
                                    formAPI.change('col6', data.col6);
                                    formAPI.change('col7', data.col7);
                                    formAPI.change('col8', data.col8);
                                    formAPI.change('id', data.id);
                                },
                                //Signature is tied to render cell method of GridColumn
                                DeleteClick: (data: any, formAPI: any, gridAPI: any) => {
                                    debugger
                                    var cht: any[] = [];
                                    gridAPI.current.getRowModels().forEach((x: any) => {
                                        var k: any = {};
                                        Object.keys(x).forEach((element2) => {
                                            if (typeof x[element2] != 'function') {
                                                k[element2] = x[element2];
                                            }
                                        });
                                        cht.push(k)
                                    });


                                    setGridRows(cht.filter(x => x.id != data.id && x.col1 != data.col1 && x.col2 != data.col2))
                                },
                            },
                            {
                                component: "Button",
                                label: "Save",
                                name: "Save",
                                icon: <SendIcon />,
                                clickHandler: (formOptions: any) => {
                                    alert("saved grid data to db");
                                },
                            },
                        ],
                    },
                    {
                        "name": "2",
                        "title": "matrix",
                        "description": "Here you can find vegetables",
                        "fields": [
                            {
                                "component": "SingleColumnLayout",
                                "name": "SingleColumnLayout",
                                "fields": [
                                    {
                                        component: "demogrid2",
                                        label: "hello",
                                        name: "adffg",
                                        rows: matrixgridrows,
                                        columns: matrixcolumns,
                                        checkboxSelection: false,
                                        gridApi: [],
                                        formOptions: [],
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }

    const state = useSelector((state: any) => state.schemaState);
    const dispatch = useDispatch();
    const { clearcreaterecipedata } = bindActionCreators(actionCreators, dispatch);
    const createrecipewizard1 = state.createrecipewizard[0];
    console.log(createrecipewizard1);
    const result = state.createrecipewizard.includes("veeru");
    console.log("checking result", result);

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} style={{ padding: "40px 20px 0px 40px" }}>
                <div style={{ height: "100px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" }}>
                    <div style={{ display: "flex" }}>
                        <label style={{ backgroundColor: "#D9D9D9", color: "#282828", height: "40px", width: "200px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "10px" }}>Select Equipment Family</label>
                        <label style={{ backgroundColor: "#dcecf7", color: "#282828", height: "40px", width: "200px", display: "flex", alignItems: "center", justifyContent: "center" }}>{state.createrecipewizard[0]?.selectEquipmentFamily}</label>
                    </div>
                    <div style={{ display: "flex" }}>
                        <label style={{ backgroundColor: "#D9D9D9", color: "#282828", height: "40px", width: "200px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "10px" }}>Select Equipment</label>
                        <label style={{ backgroundColor: "#dcecf7", color: "#282828", height: "40px", width: "200px", display: "flex", alignItems: "center", justifyContent: "center" }}>{state.createrecipewizard[0]?.selectEquipment}</label>
                    </div>
                    <div style={{ display: "flex" }}>
                        <label style={{ backgroundColor: "#D9D9D9", color: "#282828", height: "40px", width: "200px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "10px" }}>Select Spec</label>
                        <label style={{ backgroundColor: "#dcecf7", color: "#282828", height: "40px", width: "200px", display: "flex", alignItems: "center", justifyContent: "center" }}>{state.createrecipewizard[1]?.selectSpec}</label>
                    </div>
                    <div style={{ display: "flex" }}>
                        <label style={{ backgroundColor: "#D9D9D9", color: "#282828", height: "40px", width: "200px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "10px" }}>Select Process Spec</label>
                        <label style={{ backgroundColor: "#dcecf7", color: "#282828", height: "40px", width: "200px", display: "flex", alignItems: "center", justifyContent: "center" }}>{state.createrecipewizard[1]?.selectProcessSpec}</label>
                    </div>
                    <div style={{ display: "flex" }}>
                        <label style={{ backgroundColor: "#D9D9D9", color: "#282828", height: "40px", width: "200px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "10px" }}>Select Product</label>
                        <label style={{ backgroundColor: "#dcecf7", color: "#282828", height: "40px", width: "200px", display: "flex", alignItems: "center", justifyContent: "center" }}>{state.createrecipewizard[1]?.selectProduct}</label>
                    </div>
                </div>

            </Grid>
            <Grid item xs={12} style={{ padding: "40px 20px 0px 40px" }}>
                <pre>{JSON.stringify(state.createrecipewizard, null, 2)}</pre>
            </Grid>
            <Grid item xs={12} style={{ padding: "20px 20px 0px 40px" }}>
                <FormRenderer
                    schema={schema3}
                    FormTemplate={FormTemplate}
                    componentMapper={componentMapper}
                    onSubmit={(val) => { console.log(val) }}
                />
            </Grid>
        </Grid>
    )
}
