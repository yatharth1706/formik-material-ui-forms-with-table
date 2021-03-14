import React from "react";
import logo from "./logo.svg";
import { generate } from "shortid";
import "./App.css";
import { MyForm } from "./MyForm";
import MyTable from "./MyTable";

function App() {
  const [rows, setRows] = React.useState([
    {
      id: "45",
      firstName: "bob",
      lastName: "jake",
      email: "bob@gmail.com",
    },
  ]);

  return (
    <div className="App">
      <MyForm
        onSubmit={(values) => {
          setRows((currentRows) => [
            ...currentRows,
            {
              id: generate(),
              ...values,
            },
          ]);
        }}
      />
      <MyTable rows={rows} />
    </div>
  );
}

export default App;
