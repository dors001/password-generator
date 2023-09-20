import { useState } from "react";

interface Password {
  password: string;
}

const PasswordField = ({ password }: Password) => {
  const [copied, setCopied] = useState(false);

  const handleImageClick = async () => {
    try {
      await navigator.clipboard.writeText(password);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 3000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <>
      <div className="d-flex my-2 px-4 password-container align-items-center">
        <span className="password flex-grow-1">{password}</span>
        {copied && <span className="password-copy me-2">COPIED!</span>}
        <img
          src="./src/assets/images/icon-copy.svg"
          alt="copy"
          className="password-img"
          onClick={handleImageClick}
        />
      </div>
    </>
  );
};

export default PasswordField;
