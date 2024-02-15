import React from "react";
import { useSelector } from "react-redux";
import "./App.scss";
import Sidebar from "./components/sidebar/Sidebar";
import Chat from "./components/chat/Chat";
import Login from "./components/login/Login";

function App() {
  // const user = useSelector((state) => state.user.user);
  const user = null;

  return (
    <div className="App">
      {user ? (
        <>
          <Sidebar />
          <Chat />
        </>
      ) : (
        <>
          <Login />
        </>
      )}
    </div>
  );
}

export default App;
