import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
// import './App.css'
import Inbox from "./components/Inbox";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar></Navbar>
      <div className="flex">
        <Sidebar></Sidebar>
        <Inbox></Inbox>
      </div>
    </>
  );
}

export default App;
