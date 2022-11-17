import React, { useState } from 'react';
import FormRenderer from '@data-driven-forms/react-form-renderer/form-renderer';
import componentTypes from '@data-driven-forms/react-form-renderer/component-types';
import useFormApi from '@data-driven-forms/react-form-renderer/use-form-api';
import { Select } from "@data-driven-forms/mui-component-mapper";
import CreateRecipeWizardCCL from "../CustomControls/CreateRecipeWizardCCL";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../redux';
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

const componentMapper = {
    [componentTypes.SELECT]: Select,
    "CreateRecipeWizardCCL": CreateRecipeWizardCCL
};

const CreateRecipeWizard1 = () => {

    const dispatch = useDispatch();
    const { createRecipeWizard } = bindActionCreators(actionCreators, dispatch);

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

    const schema = {
        "fields": [
            {
                "component": "CreateRecipeWizardCCL",
                "name": "CreateRecipeWizardCCL",
                "fields": [
                    {
                        "component": "select",
                        "name": "selectEquipmentFamily",
                        "label": "Select Equipment Family",
                        "initialValue": "veerababu",
                        "initializeOnMount": true,
                        "isRequired": true,
                        "validate": [{ type: 'required' }],
                        "simpleValue": true,
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
                    },
                    {
                        "component": "select",
                        "name": "selectEquipment",
                        "label": "Select Equipment",
                        "initializeOnMount": true,
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

    const navigate = useNavigate();

    const handleClick = (values: any) => {
        const newvalue = uuidv4();
        createRecipeWizard({ id: newvalue, name: "createrecipewizard1", ...values });
        navigate("/createrecipewizard2")
    }

    return (
        <div>
            <FormRenderer
                componentMapper={componentMapper}
                FormTemplate={FormTemplate}
                schema={schema}
                onSubmit={(values: any) => { handleClick(values) }}
            />
        </div>
    );
};

export default CreateRecipeWizard1;