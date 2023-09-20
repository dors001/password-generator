import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import "@fontsource/jetbrains-mono/600.css";
import PasswordField from "./components/PasswordField";
import { useState } from "react";

function App() {
  const [password, setPassword] = useState("");

  const generateRandomPassword = () => {
    const length = 12;
    const charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+|`~";
    let retVal = "";
    for (let i = 0; i < length; i++) {
      retVal += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    setPassword(retVal);
  };

  return (
    <>
      <div className="d-flex flex-column my-3 app-container justify-content-center">
        <div className="title mb-4 align-self-center">Password Generator</div>
        <PasswordField password={password} />
        <button className="btn btn-primary" onClick={generateRandomPassword}>
          generate password
        </button>
      </div>
    </>
  );
}
export default App;
