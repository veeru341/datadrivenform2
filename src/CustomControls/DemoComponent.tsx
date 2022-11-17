
import React from 'react';
import useFieldApi from '@data-driven-forms/react-form-renderer/use-field-api';
import useFormApi from '@data-driven-forms/react-form-renderer/use-form-api';

const DemoComponent = (props:any) => {
    const { input, meta } = useFieldApi(props);
    const formOptions = useFormApi();
    debugger;
   
    return <h1>{JSON.stringify(input.value)}
        <input type="button" value="Change state" onClick={() => {
            debugger;
            input.onChange({'name':"veerbabu"});
            console.log(formOptions.schema.fields);
        }} />
    </h1>

  //  return <h1>Hello World { input.name}</h1>
}


export default DemoComponent;