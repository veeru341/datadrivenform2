import React, { Fragment } from "react";
import useFormApi from "@data-driven-forms/react-form-renderer/use-form-api";
import Grid from "@mui/material/Grid";

const ThreeColumnLayout = ({ fields }: any) => {
  const formOptions = useFormApi();
  const { renderForm } = useFormApi();

  return (
    <Grid container spacing={3}>
      {fields.map((field: any) => (
        <Grid key={field.name} item xs={4}>
          {renderForm([field])}
        </Grid>
      ))}
    </Grid>
  );
};

export default ThreeColumnLayout;