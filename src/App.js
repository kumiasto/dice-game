import { useEffect, useState } from "react";
import usePrevious from "./hooks/usePrevious";
import Dice from "./components/Dice";
import GameInfo from "./components/game-details/GameInfo";
import EndGame from "./components/modals/EndGame";
import ResumeGame from "./components/modals/ResumeGame";
import { Main } from "./styled/App";

function App() {
  const dataStorage = JSON.parse(localStorage.getItem("data")) ?? 0;
  const [diceValue, setDiceValue] = useState();
  const [history, setHistory] = useState([]);
  const [points, setPoints] = useState( dataStorage ? dataStorage[0] : 0 );
  const [round, setRound] = useState( dataStorage ? dataStorage[1] : 1 );
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
    const data = [points, round]
    localStorage.setItem("data", JSON.stringify(data));
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
