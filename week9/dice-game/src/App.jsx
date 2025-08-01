import React, { useState } from "react";
import dice1 from "./assets/dice1.png";
import dice2 from "./assets/dice2.png";
import dice3 from "./assets/dice3.png";
import dice4 from "./assets/dice4.png";
import dice5 from "./assets/dice5.png";
import dice6 from "./assets/dice6.png";

const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];

function getRandomDice() {
  return Math.floor(Math.random() * 6); // 0-5 arası index
}

function App() {
  const [playerName, setPlayerName] = useState("Player 1");
  const [playerDice, setPlayerDice] = useState(0);
  const [pcDice, setPcDice] = useState(0);
  const [result, setResult] = useState("");
  const [isRolling, setIsRolling] = useState(false);
  const [scores, setScores] = useState({ player: 0, pc: 0, draw: 0 });

  const rollDice = () => {
    setIsRolling(true);
    setResult("Zarlar Atılıyor...");
    let rollInterval = setInterval(() => {
      setPlayerDice(getRandomDice());
      setPcDice(getRandomDice());
    }, 100);

    setTimeout(() => {
      clearInterval(rollInterval);
      const finalPlayer = getRandomDice();
      const finalPc = getRandomDice();
      setPlayerDice(finalPlayer);
      setPcDice(finalPc);

      let newScores = { ...scores };
      if (finalPlayer > finalPc) {
        setResult(`${playerName} Kazandı!`);
        newScores.player += 1;
      } else if (finalPlayer < finalPc) {
        setResult("PC Kazandı!");
        newScores.pc += 1;
      } else {
        setResult("Berabere!");
        newScores.draw += 1;
      }
      setScores(newScores);
      setIsRolling(false);
    }, 3000);
  };

  return (
    <div className="container">
      <h1>Zar Oyunu</h1>
      <div className="user-input">
        <label>Kullanıcı Adı: </label>
        <input
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
          disabled={isRolling}
        />
      </div>
      <div className="dice-area">
        <div className="player">
          <h2>{playerName}</h2>
          <img src={diceImages[playerDice]} alt="player dice" />
        </div>
        <div className="player">
          <h2>PC</h2>
          <img src={diceImages[pcDice]} alt="pc dice" />
        </div>
      </div>
      <h2 className="result">{result}</h2>
      <button onClick={rollDice} disabled={isRolling}>
        {isRolling ? "Zarlar Atılıyor..." : "Zar At"}
      </button>
      <div className="scoreboard">
        <p>
          <strong>{playerName}:</strong> {scores.player} | <strong>PC:</strong>{" "}
          {scores.pc} | <strong>Beraberlik:</strong> {scores.draw}
        </p>
      </div>
    </div>
  );
}

export default App;
