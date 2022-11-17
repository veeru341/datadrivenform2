import React, { useState } from 'react';
import FormRenderer from '@data-driven-forms/react-form-renderer/form-renderer';
import componentTypes from '@data-driven-forms/react-form-renderer/component-types';
import useFormApi from '@data-driven-forms/react-form-renderer/use-form-api';
import { Select } from "@data-driven-forms/mui-component-mapper";
import CreateRecipeWizardCCL from "../CustomControls/CreateRecipeWizardCCL";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../redux';
import {useNavigate} from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const getButtonStyle = () => ({
    color: 'white',
    backgroundColor: '#a881af',
    padding: '15px 30px',
    cursor: 'pointer',
    border: 'none',
    marginLeft: "800px",
    marginTop: "20px"
});

const Button = ({ children, label, variant, ...props }: any) => (
    <button style={getButtonStyle()} {...props}>
        {label}
    </button>
);

const FormTemplate = ({ formFields }: any) => {
    const { handleSubmit } = useFormApi();
    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                handleSubmit();
            }}
        >
            {formFields}
            <Button type="submit" variant="primary" label="Next" />
        </form>
    );
};


const componentMapper = {
    [componentTypes.SELECT]: Select,
    "CreateRecipeWizardCCL": CreateRecipeWizardCCL,
};

const CreateRecipeWizard2 = () => {

    const dispatch = useDispatch();
    const { createRecipeWizard } = bindActionCreators(actionCreators, dispatch);

    const schema = {
        "fields": [
            {
                "component": "CreateRecipeWizardCCL",
                "name": "CreateRecipeWizardCCL",
                "fields": [
                    {
                        "component": "select",
                        "name": "selectSpec",
                        "label": "Select Spec",
                        "initializeOnMount": true,
                        "simpleValue": true,
                        "options": [
                            {
                                "value": "new value 5",
                                "label": "new value 5"
                            },
                            {
                                "value": "new value 6",
                                "label": "new value 6"
                            }
                        ]
                    },
                    {
                        "component": "select",
                        "name": "selectProcessSpec",
                        "label": "Select Process Spec",
                        "initializeOnMount": true,
                        "simpleValue": true,
                        "options": [
                            {
                                "value": "new value 7",
                                "label": "new value 7"
                            },
                            {
                                "value": "new value 8",
                                "label": "new value 8"
                            }
                        ]
                    },
                    {
                        "component": "select",
                        "name": "selectProduct",
                        "label": "Select Product",
                        "initializeOnMount": true,
                        "simpleValue": true,
                        "options": [
                            {
                                "value": "new value 9",
                                "label": "new value 9"
                            },
                            {
                                "value": "new value 10",
                                "label": "new value 10"
                            }
                        ]
                    }
                ]
            }
        ]
    }

    const navigate = useNavigate();

    const handleClick2 = (values : any) => {
        const newvalue2 = uuidv4();
        createRecipeWizard({id:newvalue2, name:"createrecipewizard2", ...values});
        navigate("/createrecipe")
    }

    return (
        <div>
            <FormRenderer
                componentMapper={componentMapper}
                FormTemplate={FormTemplate}
                schema={schema}
                onSubmit={(values : any)=>{handleClick2(values)}}
            />
        </div>
    );
};


export default CreateRecipeWizard2;