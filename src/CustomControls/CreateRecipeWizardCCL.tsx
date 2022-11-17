import React from "react";
import useFormApi from "@data-driven-forms/react-form-renderer/use-form-api";

const CreateRecipeWizardCCL = ({ fields }: any) => {
  const formOptionss = useFormApi();

  const { renderForm } = useFormApi();

  return (
    <div style={{display:"flex", flexDirection:"column", justifyContent:"flex-end", alignItems:"center", width:"100%", height:"50vh"}}>
      {fields.map((field: any) => (
        <div key={field.name} style={{width:"30%"}}>
            {renderForm([field])}
        </div>
      ))}
    </div>
  );
};

export default CreateRecipeWizardCCL;