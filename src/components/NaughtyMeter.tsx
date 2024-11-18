import { useState } from "react";

interface naughtyMeterProps {
  setShowNaughtyMeter: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function NaughtyMeter({
  setShowNaughtyMeter,
}: naughtyMeterProps) {
  const measurementLines = Array.from({ length: 21 });
  const [hasMeasured, setHasMeasured] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);

  const handleCalculation = () => {
    const randomNumber = Math.floor(Math.random() * 101);
    setHasMeasured(true);
    setProgress(randomNumber);
  };
  return (
    <div className="naughty_meter">
      <span
        className="naughty_meter_close"
        onClick={() => {
          setShowNaughtyMeter(false);
        }}
      >
        <img src="/close.svg" alt="close icon" />
      </span>
      <div className="naughty_meter_wrapper">
        <div className="naughty_nice">
          <div className="scale_wrapper">
            <span>100%</span>
            <span>75%</span>
            <span>50%</span>
            <span>25%</span>
            <span>0%</span>
          </div>
          <div
            className="naughty_nice_progress"
            style={{ "--progress": `${progress}%` } as React.CSSProperties}
          >
            <span>Naughty</span>
            {measurementLines.map((_, index) => (
              <div
                className={`naughty_nice_progress_line naughty_nice_progress_line_${
                  index + 1
                }`}
                key={index}
              ></div>
            ))}
            <span>Nice</span>
          </div>
        </div>
        <div className="inputs_wrapper">
          <input type="text" />
          <button
            onClick={
              hasMeasured ? () => setShowNaughtyMeter(false) : handleCalculation
            }
          >
            {hasMeasured ? "Nazaj" : "Potrdi"}
          </button>
        </div>
      </div>
    </div>
  );
}
