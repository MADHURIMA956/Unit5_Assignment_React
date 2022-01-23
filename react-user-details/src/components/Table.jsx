import "./table.css";
import { ElementTable } from "./ElementTable.jsx";
import { Form } from "./Form.jsx";
import { useState } from "react";

export const Table = () => {
  const [list, setList] = useState([]);
  const handleClik = (data) => {
    console.log("data from table", data);

    setList([...list, data]);
  };
  return (
    <>
      <Form getData={handleClik} />
      <br />
      <table>
        <th>Name</th>
        <th>Age</th>
        <th>Address</th>
        <th>Department</th>
        <th>Salary</th>
        <th>Marital Status</th>
        <th>Profile pgoto</th>
        {list.map((e) => (
          <ElementTable {...e} />
        ))}
      </table>
    </>
  );
};