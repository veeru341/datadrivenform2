import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import FormRenderer from '@data-driven-forms/react-form-renderer/form-renderer';
import componentTypes from '@data-driven-forms/react-form-renderer/component-types';
import validatorTypes from '@data-driven-forms/react-form-renderer/validator-types';
import FormTemplate from '@data-driven-forms/mui-component-mapper/form-template';
import TextField from '@data-driven-forms/mui-component-mapper/text-field';
import Tabs from '@data-driven-forms/mui-component-mapper/tabs';
import { Checkbox, FormFieldGrid, PlainText, Radio, Select, Slider, SubForm, Switch, Textarea, TimePicker, DatePicker } from '@data-driven-forms/mui-component-mapper';
import { useSelector } from 'react-redux';
import { PlaceTwoTone } from '@mui/icons-material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';


const componentMapper = {
  [componentTypes.TEXT_FIELD]: TextField,
  [componentTypes.RADIO]: Radio,
  [componentTypes.SELECT]: Select,
  [componentTypes.CHECKBOX]: Checkbox,
  [componentTypes.TEXTAREA]: Textarea,
  [componentTypes.SUB_FORM]: SubForm,
  [componentTypes.DATE_PICKER]: DatePicker,
  [componentTypes.TIME_PICKER]: TimePicker,
  [componentTypes.SWITCH]: Switch,
  [componentTypes.SLIDER]: Slider,
  [componentTypes.PLAIN_TEXT]: PlainText,
  [componentTypes.TABS]: Tabs,
};

const validatorMapper = {
  'same-email': () => (
    value : any, allValues : any
    ) => (
      value !== allValues.email ?
        'Email does not match' :
        undefined
    )
}

const Schemasui = () => {

  const state = useSelector((state: any) => state.schemaState);

  return (
    <div className="schemamenupage">
      <h2 className="formviewheading">{state.schemaview.id}</h2>
      <div className="schemasview">
        {
          state.schemaview.map((schemas: any, index: number) => {
            return (
              <div className="eachschema" key={index}>
                <h2 className="formheading">{schemas.id}</h2>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <FormRenderer
                    componentMapper={componentMapper}
                    FormTemplate={FormTemplate}
                    schema={schemas}
                    validatorMapper={validatorMapper}
                  />
                </LocalizationProvider>
              </div>)
          })
        }
      </div>
    </div>
  )
}

export default Schemasui;