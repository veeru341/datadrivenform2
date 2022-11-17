import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl } from '@mui/material';
import React from 'react';
import useFieldApi from '@data-driven-forms/react-form-renderer/use-field-api';
import useFormApi from '@data-driven-forms/react-form-renderer/use-form-api';
import {FormFieldGrid} from '@data-driven-forms/mui-component-mapper';

const DDFButton = (props:any) => {
    const { input, meta } = useFieldApi(props);
    const formOptions = useFormApi();
    return (
        <FormFieldGrid  >
          <Button  variant="contained" endIcon={props.icon} name={input.name} onClick={(e) => {
            props.clickHandler(formOptions);
          }}>
            {input.name}
          </Button>
        </FormFieldGrid>
      )
}


export default DDFButton;