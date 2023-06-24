import React from "react";
// C-3: Nhận dữ liệu từ parent
function Control({toggle, handleAddAction}) {
  // C-4: Viết hàm để set lại giá trị cho toggle và gửi actionName lên cho parent
  const handleToggleAdd = () => {
    handleAddAction(!toggle, "ADD");
  }
  return (
    <div>
      <div className='card-header'>
        <div className='row'>
          <div className='col-3'>
            {/* C-5: Sẽ sử dụng hàm vừa xây dựng */}
            <button onClick={handleToggleAdd} type='button' className='btn btn-primary btn-icon-text'>
              Thêm mới sinh viên
            </button>
          </div>
          <div className='col-6'>
            <form className='search-form' action='#'>
              <i className='icon-search' />
              <input
                type='search'
                className='form-control'
                placeholder='Search Here'
                title='Search here'
              />
              <button className='btn btn-primary btn-icon-text'>
                Tìm kiếm
              </button>
            </form>
          </div>
          <div className='col-3 d-flex align-items-center'>
            <select className='form-control'>
              <option value=''>Sắp xếp</option>
              <option value=''>ABC def</option>
              <option value=''>ABC def</option>
              <option value=''>ABC def</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Control;
