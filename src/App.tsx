import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import "@fontsource/jetbrains-mono/600.css";
import PasswordField from "./components/PasswordField";
import { useState } from "react";
import ButtonPasswordGenertor from "./components/ButtonPasswordGenertor";
import CheckboxField, { Params } from "./components/CheckboxField";
import RangeBar from "./components/RangeBar";
import PasswordStrength, { StrengthLevel } from "./components/PasswordStrength";

function App() {
  const [password, setPassword] = useState("");
  const [checkedParams, setCheckedParams] = useState<string[]>([]);
  const [charNum, setCharNum] = useState(10);
  const [strengthLevel, setStrengthLevel] = useState("");

  const handleCharNumChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCharNum(parseInt(event.target.value));
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setCheckedParams([...checkedParams, event.target.name]);
    } else {
      setCheckedParams(checkedParams.filter((cp) => cp !== event.target.name));
    }
  };

  const generateText = () => {
    let length = charNum;
    let charset = "";
    let retVal = "";
    let levelCounter = 0;

    if (checkedParams.includes(Params.Uppercase)) {
      charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      levelCounter++;
    }
    if (checkedParams.includes(Params.Lowercase)) {
      charset += "abcdefghijklmnopqrstuvwxyz";
      levelCounter++;
    }
    if (checkedParams.includes(Params.Numbers)) {
      charset += "0123456789";
      levelCounter++;
    }
    if (checkedParams.includes(Params.Symbols)) {
      charset += "!@#$%^&*()-_=+|`~";
      levelCounter++;
    }

    for (let i = 0; i < length; i++) {
      retVal += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    setPassword(retVal);

    return { retVal, levelCounter };
  };

  const generateRandomPassword = () => {
    const password = generateText();

    if (password.retVal.length < 12) {
      password.levelCounter > 2
        ? setStrengthLevel(StrengthLevel.weak)
        : setStrengthLevel(StrengthLevel.tooWeak);
    }

    if (password.retVal.length >= 12 && password.retVal.length < 16) {
      password.levelCounter > 2
        ? setStrengthLevel(StrengthLevel.mid)
        : setStrengthLevel(StrengthLevel.weak);
    }

    if (password.retVal.length >= 16) {
      password.levelCounter < 2
        ? setStrengthLevel(StrengthLevel.weak)
        : setStrengthLevel(StrengthLevel.strong);

      password.levelCounter === 2 ? setStrengthLevel(StrengthLevel.mid) : null;
    }
  };

  return (
    <>
      <div className="d-flex flex-column my-3 app-container justify-content-center">
        <div className="title mb-4 align-self-center">Password Generator</div>
        <PasswordField password={password} />
        <div className="params-container mt-4">
          <RangeBar handleChange={handleCharNumChange} value={charNum} />
          <CheckboxField handleCheckboxChange={handleCheckboxChange} />
          <PasswordStrength strengthLevel={strengthLevel} />
          <ButtonPasswordGenertor
            generateRandomPassword={generateRandomPassword}
          />
        </div>
      </div>
    </>
  );
}
export default App;
