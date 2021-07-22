import { HistoryWrapper } from "../../styled/App";

const History = ({ history }) => {
  return (
    <div>
      {history.length > 0 ? <h2>Highscore: {Math.max(...history)}</h2> : ""}
      <h2>Your last games:</h2>
      {history.length > 0
        ? history.map((hist, index) => {
            return (
              <HistoryWrapper key={hist}>
                <h4>Game {index + 1} - </h4>
                <h4>your score: {hist}</h4>
              </HistoryWrapper>
            );
          })
        : "You don't have any games yet."}
    </div>
  );
};

export default History;
