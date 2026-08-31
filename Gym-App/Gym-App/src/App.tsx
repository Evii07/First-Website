import { useState } from "react";
import LoginScreen from "./Components/Login.jsx";
import HomeScreen from "./Components/Home.jsx";

export default function App() {
  // this state variable says which screen is currently showing
  const [screen, setScreen] = useState("home");

  return (
    <>
      {screen === "login" && <LoginScreen onSignIn={() => setScreen("home")} />}
      {screen === "home" && <HomeScreen />}
    </>
  );
}