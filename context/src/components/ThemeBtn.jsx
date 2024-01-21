import React from "react";
import { useTheme } from "../context/Theme";

function ThemeBtn() {
  const { themeMode, darkMode, lightMode } = useTheme();

  const theme = () => {
    if (themeMode == "blue") {
      darkMode();
      //  console.log(themeMode);
    } else {
      lightMode();
      // console.log(themeMode);
    }
  };
  return (
    <div>
      <button onClick={theme}>change Theme</button>
    </div>
  );
}

export default ThemeBtn;
