interface Props {
  strengthLevel: string;
}

export enum StrengthLevel {
  tooWeak = "TOO WEAK!",
  weak = "WEAK",
  mid = "MEDIUM",
  strong = "STRONG",
}

export enum StrengthColor {
  tooWeak = "#F64A4A",
  weak = "#FB7C58",
  mid = "#F8CD65",
  strong = "#A4FFAF",
}

const PasswordStrength = ({ strengthLevel }: Props) => {
  const levelMapping: { [key: string]: number } = {
    "TOO WEAK!": 1,
    WEAK: 2,
    MEDIUM: 3,
    STRONG: 4,
  };

  const strengthColors = [
    StrengthColor.tooWeak,
    StrengthColor.weak,
    StrengthColor.mid,
    StrengthColor.strong,
  ];
  const strengthValue = levelMapping[strengthLevel];

  return (
    <>
      <div className="strength-container d-flex justify-content-between align-items-center">
        <span className="strength-title">STRENGTH</span>
        <div className="strength-meter-container d-flex align-items-center">
          <span className="strength-level">{strengthLevel}</span>
          {Array.from({ length: 4 }, (_, index) => (
            <div
              key={index}
              className="strength-meter"
              style={{
                backgroundColor:
                  index < strengthValue
                    ? strengthColors[strengthValue - 1]
                    : "transparent",
              }}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PasswordStrength;
