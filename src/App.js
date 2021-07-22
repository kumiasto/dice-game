import { useEffect, useState } from "react";
import usePrevious from "./components/hooks/usePrevious";
import Dice from "./components/Dice";
import GameInfo from "./components/game-details/GameInfo";
import EndGame from "./components/modals/EndGame";
import ResumeGame from "./components/modals/ResumeGame";
import { Main } from "./styled/App";

function App() {
  const [diceValue, setDiceValue] = useState();
  const [history, setHistory] = useState([]);
  const [points, setPoints] = useState(+localStorage.getItem("points") ? parseInt(localStorage.getItem("points")) : 0 );
  const [round, setRound] = useState(+localStorage.getItem("rounds") ? parseInt(localStorage.getItem("rounds")) : 1 );
  const API_URL = "http://roll.diceapi.com/json/d6";
  const prevDiceValue = usePrevious(diceValue);

  async function fetchData() {
    const res = await fetch(API_URL);
    const data = await res.json();
    setDiceValue(data.dice[0].value);
  }

  useEffect(() => {
    fetchData();
    saveGame();
  }, [round]);

  function saveGame() {
    localStorage.setItem("points", points);
    localStorage.setItem("rounds", round);
  }

  return (
    <Main>
      <Dice
        diceValue={diceValue}
        prevDiceValue={prevDiceValue}
        round={round}
        nextRound={setRound}
        points={points}
        setPoints={setPoints}
      />
      <GameInfo
        diceValue={diceValue}
        round={round}
        points={points}
        history={history}
      />

      <EndGame
        points={points}
        setPoints={setPoints}
        setRound={setRound}
        setHistory={setHistory}
        round={round}
        history={history}
      />
      <ResumeGame
        points={points}
        setPoints={setPoints}
        setRound={setRound}
        setHistory={setHistory}
        round={round}
        history={history}
      />
    </Main>
  );
}

export default App;
