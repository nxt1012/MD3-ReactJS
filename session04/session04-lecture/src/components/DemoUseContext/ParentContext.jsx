import "./ParentContext.css";
import React, { createContext, useState } from "react";
import CompB from "./CompB";

// khai báo ngữ cảnh
// lưu ý phải export
export const themeContext = createContext();

export default function ParentContext() {
  // useContext là 1 hook cung cấp context để giúp đơn giản hóa việc chia sẻ dữ liệu
  // trong cây DOM không cần phải truyền từng cấp

  // Trường hợp 1: truyền props
  // ParentContext => CompB => CompC
  const [theme, setTheme] = useState("light");

  const handleChangeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div>
      <h2>Demo useContext</h2>
      {/* Trường hợp 1 */}
      {/* <button onClick={handleChangeTheme}>Change theme</button>
      <CompB themeFromParent={theme} /> */}

      <themeContext.Provider value={theme}>
        <button onClick={handleChangeTheme}>Change theme</button>
        <CompB themeFromParent={theme} />
      </themeContext.Provider>
    </div>
  );
}
