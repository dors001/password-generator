interface Props {
  handleCheckboxChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export enum Params {
  Uppercase = "Include Uppercase Letters",
  Lowercase = "Include Lowercase Letters",
  Numbers = "Include Numbers",
  Symbols = "Include Symbols",
}

const CheckboxField = ({ handleCheckboxChange }: Props) => {
  const params = [
    Params.Uppercase,
    Params.Lowercase,
    Params.Numbers,
    Params.Symbols,
  ];

  return (
    <>
      {params &&
        params.map((p, index) => {
          return (
            <div className="d-flex parameter align-items-center" key={index}>
              <input
                className="parameter-checkbox me-3"
                type="checkbox"
                name={p}
                id={`param${index}`}
                value={p}
                onChange={handleCheckboxChange}
              />
              <label
                className="parameter-label ps-2 pt-2"
                htmlFor={`param${index}`}
              >
                {p}
              </label>
            </div>
          );
        })}
    </>
  );
};

export default CheckboxField;
