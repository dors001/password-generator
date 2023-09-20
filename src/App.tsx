import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import "@fontsource/jetbrains-mono/600.css";
import PasswordField from "./components/PasswordField";
import { useState } from "react";
import ButtonPasswordGenertor from "./components/ButtonPasswordGenertor";
import CheckboxField, { Params } from "./components/CheckboxField";

function App() {
  const [password, setPassword] = useState("");
  const [checkedParams, setCheckedParams] = useState<string[]>([]);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setCheckedParams([...checkedParams, event.target.name]);
    } else {
      setCheckedParams(checkedParams.filter((cp) => cp !== event.target.name));
    }
  };

  const generateRandomPassword = () => {
    let length = 12;
    let charset = "";
    let retVal = "";

    if (checkedParams.includes(Params.Uppercase)) {
      charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (checkedParams.includes(Params.Lowercase)) {
      charset += "abcdefghijklmnopqrstuvwxyz";
    }
    if (checkedParams.includes(Params.Numbers)) {
      charset += "0123456789";
    }
    if (checkedParams.includes(Params.Symbols)) {
      charset += "!@#$%^&*()-_=+|`~";
    }

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
        <div className="params-container">
          <CheckboxField handleCheckboxChange={handleCheckboxChange} />
        </div>
        <ButtonPasswordGenertor
          generateRandomPassword={generateRandomPassword}
        />
      </div>
    </>
  );
}
export default App;
