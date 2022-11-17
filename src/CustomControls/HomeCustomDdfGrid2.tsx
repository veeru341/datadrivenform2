import React from "react";
import useFieldApi from "@data-driven-forms/react-form-renderer/use-field-api";
import useFormApi from "@data-driven-forms/react-form-renderer/use-form-api";

import {
  DataGridPro,
  GridApi,
  GridCellValue,
  GridColDef,
  GridRenderCellParams,
  GridValueGetterParams,
  useGridApiRef,
} from "@mui/x-data-grid-pro";

const HomeCustomDdfGrid2 = (props: any) => {
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
    <div style={{ width: "600px"}}>
      <div style={{ width: "600px", backgroundColor: "rgb(221, 221, 221)", fontSize: "25px", height: "50px", display: "flex", alignContent: "center", justifyContent: "center", marginBottom: "20px" }}>
        <p style={{ marginTop: "12px" }}>Recipes In Draft</p>
      </div>
      <DataGridPro
        experimentalFeatures={{ newEditingApi: true }}
        getRowHeight={() => 40}
        sx={{
          "& .MuiDataGrid-columnHeaders": {
            color: "#21C5D2",
            fontSize: 15,
            borderRadius: 0
          }
        }}
        apiRef={apiRef}
        headerHeight={40}
        rows={cht.rows}
        columns={cht.columns}
        checkboxSelection={cht.checkboxSelection}
        autoHeight
        onStateChange={(state) => {
          //debugger;
        }}
        style={{ borderRadius: 0 }}
      />
    </div>
  );
};

export default HomeCustomDdfGrid2