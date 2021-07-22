import History from "./History";
import Points from "./Points";
import Rounds from "./Rounds";
import { GameInfoWrapper } from "../../styled/App";

const GameInfo = ({ history, points, round }) => {
  return (
    <>
      <GameInfoWrapper>
        <History history={history} />
        <Points points={points} />
        <Rounds round={round} />
      </GameInfoWrapper>
    </>
  );
};

export default GameInfo;
