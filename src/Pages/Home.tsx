import React from "react";
import FormRenderer from "@data-driven-forms/react-form-renderer/form-renderer";
import componentTypes from "@data-driven-forms/react-form-renderer/component-types";
import TextField from "@data-driven-forms/mui-component-mapper/text-field";
import Tabs from "@data-driven-forms/mui-component-mapper/tabs";
import Wizard from "@data-driven-forms/mui-component-mapper/wizard";
import Checkbox from "@data-driven-forms/mui-component-mapper/checkbox";
import fieldArray from "@data-driven-forms/mui-component-mapper/field-array";
import { Select, Radio, Textarea } from "@data-driven-forms/mui-component-mapper";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { GridColDef } from "@mui/x-data-grid-pro";
import HomeCustomDdfGrid1 from "../CustomControls/HomeCustomDdfGrid1";
import HomeCustomDdfGrid2 from "../CustomControls/HomeCustomDdfGrid2";
import CustomColumnLayout from "../CustomControls/CustomColumnLayout";
import MuiFormTemplate from '@data-driven-forms/mui-component-mapper/form-template';

const componentMapper = {
  [componentTypes.TEXT_FIELD]: TextField,
  [componentTypes.WIZARD]: Wizard,
  [componentTypes.RADIO]: Radio,
  [componentTypes.SELECT]: Select,
  [componentTypes.CHECKBOX]: Checkbox,
  [componentTypes.TEXTAREA]: Textarea,
  [componentTypes.FIELD_ARRAY]: fieldArray,
  [componentTypes.TABS]: Tabs,
  "HomeCustomDdfGrid1": HomeCustomDdfGrid1,
  "HomeCustomDdfGrid2": HomeCustomDdfGrid2,
  "CustomColumnLayout": CustomColumnLayout
};

const FormTemplate = (props: any) => <MuiFormTemplate {...props} showFormControls={false} />

export default function Home() {
  const prcolumns: GridColDef[] = [
    { field: "prcol1", headerName: "Equipment Family" },
    { field: "prcol2", headerName: "Equipment" },
    { field: "prcol3", headerName: "Spec" },
    { field: "prcol4", headerName: "Product" },
    { field: "prcol5", headerName: "Produc Spec" },
    { field: "prcol6", headerName: "Last Modified" },
    { field: "prcol7", headerName: "Modified By" },
  ];

  const prgridrows = [
    { id: 1, prcol1: "sample text", prcol2: "sample text", prcol3: "sample text", prcol4: "sample text", prcol5: "sample text", prcol6: "sample text", prcol7: "sample text" },
    { id: 2, prcol1: "sample text", prcol2: "sample text", prcol3: "sample text", prcol4: "sample text", prcol5: "sample text", prcol6: "sample text", prcol7: "sample text" },
    { id: 3, prcol1: "sample text", prcol2: "sample text", prcol3: "sample text", prcol4: "sample text", prcol5: "sample text", prcol6: "sample text", prcol7: "sample text" },
  ];


  const productRecipesSchema1 = {
    "fields": [
      {
        "component": "CustomColumnLayout",
        "name": "CustomColumnLayout",
        "fields": [
          {
            component: "HomeCustomDdfGrid1",
            label: "product recipes last 7 days",
            name: "productRecipesLast7Days",
            rows: prgridrows,
            columns: prcolumns,
            checkboxSelection: false,
            gridApi: [],
            formOptions: []
          }
        ]
      }
    ]
  }

  const productRecipesSchema2 = {
    "fields": [
      {
        "component": "CustomColumnLayout",
        "name": "CustomColumnLayout",
        "fields": [
          {
            component: "HomeCustomDdfGrid2",
            label: "recipes in draft",
            name: "recipesInDraft",
            rows: prgridrows,
            columns: prcolumns,
            checkboxSelection: false,
            gridApi: [],
            formOptions: []
          }
        ]
      }
    ]
  }

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ height: "90vh" }}>
      <Grid item xs={12} md={12} lg={6} justifyContent="center" alignItems="center" style={{ width: "100%" }}>
        <FormRenderer
          schema={productRecipesSchema1}
          FormTemplate={FormTemplate}
          componentMapper={componentMapper}
        />
      </Grid>
      <Grid item xs={12} md={12} lg={6} justifyContent="center" alignItems="center" style={{ width: "100%" }}>
        <FormRenderer
          schema={productRecipesSchema2}
          FormTemplate={FormTemplate}
          componentMapper={componentMapper}
        />
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
      <div style={{ display: "flex", justifyContent: "flex-end", marginRight: "45px", marginTop: "-50px" }}>
          <Link to="searchrecipe"><button style={{ height: "60px", backgroundColor: "white", border: "1px solid black", fontSize: "18px", padding: "20px", cursor: "pointer" }}>Search Recipe</button></Link>
          <Link to="createrecipewizard1"><button style={{ height: "60px", backgroundColor: "white", border: "1px solid black", fontSize: "18px", padding: "20px", marginLeft: "30px", cursor: "pointer" }}>Create Update Recipe</button></Link>
        </div>
      </Grid>
    </Grid>
  )
}