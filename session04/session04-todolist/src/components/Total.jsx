import { MDBListGroup, MDBListGroupItem } from "mdb-react-ui-kit";
import React from "react";

export default function Total(props) {

  return (
    <div>
      <MDBListGroup style={{ minWidth: "22rem" }} light>
        <MDBListGroupItem
          noBorders
          color="info"
          className="px-3 mb-2 rounded-3"
        >
          <p>You still have {props.tasks.filter((task) => task.isCompleted === false).length} tasks to do</p>
        </MDBListGroupItem>
      </MDBListGroup>
    </div>
  );
}
