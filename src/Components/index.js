import React from "react";
import DataTable, {createTheme} from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";

import { columns, data } from "./data";
export default function Info() {
  const tableData = {
    columns,
    data
  };

  return (
    <div className="main">
      <DataTableExtensions {...tableData}>
        <DataTable
          columns={columns}
          data={data}
          theme="solarized"
          title="Airbnb List"
          responsive
          defaultSortField="id"
          defaultSortAsc={false}
          pagination
          highlightOnHover
          fixedHeader
          fixedHeaderScrollHeight="350px"
          direction="ltr"
          highlightOnHover
          selectableRows
          selectableRowsHighlight
          selectableRowsRadio="checkbox"
          subHeaderAlign="right"
          subHeaderWrap
        />
      </DataTableExtensions>
    </div>
  );
}


