import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
// import './App.css'
import Inbox from "./components/Inbox";
import Body from "./components/Body";
import Mail from "./components/Mail";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import SendEmail from "./components/SendEmail";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { Toaster } from "react-hot-toast";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Inbox />,
      },
      {
        path: "/mail/:id",
        element: <Mail />,
      },
    ],
  },
  {
    path:"/login",
    element: <Login/>,
  },
  {
    path:"/signup",
    element: <SignUp/>,
  }
]);
function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Navbar></Navbar>
      <RouterProvider router={appRouter} />

      <div className="absolute w-[30%] bottom-0 right-20 z-10">
        <SendEmail />
      </div>
      <Toaster></Toaster>
    </>
  );
}

export default App;
