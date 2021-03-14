import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { MyForm } from "./MyForm";
import MyTable from "./MyTable";

function App() {
  return (
    <div className="App">
      <MyForm
        onSubmit={({ firstName, lastName, email }) => {
          console.log(firstName, lastName, email);
        }}
      />
      <MyTable
        rows={[
          {
            id: "45",
            firstName: "bob",
            lastName: "jake",
            email: "bob@gmail.com",
          },
        ]}
      />
    </div>
  );
}

export default App;
