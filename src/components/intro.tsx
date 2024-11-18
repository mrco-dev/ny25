interface introProps {
  setShowIntro: React.Dispatch<React.SetStateAction<boolean>>;
  setShowControlPanel: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function Intro({
  setShowIntro,
  setShowControlPanel,
}: introProps) {
  const handleOpenGame = () => {
    setShowIntro(false);
    setShowControlPanel(true);
  };
  return (
    <div className="intro">
      <img src="/christmas-bg.jpg" alt="" />
      <div className="intro_text">
        <h2>Pozdravljeni</h2>
        <p>
          Božičku so na poti do tebe pobegnili njegovi navihani jelenčki. Brez
          njih ti ne more izročiti viščila, ki so ga zate pripravili škratki v
          božičkovi delavnici.
          <br />
          Mu jih pomagaš najti?
        </p>
        <button className="intro_button" onClick={handleOpenGame}>
          Pomagaj božičku
        </button>
      </div>
    </div>
  );
}
