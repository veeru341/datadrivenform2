import React, { useState } from "react";
import FormRenderer from "@data-driven-forms/react-form-renderer/form-renderer";
import componentTypes from "@data-driven-forms/react-form-renderer/component-types";
import TextField from "@data-driven-forms/mui-component-mapper/text-field";
import Tabs from "@data-driven-forms/mui-component-mapper/tabs";
import Wizard from "@data-driven-forms/mui-component-mapper/wizard";
import Checkbox from "@data-driven-forms/mui-component-mapper/checkbox";
import fieldArray from "@data-driven-forms/mui-component-mapper/field-array";
import { Select, Radio, Textarea, DatePicker } from "@data-driven-forms/mui-component-mapper";
import SendIcon from "@mui/icons-material/Send";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import Grid from "@mui/material/Grid";
import { GridColDef } from "@mui/x-data-grid-pro";
import DDFButton from "../CustomControls/DDFButton";
import DdfGrid from "../CustomControls/DdfGrid";
import SearchRecipeDdfGrid from "../CustomControls/SearchRecipeDdfGrid";
import Filler from "../CustomControls/Filler";
import FourColumnLayout from '../CustomControls/FourColumnLayout';
import SingleColumnLayout from "../CustomControls/SingleColumnLayout";
import MuiFormTemplate from '@data-driven-forms/mui-component-mapper/form-template';
import { Button } from "@mui/material";

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
    "searchrecipeddfgrid": SearchRecipeDdfGrid,
    "Button": DDFButton,
    "FourColumnLayout": FourColumnLayout,
    "SingleColumnLayout": SingleColumnLayout,
    "Filler": Filler
};

const FormTemplate = (props: any) => <MuiFormTemplate {...props} showFormControls={false} />

export default function SearchRecipe() {
    const columns: GridColDef[] = [
        { field: "col1", headerName: "Equipment Family", width: 120, flex: 2 },
        { field: "col2", headerName: "Equipment", width: 120, flex: 2 },
        { field: "col3", headerName: "Spec", width: 120, flex: 2 },
        { field: "col4", headerName: "Product", width: 120, flex: 2 },
        { field: "col5", headerName: "Process Spec", width: 120, flex: 2 },
        { field: "col6", headerName: "Last Modified", width: 120, flex: 2 },
        { field: "col7", headerName: "Modified By", width: 120, flex: 2 },
        {
            field: "col8", headerName: "View", width: 120, flex: 1, renderCell: (params: any) => {
                return (
                    <Button onClick={() => { }}><VisibilityOutlinedIcon /></Button>
                );
            }
        },
        {
            field: "col9", headerName: "Delete", width: 120, flex: 1, renderCell: (params: any) => {
                return (
                    <Button onClick={() => {
                        console.log(params.row);
                        params.row.DeleteClick(params.row, params.row.form, params.row.grid);
                    }}><DeleteOutlineIcon /></Button>
                );
            }
        },
        {
            field: "col10", headerName: "Copy", width: 120, flex: 1, renderCell: (params: any) => {
                return (
                    <Button onClick={() => { }}><ContentCopyIcon /></Button>
                );
            }
        },
        {
            field: "col11", headerName: "Asign", width: 120, flex: 1, renderCell: (params: any) => {
                return (
                    <Button onClick={() => { }}><EditOutlinedIcon /></Button>
                );
            }
        }
    ];

    const [gridrows, setGridRows] = useState([
        { id: 1, col1: "sample text", col2: "sample text", col3: "sample text", col4: "sample text", col5: "sample text", col6: "sample text", col7: "sample text", col8: "sample text", col9: "", col10: "sample text", col11: "sample text" },
        { id: 2, col1: "sample text", col2: "sample text", col3: "sample text", col4: "sample text", col5: "sample text", col6: "sample text", col7: "sample text", col8: "sample text", col9: "", col10: "sample text", col11: "sample text" },
        { id: 3, col1: "sample text", col2: "sample text", col3: "sample text", col4: "sample text", col5: "sample text", col6: "sample text", col7: "sample text", col8: "sample text", col9: "", col10: "sample text", col11: "sample text" }
    ]);


    const SearchRecipeSchema = {
        "fields": [
            {
                "component": "SingleColumnLayout",
                "name": "SingleColumnLayout",
                "fields": [
                    {
                        "component": "FourColumnLayout",
                        "name": "FourColumnLayout",
                        "fields": [
                            {
                                "component": "select",
                                "name": "select1",
                                "label": "Select Equipment Family",
                                "options": [
                                    {
                                        "value": "new value 1",
                                        "label": "new value 1"
                                    },
                                    {
                                        "value": "new value 2",
                                        "label": "new value 2"
                                    },
                                ],
                            },
                            {
                                "component": "select",
                                "name": "select2",
                                "label": "Product",
                                "options": [
                                    {
                                        "value": "new value 1",
                                        "label": "new value 1"
                                    },
                                    {
                                        "value": "new value 2",
                                        "label": "new value 2"
                                    },
                                ],
                            },
                            {
                                "component": "select",
                                "name": "select3",
                                "label": "Process Spec",
                                "options": [
                                    {
                                        "value": "new value 1",
                                        "label": "new value 1"
                                    },
                                    {
                                        "value": "new value 2",
                                        "label": "new value 2"
                                    },
                                ],
                            },
                            {
                                "component": "select",
                                "name": "select4",
                                "label": "Spec",
                                "options": [
                                    {
                                        "value": "new value 1",
                                        "label": "new value 1"
                                    },
                                    {
                                        "value": "new value 2",
                                        "label": "new value 2"
                                    },
                                ],
                            },
                            {
                                "component": "select",
                                "name": "select5",
                                "label": "Equipment",
                                "options": [
                                    {
                                        "value": "new value 1",
                                        "label": "new value 1"
                                    },
                                    {
                                        "value": "new value 2",
                                        "label": "new value 2"
                                    },
                                ],
                            },
                            {
                                "component": "select",
                                "name": "select6",
                                "label": "Parameter Name",
                                "options": [
                                    {
                                        "value": "new value 1",
                                        "label": "new value 1"
                                    },
                                    {
                                        "value": "new value 2",
                                        "label": "new value 2"
                                    },
                                ],
                            },
                            {
                                "component": "select",
                                "name": "select7",
                                "label": "Parameter Value",
                                "options": [
                                    {
                                        "value": "new value 1",
                                        "label": "new value 1"
                                    },
                                    {
                                        "value": "new value 2",
                                        "label": "new value 2"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        component: "Button",
                        label: "Checkbox1",
                        name: "Search",
                        icon: <SendIcon />
                    },
                    {
                        component: "searchrecipeddfgrid",
                        label: "hello",
                        name: "adf",
                        rows: gridrows,
                        columns: columns,
                        checkboxSelection: false,
                        gridApi: [],
                        formOptions: [],
                    }
                ]
            }
        ]
    }

    return (
        <Grid container spacing={3} style={{ minHeight: "90vh", padding: 20 }}>
            <Grid xs item>
                <FormRenderer
                    schema={SearchRecipeSchema}
                    FormTemplate={FormTemplate}
                    componentMapper={componentMapper}
                    onSubmit={console.log}
                />
            </Grid>
        </Grid >
    );
}