import React, { useState } from "react";
import Control from "./Control";
import ListStudent from "./ListStudent";
import Form from "./Form";

function ParentComp() {
  // R-1: Thêm dữ liệu vào listStudent
  const [students, setStudents] = useState([
    {
      studentId: "SV001",
      studentName: "Nguyễn Văn A",
      age: 20,
      gender: true,
      birthDay: "12/12/1997",
      birthPlace: "HN",
      address: "HN,",
    },
    {
      studentId: "SV002",
      studentName: "Nguyễn Thị B",
      age: 20,
      gender: false,
      birthDay: "12/12/1998",
      birthPlace: "DN",
      address: "DN,",
    },
    {
      studentId: "SV003",
      studentName: "Nguyễn Văn C",
      age: 20,
      gender: true,
      birthDay: "12/12/1999",
      birthPlace: "HCM",
      address: "HCM,",
    },
  ]);

  // C-1: Làm toggle để bật tắt form
  const [actionName, setActionName] = useState("ADD");
  const [toggle, setToggle] = useState(false);

  // C-2: Khai báo hàm để truyền xuống con (lifting state up)
  const handleToggleAction = (toggle, action) => {
    setActionName(action);
    setToggle(toggle);
    console.log(toggle);
  };
  // C-7: Viết hàm submit để truyền cho component con
  const handleSubmitAdd = (newStudent, toggle) => {
    setStudents([...students, newStudent]);

    setToggle(toggle);
  };

  // Thử viết hàm xóa

  const handleDelete = (key) => {
    const deleteStudents = [...students];
    deleteStudents.splice(
      students.findIndex((student) => student.studentId === key),
      1
    );
    setStudents(deleteStudents);
  };

  // U-2: Khai báo state để lưu trữ student
  const [selectStudent, setSelectStudent] = useState({});

  // U-3: Khai báo hàm để truyền xuống con (lifting state up)
  const handleUpdateStudent = (selectStudent, toggle, actionName) => {
    setSelectStudent(selectStudent);
    setToggle(toggle);
    setActionName(actionName);
  };
  // U-10: Khai báo hàm submit update để truyền xuống form
  const handleSubmitUpdate = (studentUpdate, toggle) => {
    const update = students.map((e) =>
      e.studentId === studentUpdate.studentId ? studentUpdate : e
    );
    setStudents(update);
    setToggle(toggle);
  };
  return (
    <div>
      <div className="row">
        <div className="col-lg-7 grid-margin stretch-card">
          <div className="card">
            {/* START CONTROL */}
            <Control toggle={toggle} handleAddAction={handleToggleAction} />
            {/* END CONTROL */}
            {/* START LIST STUDENT */}
            {/* R-2 truyền dữ liệu xuống listStudent để hiển thị */}
            {/* U-4 Truyền dữ liệu xuống listStudent */}
            <ListStudent
              listStudentProps={students}
              handleDelete={handleDelete}
              handleUpdateStudent={handleUpdateStudent}
              handleSubmitUpdate={handleSubmitUpdate}
            />
            {/* END LIST STUDENT */}
          </div>
        </div>
        {/* START FORM SINH VIEN */}
        {/* C-6: Nhận dữ liệu từ toggle để làm toggle */}
        {/* U-16: Truyền selectStudent để các miền trong input form có giá trị */}

        {toggle ? (
          <Form
            submitForm={handleSubmitAdd}
            actionName={actionName}
            selectStudent={selectStudent}
            handleSubmitUpdate={handleSubmitUpdate}

          />
        ) : (
          <></>
        )}
        {/* END FORM SINH VIÊN */}
      </div>
    </div>
  );
}

export default ParentComp;
