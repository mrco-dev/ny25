interface controlPanelProps {
  setShowTeam: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function ControlPanel({ setShowTeam }: controlPanelProps) {
  return (
    <>
      <div className="button_wrapper">
        <button>1</button>
        <button>2</button>
        <button>3</button>
      </div>
      <div className="radar">
        <span className="radar_cross"></span>
        <span className="radar_sweep"></span>
        <button className="radar_button">Start</button>
      </div>
      <div className="button_wrapper">
        <button>1</button>
        <button>2</button>
        <button onClick={() => setShowTeam(true)}>ekipa</button>
      </div>
    </>
  );
}
