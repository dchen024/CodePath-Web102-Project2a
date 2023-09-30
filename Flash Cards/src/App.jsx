import "./App.css";
import Card from "./Card";
import { useState } from "react";

const data = [
  {
    id: 1,
    question: "Translate: 你好 (nǐ hǎo)",
    answer: "English: hello",
  },
  {
    id: 2,
    question: "Translate: 谢谢 (xiè xiè)",
    answer: "English: thank you",
  },
  {
    id: 3,
    question: "Translate: 不客气 (bú kè qi)",
    answer: "English: you're welcome",
  },
  {
    id: 4,
    question: "Translate 再见 (zài jiàn)",
    answer: "goodbye",
  },
  {
    id: 5,
    question: "Translate 是 (shì)",
    answer: "yes",
  },
  {
    id: 6,
    question: "Translate 不是 (bú shì)",
    answer: "no",
  },
  {
    id: 7,
    question: "Translate 我叫 (wǒ jiào)",
    answer: "my name is",
  },
  {
    id: 8,
    question: "Translate 你叫 (nǐ jiào)",
    answer: "what is your name?",
  },
  {
    id: 9,
    question: "Translate 请 (qǐng)",
    answer: "please",
  },
  {
    id: 10,
    question: "Translate 对不起 (duì bù qǐ)",
    answer: "sorry",
  },
  {
    id: 11,
    question: "Translate 多少钱 (duō shao qián)",
    answer: "how much is it?",
  },
  {
    id: 12,
    question: "Translate 在哪里 (zài nǎ lǐ)",
    answer: "where is it?",
  },
];

const App = () => {
  const [cardIndex, setCardIndex] = useState(0);
  const count = data.length;
  console.log(count);
  console.log(cardIndex);

  function handleNextCard() {
    if (cardIndex < count - 1) {
      setCardIndex(cardIndex + 1);
    } else {
      setCardIndex(0);
    }
  }

  function handlePreviousCard() {
    if (cardIndex > 0) {
      setCardIndex(cardIndex - 1);
    } else {
      setCardIndex(count - 1);
    }
  }

  return (
    <div className="App">
      <h1>Practice Mandarin</h1>
      <h2>Refresh your mandarin reading skills.</h2>
      <h2>Number of cards: {count}</h2>
      <Card data={data[cardIndex]} />
      <div className="buttons">
        <button onClick={handlePreviousCard}>Previous Card</button>
        <button onClick={handleNextCard}>Next Card</button>
      </div>
    </div>
  );
};

export default App;
