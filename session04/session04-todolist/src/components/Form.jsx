import { MDBBtn, MDBInputGroup } from "mdb-react-ui-kit";
import React, { useState } from "react";

export default function Form(props) {
  const [newTask, setNewTask] = useState();
  const handleClick = (event) => {
    props.addNewTask(newTask);
  };
  // const handleChange = (event) => {
  //   setNewTask(event.target.value);
  // }

  return (
    <div>
      <MDBInputGroup className="mb-3">
        <input
          value={newTask}
          className="form-control"
          placeholder="Enter what you're about to do..."
          type="text"
          // onChange={handleChange}
        />
        
        <MDBBtn color="success" onClick={handleClick}>
          Add
        </MDBBtn>
      </MDBInputGroup>
    </div>
  );
}
