import { DataGrid } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
function Table() {
  const [backendData, setBackendData] = useState([]);

  useEffect(() => {
    fetchApi();
  }, []);
  const fetchApi = async () => {
    const items = await fetch("http://localhost:4000/sendEmail", {
      method: "POST",
    });
    const data = await items.json([]);
    const arrayData = Object.values(data);
    console.log(arrayData);
    setBackendData(arrayData);
  };
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "Name", headerName: "name", width: 130 },
    { field: "Email", headerName: "Email", width: 130 },
    {
      field: "number",
      headerName: "Number",
      type: "number",
      width: 90,
    },
    {
      field: "Hobbies",
      headerName: "Hobbies",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
    },
  ];
  const rows = [
    {
      id: 1,
      Name: "Snow",
      Email: "Jon@gmail.com",
      number: 9114141645,
      Hobbies: "Cricket , football",
    },
    {
      id: 2,
      Name: "Snow",
      Email: "Jon@gmail.com",
      number: 9114141645,
      Hobbies: "Cricket , football",
    },
    {
      id: 3,
      Name: "Snow",
      Email: "Jon@gmail.com",
      number: 9114141645,
      Hobbies: "Cricket , football",
    },
    {
      id: 4,
      Name: "Snow",
      Email: "Jon@gmail.com",
      number: 9114141645,
      Hobbies: "Cricket , football",
    },
  ];
  return (
    <div className="cont">
      <div className="tableData">
        <DataGrid
          className="DataGrid"
          rows={rows}
          columns={columns}
          style={{ color: "white", width: "50vw" }}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
        <button className="btn btn-primary" onClick={fetchApi}>
          Send it
        </button>
      </div>
    </div>
  );
}

export default Table;
