import { useState } from "react";
import "./styles/App.scss";
import Intro from "./components/intro";
import ControlPanel from "./components/ControlPanel";
import Team from "./components/team";

function App() {
  const [showIntro, setShowIntro] = useState<boolean>(true);
  const [showTeam, setShowTeam] = useState<boolean>(false);
  const [showControlPanel, setShowControlPanel] = useState<boolean>(false);

  return (
    <>
      <div className="container">
        {showIntro && (
          <Intro
            setShowIntro={setShowIntro}
            setShowControlPanel={setShowControlPanel}
          />
        )}
        {showControlPanel && <ControlPanel setShowTeam={setShowTeam} />}
        {showTeam && <Team setShowTeam={setShowTeam} />}
      </div>
    </>
  );
}

export default App;
