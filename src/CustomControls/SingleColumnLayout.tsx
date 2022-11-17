import React from "react";
import useFormApi from "@data-driven-forms/react-form-renderer/use-form-api";
import Grid from "@mui/material/Grid";

const SingleColumnLayout = ({ fields }: any) => {
  const formOptionss = useFormApi();
  const { renderForm } = useFormApi();

  return (
    <Grid container spacing={3}>
      {fields.map((field: any) => (
        <Grid key={field.name} item xs={12}>
          {renderForm([field])}
        </Grid>
      ))}
    </Grid>
  );
};

export default SingleColumnLayout;