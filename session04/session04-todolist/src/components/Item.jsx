import {
  MDBBtn,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
  MDBTooltip,
} from "mdb-react-ui-kit";
export default function Item(props) {
  const handleComplete = (taskId) => {
    props.changeCompleteStatus(taskId);
  }
  const handleDelete = (taskId) => {
    props.deleteTask(taskId);
  }  
  return (
    <div>
      <MDBListGroup style={{ minWidth: "22rem" }} light>
        {props.tasks.map((task, index) => (
          <MDBListGroupItem
            key={index}
            noBorders
            className="px-3 mb-2 rounded-3 d-flex align-items-center justify-content-between"
          >
            <div className="text-start">
              <p className={!task.isCompleted? "text-start" :"text-start text-decoration-line-through" } >{task.taskContent}</p>
            </div>
            <div className="text-end">
              <MDBTooltip tag="span" wrapperClass="d-inline-block" title="Done" >
                <MDBBtn color="success"  onClick={() => handleComplete (index)}>
                  <MDBIcon fas icon="check" />
                </MDBBtn>
              </MDBTooltip>
              <MDBTooltip tag="span" wrapperClass="d-inline-block" title="Edit">
                <MDBBtn color="primary">
                  <MDBIcon fas icon="edit" />
                </MDBBtn>
              </MDBTooltip>
              <MDBTooltip
                tag="span"
                wrapperClass="d-inline-block"
                title="Delete"
              >
                <MDBBtn color="danger" onClick={() => handleDelete (task.id)}>
                  <MDBIcon fas icon="trash" />
                </MDBBtn>
              </MDBTooltip>
            </div>
          </MDBListGroupItem>
        ))}
      </MDBListGroup>
    </div>
  );
}
