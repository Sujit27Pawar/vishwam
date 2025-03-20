import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRoutes from "./AppRoutes";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
