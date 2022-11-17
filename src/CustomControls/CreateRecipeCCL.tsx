import React from "react";
import useFormApi from "@data-driven-forms/react-form-renderer/use-form-api";

const CreateRecipeCCL = ({ fields }: any) => {
  const formOptionss = useFormApi();

  const { renderForm } = useFormApi();

  return (
    <div style={{width:"100%"}}>
      {fields.map((field: any) => (
        <div key={field.name} style={{}}>
            {renderForm([field])}
        </div>
      ))}
    </div>
  );
};

export default CreateRecipeCCL;