import React from "react";
import useFieldApi from "@data-driven-forms/react-form-renderer/use-field-api";
import useFormApi from "@data-driven-forms/react-form-renderer/use-form-api";
import { DataGridPro, useGridApiRef } from "@mui/x-data-grid-pro";

const DdfGrid = (props: any) => {
  var cht = props;
  const { input, meta } = useFieldApi(cht);
  const formOptions = useFormApi();
  const apiRef = useGridApiRef();
  cht.gridApi[0] = apiRef;
  cht.formOptions[0] = formOptions;
  cht.rows.forEach((element: any) => {
    Object.keys(cht).forEach((element2) => {
      if (typeof cht[element2] == "function") {
        element[element2] = cht[element2];
      }
    });
    element.form = formOptions;
    element.grid = apiRef;
  });
  input.onChange(cht);
  return (
    <DataGridPro
      experimentalFeatures={{ newEditingApi: true }}
      getRowHeight={() => 45}
      sx={{
        "& .MuiDataGrid-columnHeaders": {
          color: "#21C5D2",
          fontSize: 15,
          borderRadius: 0
        }
      }}
      apiRef={apiRef}
      headerHeight={45}
      rows={cht.rows}
      columns={cht.columns}
      checkboxSelection={cht.checkboxSelection}
      autoHeight
      onStateChange={(state) => {
        //debugger;
      }}
      style={{ borderRadius: 0, padding: 0, margin: 0 }}
    />
  );
};

export default DdfGrid;