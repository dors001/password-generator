interface Props {
  generateRandomPassword: () => void;
}

const ButtonPasswordGenertor = ({ generateRandomPassword }: Props) => {
  return (
    <>
      <button
        className="btn-password-generator"
        onClick={generateRandomPassword}
      >
        GENERATE
        <svg
          className="btn-password-generator-icon ms-4"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z" />
        </svg>
      </button>
    </>
  );
};

export default ButtonPasswordGenertor;
