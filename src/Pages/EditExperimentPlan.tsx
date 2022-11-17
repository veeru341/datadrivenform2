import React, { Fragment, useState } from "react";
import FormRenderer from "@data-driven-forms/react-form-renderer/form-renderer";
import componentTypes from "@data-driven-forms/react-form-renderer/component-types";
import TextField from "@data-driven-forms/mui-component-mapper/text-field";
import Tabs from "@data-driven-forms/mui-component-mapper/tabs";
import Wizard from "@data-driven-forms/mui-component-mapper/wizard";
import Checkbox from "@data-driven-forms/mui-component-mapper/checkbox";
import fieldArray from "@data-driven-forms/mui-component-mapper/field-array";
import { Select, Radio, Textarea, DatePicker } from "@data-driven-forms/mui-component-mapper";
import Grid from "@mui/material/Grid";
import { GridColDef } from "@mui/x-data-grid-pro";
import DDFButton from "../CustomControls/DDFButton";
import DdfGrid from "../CustomControls/DdfGrid";
import Filler from "../CustomControls/Filler";
import SingleColumnLayout from "../CustomControls/SingleColumnLayout";
import FourColumnLayout from "../CustomControls/FourColumnLayout";
import EditExperimentPlanGrid from "../CustomControls/EditExperimentPlanGrid";
import MuiFormTemplate from '@data-driven-forms/mui-component-mapper/form-template';
import { Button } from "@mui/material";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import HeightIcon from '@mui/icons-material/Height';
import SendIcon from "@mui/icons-material/Send";
import SettingsIcon from '@mui/icons-material/Settings';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';

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
    "Button": DDFButton,
    "SingleColumnLayout": SingleColumnLayout,
    "EditExperimentPlanGrid": EditExperimentPlanGrid,
    "FourColumnLayout" : FourColumnLayout,
    "Filler": Filler
};

const FormTemplate = (props: any) => <MuiFormTemplate {...props} showFormControls={false} />

export default function EditExperimentPlan() {

    const detailcolumns: GridColDef[] = [
        { field: "detailscol1", headerName: "Parameter", width: 160, editable: true, flex: 1 },
        { field: "detailscol2", headerName: "Value", width: 160, editable: true, flex: 1 },
        { field: "detailscol3", headerName: "UOM", width: 160, editable: true, flex: 1 },
        { field: "detailscol4", headerName: "Max", width: 160, editable: true, flex: 1 },
        { field: "detailscol5", headerName: "Min", width: 160, editable: true, flex: 1 },
        { field: "detailscol6", headerName: "Map Name 1", width: 160, editable: true, flex: 1 },
        { field: "detailscol7", headerName: "Map Name 2", width: 160, editable: true, flex: 1 },
        { field: "detailscol8", headerName: "Map Name 3", width: 160, editable: true, flex: 1 }
    ]

    const [detailsgridrows, setDetailsGridRows] = useState([
        { id: 1, detailscol1: "sample text", detailscol2: "sample text", detailscol3: "sample text", detailscol4: "sample text", detailscol5: "sample text", detailscol6: "sample text", detailscol7: "sample text", detailscol8: "sample text" },
        { id: 2, detailscol1: "sample text", detailscol2: "sample text", detailscol3: "sample text", detailscol4: "sample text", detailscol5: "sample text", detailscol6: "sample text", detailscol7: "sample text", detailscol8: "sample text" },
        { id: 3, detailscol1: "sample text", detailscol2: "sample text", detailscol3: "sample text", detailscol4: "sample text", detailscol5: "sample text", detailscol6: "sample text", detailscol7: "sample text", detailscol8: "sample text" },
        { id: 4, detailscol1: "sample text", detailscol2: "sample text", detailscol3: "sample text", detailscol4: "sample text", detailscol5: "sample text", detailscol6: "sample text", detailscol7: "sample text", detailscol8: "sample text" },
    ]);

    const workflowcolumns: GridColDef[] = [
        {
            field: "workflowcol1", headerName: "", width: 150, flex: 1, headerClassName: 'super-app-theme--header',
            renderCell: (params: any) => {
                return (
                    <div style={{display:"flex", justifyContent:"center", alignItems:"center", width:"100%"}}>
                        <CreateOutlinedIcon />
                    </div>
                );
            },
            renderHeader: (params: any) => (
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "-35px", height: "100px"}}>
                    <div>
                        Actions
                    </div>
                    <div style={{ display: "flex", marginLeft: "20px" }}>
                        <HeightIcon style={{ width: "20px" }} />
                    </div>
                </div>
            )
        },
        {
            field: "workflowcol2", headerName: "", flex: 3, renderHeader: (params: any) => (
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "-35px", height:"100px" }}>
                    <div style={{ display: "flex", flexDirection: "column", marginTop:10 }}>
                        Workflow
                        <input type="text" style={{ border: 0, marginTop: "-20px", width: "250px", height: "30px" }} />
                    </div>
                    <div style={{ display: "flex", marginLeft: "10px" }}>
                        <HeightIcon style={{ width: "20px" }} />
                    </div>
                </div>
            ),
        },
        {
            field: "workflowcol3", headerName: "", flex: 3,
            renderHeader: (params: any) => (
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "-35px", height:"100px" }}>
                    <div>
                        Sequence
                    </div>
                    <div style={{ display: "flex", marginLeft: "180px" }}>
                        <HeightIcon style={{ width: "20px" }} />
                    </div>
                </div>
            )
        },
        {
            field: "workflowcol4", headerName: "", flex: 3, renderHeader: (params: any) => (
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "-35px", height:"100px" }}>
                    <div style={{ display: "flex", flexDirection: "column", marginTop:10 }}>
                        Step
                        <input type="text" style={{ border: 0, marginTop: "-20px", width: "250px", height: "30px" }} />
                    </div>
                    <div style={{ display: "flex", marginLeft: "10px" }}>
                        <HeightIcon style={{ width: "20px" }} />
                    </div>
                </div>
            ),
        },
        {
            field: "workflowcol5", headerName: "", flex: 3,
            renderHeader: (params: any) => (
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "-35px", height:"100px" }}>
                    <div>
                        Description
                    </div>
                    <div style={{ display: "flex", marginLeft: "180px" }}>
                        <HeightIcon style={{ width: "20px" }} />
                    </div>
                </div>
            )
        },
        {
            field: "workflowcol6", headerName: "", flex: 0.5,
            renderHeader: (params: any) => (
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div>
                        <SettingsIcon style={{ width: "20px" }} />
                    </div>
                </div>
            )
        },
    ];

    const [workflowgridrows, setWorkflowGridRows] = useState([
        { id: 1, workflowcol1: "Edit", workflowcol2: "WAFER_001", workflowcol3: "1", workflowcol4: "WFS_S01", workflowcol5: "", workflowcol6: "" },
        { id: 2, workflowcol1: "Edit", workflowcol2: "WAFER_002", workflowcol3: "2", workflowcol4: "FAB_IQC", workflowcol5: "", workflowcol6: "" },
        { id: 3, workflowcol1: "Edit", workflowcol2: "WAFER_003", workflowcol3: "3", workflowcol4: "DEPOSITION_1", workflowcol5: "", workflowcol6: "" },
        { id: 4, workflowcol1: "Edit", workflowcol2: "WAFER_004", workflowcol3: "4", workflowcol4: "LITHO_1", workflowcol5: "", workflowcol6: "" },
        { id: 5, workflowcol1: "Edit", workflowcol2: "WAFER_005", workflowcol3: "5", workflowcol4: "ETCH_1", workflowcol5: "", workflowcol6: "" },
        { id: 6, workflowcol1: "Edit", workflowcol2: "WAFER_006", workflowcol3: "6", workflowcol4: "DEPOSITION_2", workflowcol5: "", workflowcol6: "" },
        { id: 7, workflowcol1: "Edit", workflowcol2: "WAFER_007", workflowcol3: "7", workflowcol4: "BAKE_RESIST", workflowcol5: "", workflowcol6: "" },
        { id: 8, workflowcol1: "Edit", workflowcol2: "WAFER_008", workflowcol3: "8", workflowcol4: "LITHO_2", workflowcol5: "", workflowcol6: "" },
        { id: 9, workflowcol1: "Edit", workflowcol2: "WAFER_009", workflowcol3: "9", workflowcol4: "ETCH_2", workflowcol5: "", workflowcol6: "" },
        { id: 10, workflowcol1: "Edit", workflowcol2: "WAFER_010", workflowcol3: "10", workflowcol4: "STRIP", workflowcol5: "", workflowcol6: "" },
    ]);

    const epdcolumns: GridColDef[] = [
        { field: "epdcol1", headerName: "Actions", width: 185, editable: true },
        { field: "epdcol2", headerName: "Workflow", width: 185, editable: true },
        { field: "epdcol3", headerName: "Step", width: 185, editable: true },
        { field: "epdcol4", headerName: "Step Name", width: 185, editable: true },
        { field: "epdcol5", headerName: "Spec", width: 185, editable: true },
        { field: "epdcol6", headerName: "Skip-To-Step", width: 185, editable: true },
        { field: "epdcol7", headerName: "settings", width: 185, editable: true }
    ];

    const [epdgridrows, setEpdGridRows] = useState([
        { id: 1, epdcol1: "sample text", epdcol2: "sample text", epdcol3: "sample text", epdcol4: "sample text", epdcol5: "sample text", epdcol6: "sample text", epdcol7: "sample text" },
        { id: 2, epdcol1: "sample text", epdcol2: "sample text", epdcol3: "sample text", epdcol4: "sample text", epdcol5: "sample text", epdcol6: "sample text", epdcol7: "sample text" },
        { id: 3, epdcol1: "sample text", epdcol2: "sample text", epdcol3: "sample text", epdcol4: "sample text", epdcol5: "sample text", epdcol6: "sample text", epdcol7: "sample text" },
        { id: 4, epdcol1: "sample text", epdcol2: "sample text", epdcol3: "sample text", epdcol4: "sample text", epdcol5: "sample text", epdcol6: "sample text", epdcol7: "sample text" },
    ]);

    var eepschema3 = {
        "fields": [
            {
                "component": "tabs",
                "name": "tabs",
                "fields": [
                    {
                        "name": "1",
                        "title": "Details",
                        "description": "details",
                        "fields": [
                            {
                                component: "EditExperimentPlanGrid",
                                label: "detailstab",
                                name: "detailstab",
                                rows: detailsgridrows,
                                columns: detailcolumns,
                                checkboxSelection: false,
                                gridApi: [],
                                formOptions: []
                            }
                        ]
                    },
                    {
                        "name": "2",
                        "title": "Workflow",
                        "description": "workflow",
                        "fields": [
                            {
                                component: "EditExperimentPlanGrid",
                                label: "workflowtab",
                                name: "workflowtab",
                                rows: workflowgridrows,
                                columns: workflowcolumns,
                                checkboxSelection: false,
                                gridApi: [],
                                formOptions: [],
                            },
                            {
                                "component": "Filler",
                                "name": "filler1",
                                "label": "filler1",
                                xs: "6",
                                onBlur: (e: any) => { },
                            },
                            {
                                "component": "FourColumnLayout",
                                "name": "FourColumnLayout",
                                "fields": [
                                    {
                                        "component": "Filler",
                                        "name": "filler1",
                                        "label": "filler1",
                                        xs: "6",
                                        onBlur: (e: any) => { },
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
                                        label: "Save",
                                        name: "Save",
                                        icon: <SendIcon />,
                                        clickHandler: (formOptions: any) => {
                                            alert("saved grid data to db");
                                        },
                                    },
                                    {
                                        component: "Button",
                                        label: "Reset",
                                        name: "Reset",
                                        icon: <SendIcon />,
                                        clickHandler: (formOptions: any) => {
                                            alert("saved grid data to db");
                                        },
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "name": "3",
                        "title": "Experiment Plan Details",
                        "description": "experiment plan details",
                        "fields": [
                            {
                                component: "EditExperimentPlanGrid",
                                label: "experimentplandetails",
                                name: "experimentplandetails",
                                rows: epdgridrows,
                                columns: epdcolumns,
                                checkboxSelection: false,
                                gridApi: [],
                                formOptions: [],
                            },
                            {
                                "component": "Filler",
                                "name": "filler1",
                                "label": "filler1",
                                xs: "6",
                                onBlur: (e: any) => { },
                            },
                            {
                                "component": "FourColumnLayout",
                                "name": "FourColumnLayout",
                                "fields": [
                                    {
                                        "component": "Filler",
                                        "name": "filler1",
                                        "label": "filler1",
                                        xs: "6",
                                        onBlur: (e: any) => { },
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
                                        label: "Save",
                                        name: "Save",
                                        icon: <SendIcon />,
                                        clickHandler: (formOptions: any) => {
                                            alert("saved grid data to db");
                                        },
                                    },
                                    {
                                        component: "Button",
                                        label: "Reset",
                                        name: "Reset",
                                        icon: <SendIcon />,
                                        clickHandler: (formOptions: any) => {
                                            alert("saved grid data to db");
                                        },
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }

    return (
        <Grid container style={{ padding: "20px" }}>
            <Grid item xs={12}>
                <FormRenderer
                    schema={eepschema3}
                    FormTemplate={FormTemplate}
                    componentMapper={componentMapper}
                    onSubmit={console.log}
                />
            </Grid>
        </Grid >
    )
}