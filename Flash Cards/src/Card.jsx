import "./Card.css";
import { useState } from "react";

export default function Card(data) {
  const { id, question, answer } = data.data;
  const [flip, setFlip] = useState(false);

  return (
    <div className={`card ${flip ? "flip" : ""}`}>
      <div className="front" onClick={() => setFlip(!flip)}>
        <h1>{question}</h1>
      </div>
      <div className="back" onClick={() => setFlip(!flip)}>
        <h1>{answer}</h1>
      </div>
    </div>
  );
}
