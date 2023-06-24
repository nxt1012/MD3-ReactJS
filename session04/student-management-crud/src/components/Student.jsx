import React from "react";
// U-8: Nhận dữ liệu từ listStudent
export default function Student({
  keyStudent,
  infoStudent,
  handleDeleteProps,
  handleUpdate,
}) {
  const handleDelete = (key) => {
    handleDeleteProps(key);
  };
//   U-9: Khai báo hàm handleEditStudent để cập nhật dữ liệu lại cho parent
  const handleEditStudent = (index) => {
    handleUpdate(index, true, "UPDATE");
  }
  return (
    <tr key={keyStudent}>
      <td>{keyStudent + 1}</td>
      <td>{infoStudent.studentId}</td>
      <td>{infoStudent.studentName}</td>
      <td>{infoStudent.age}</td>
      <td>{infoStudent.gender ? "Nam" : "Nữ"}</td>
      <td>
        <div className="template-demo">
          <button type="button" className="btn btn-danger btn-icon-text">
            Xem
          </button>
          {/* U-1 Viết hàm để nhận được vị trí (index) của phần tử */}
          {/* Truyền infoStudent là truyền nguyên cấu trúc đã destructured lên trên, do đó giản lược được khâu tìm kiếm lại trong mảng ban đầu */}
          <button type="button" className="btn btn-warning btn-icon-text" onClick={() => handleEditStudent (infoStudent)}>
            Sửa
          </button>
          <button
            type="button"
            className="btn btn-success btn-icon-text"
            onClick={() => handleDelete (infoStudent.studentId)}
          >
            Xóa
          </button>
        </div>
      </td>
    </tr>
  );
}
