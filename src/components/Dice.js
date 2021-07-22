import { DiceWrapper, Button, ButtonWrapper } from "../styled/App";

const Dice = ({ diceValue, prevDiceValue, round, nextRound, points, setPoints }) => {
  const img = diceValue ? `http://roll.diceapi.com/images/poorly-drawn/d6/${diceValue}.png` : "...";
  const correct = 0.1;

  function handleIsLower() {
    if (diceValue < prevDiceValue) {
      setPoints(Number((points + correct).toFixed(1)));
    }
    nextRound(round + 1);
  }

  function handleIsHigher() {
    if (diceValue > prevDiceValue) {
      setPoints(Number((points + correct).toFixed(1)));
    }
    nextRound(round + 1);
  }

  return (
    <DiceWrapper>
      <img src={img} alt="dice" />
      <h4>Next dice will be: </h4>
      <ButtonWrapper>
        <Button onClick={handleIsLower}>Lower</Button>
        <Button onClick={handleIsHigher}>Higher</Button>
      </ButtonWrapper>
    </DiceWrapper>
  );
};

export default Dice;
