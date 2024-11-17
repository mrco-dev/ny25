import { useState } from "react";
import "./styles/App.scss";
import ControlPanel from "./components/ControlPanel";
import Team from "./components/team";

function App() {
  const [showTeam, setShowTeam] = useState<boolean>(false);
  return (
    <>
      <div className="container">
        <ControlPanel setShowTeam={setShowTeam} />
        {showTeam && <Team setShowTeam={setShowTeam} />}
      </div>
    </>
  );
}

export default App;
