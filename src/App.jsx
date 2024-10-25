import profile from "./assets/avatar-jessica.jpeg";

function App() {
  return (
    <div style={{ display: "flex", gap: "12px" }}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

function Card() {
  return (
    <div className="card">
      <img src={profile} alt="profile" />
      <h3 className="card-title">Jessica Randall</h3>
      <small>London, United Kingdom</small>
      <p className="card-description">
        &ldquo;Frontend Developer, Avid Reader&rdquo;.
      </p>
      <ul className="card-socials" type="none">
        <li className="card-socials__items">Github</li>
        <li className="card-socials__items">Frontend Mentors</li>
        <li className="card-socials__items">LinkedIn</li>
        <li className="card-socials__items">X</li>
        <li className="card-socials__items">Instagram</li>
      </ul>
    </div>
  );
}

export default App;
