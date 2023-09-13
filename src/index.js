import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar photoName="ricardo-dev.jpg" name="selfie" />

      <div className="data">
        <Intro
          name="Ricardo Ruvalcaba"
          description="Full-Stack Java Developer at Skillstorm. By day, I'm building stacks and brewing Java. By evening, I'm strolling under sunsets and debugging life's mysteries"
        />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar(props) {
  return <img className="avatar" src={props.photoName} alt={props.name} />;
}

function Intro(props) {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>{props.description}</p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill name="Java" color="#007396" emoji="java.png" />
      <Skill name="Javascript" color="#F7DF1E" emoji="javascript.png" />
      <Skill name="React" color="#61DAFB" emoji="react.png" />
      <Skill name="Postgres" color="#336791" emoji="postgresql.png" />
      <Skill name="Mongo" color="#4DB33D" emoji="mongo_db.png" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.name}</span>
      <img className="emoji-icon" src={props.emoji} />
    </div>
  );
}
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
