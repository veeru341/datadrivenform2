import React from "react";
import useFormApi from "@data-driven-forms/react-form-renderer/use-form-api";

const CustomColumnLayout = ({ fields }: any) => {
  const formOptionss = useFormApi();

  const { renderForm } = useFormApi();

  return (
    <div style={{display:"flex", alignItems:"center", justifyContent:"center", width:"100%"}}>
      {fields.map((field: any) => (
        <div key={field.name} style={{}}>
            {renderForm([field])}
        </div>
      ))}
    </div>
  );
};

export default CustomColumnLayout;