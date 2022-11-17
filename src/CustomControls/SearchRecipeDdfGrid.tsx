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
      getRowHeight={() => 50}
      sx={{
        "& .MuiDataGrid-columnHeaders": {
          color: "#21C5D2",
          fontSize: 15,
          height: 100,
          borderRadius: 0
        }
      }}
      apiRef={apiRef}
      rows={cht.rows}
      headerHeight={50}
      columns={cht.columns}
      checkboxSelection={cht.checkboxSelection}
      autoHeight
      onStateChange={(state) => {
        //debugger;
      }}
      style={{borderRadius:"0px"}}
    />
  );
};

export default DdfGrid;