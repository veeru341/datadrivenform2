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
import { SettingsOverscanOutlined } from "@mui/icons-material";
import axios from "axios"

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

export default function CreateRecipeWizard1() {

    const [data, setData] = useState<any>([]);

    const schema3 = {
        "fields": [
            {
                "component": "CreateRecipeWizardCCL",
                "name": "CreateRecipeWizardCCL",
                "fields": [
                    {
                        "component": "select",
                        "name": "SelectEquipmentFamily",
                        "label": "Select Equipment Family",
                        "simpleValue": true,
                        "options": [],
                        "loadOptions": () =>
                            new Promise((res) =>
                                setTimeout(
                                    () =>
                                        res([
                                            { value: 'first-option', label: 'First async option' },
                                            { value: 'second-option', label: 'Second async option' }
                                        ]),
                                    2500
                                )
                            )
                    },
                    {
                        "component": "select",
                        "name": "Select Equipment",
                        "label": "Select Equipment",
                        "simpleValue": true,
                        "options": [
                            {
                                "value": "new value 3",
                                "label": "new value 3"
                            },
                            {
                                "value": "new value 4",
                                "label": "new value 4"
                            }
                        ]
                    }
                ]
            }
        ]
    }


    return (
        <Grid container spacing={3}>
            <FormRenderer
                schema={schema3}
                FormTemplate={FormTemplate}
                componentMapper={componentMapper}
                onSubmit={(val) => { console.log(val) }}
            />
        </Grid>
    );
}