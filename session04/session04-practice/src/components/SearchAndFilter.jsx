import React, { useState } from "react";

export default function SearchAndFilter() {
  const [filter, setFilter] = useState("");
  const [data, setData] = useState([
    { name: "John", age: 25 },
    { name: "Mary", age: 30 },
    { name: "Peter", age: 35 },
    { name: "Jane", age: 40 },
  ]);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };
  const filteredData = data.filter((item) =>
  // trả về phần tử có chứa filter (sau khi đã toLowerCase() cả 2) trong data ( do điều kiện !== -1 có nghĩa là chuỗi trong đối số nằm trong chuỗi cần kiểm tra)
    item.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1
  );
  return (
    <div>
      <input type="text" value={filter} onChange={handleFilterChange} />
      <ul>
        {filteredData.map((item, index) => (
          <li key={index}>
            {item.name} ({item.age})
          </li>
        ))}
      </ul>
    </div>
  );
}
