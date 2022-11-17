import { FormFieldGrid } from '@data-driven-forms/mui-component-mapper';
import React from 'react';
import useFieldApi from '@data-driven-forms/react-form-renderer/use-field-api';
import useFormApi from '@data-driven-forms/react-form-renderer/use-form-api';

const Filler = (props: any) => {
  const {
    input,
    isReadOnly,
    isDisabled,
    placeholder,
    isRequired,
    label,
    helperText,
    description,
    validateOnMount,
    meta,
    inputProps,
    FormFieldGridProps,
    ...rest
  } = useFieldApi(props);
  const formApi = useFormApi();
  // const invalid = validationError(meta, validateOnMount);
  return (
    <FormFieldGrid {...FormFieldGridProps}>

      <div>
        {/* <input type="text" name={input.name} style={{display:"none"}}/> */}
      </div>
      {/* <Button variant="contained" endIcon={props.icon} name={input.name} onClick={(e) => {
        props.clickhandler(formApi);
      }}>
        {label}
      </Button> */}
      {/* <input type="button" value="HEllo"/> */}
    </FormFieldGrid>

  )
}

export default Filler;