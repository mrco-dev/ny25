interface teamProps {
  setShowTeam: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function Team({ setShowTeam }: teamProps) {
  const teamMembers = Array.from({ length: 11 });
  return (
    <div className="team">
      <span
        className="team_close"
        onClick={() => {
          setShowTeam(false);
        }}
      >
        <img src="/close.svg" alt="close icon" />
      </span>
      <div className="team_grid">
        {teamMembers.map((_, index) => (
          <div className="team_member" key={index}>
            <img src="/team-member-placeholder.jpeg" alt="team member" />
            <h5>Ime Priimek</h5>
            <p>pozicija</p>
          </div>
        ))}
      </div>
    </div>
  );
}
