import React, { Fragment } from "react";
import FormRenderer from "@data-driven-forms/react-form-renderer/form-renderer";
import componentTypes from "@data-driven-forms/react-form-renderer/component-types";
import FormTemplate from "@data-driven-forms/mui-component-mapper/form-template";
import TextField from "@data-driven-forms/mui-component-mapper/text-field";
import useFormApi from "@data-driven-forms/react-form-renderer/use-form-api";
import Grid from "@mui/material/Grid";

const TwoColumnLayout = ({ fields }: any) => {
  const formOptionss = useFormApi();

  const { renderForm } = useFormApi();

  return (
    <Grid container spacing={3}>
      {fields.map((field: any) => (
        <Grid key={field.name} item xs={3}>
          {renderForm([field])}
        </Grid>
      ))}
    </Grid>
  );
};

export default TwoColumnLayout;
