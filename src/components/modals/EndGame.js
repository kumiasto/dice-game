import { useEffect, useState } from "react";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import { ModalWrapper } from "../../styled/App";

const useStyles = makeStyles({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    padding: "1vh 3vh",
    fontWeight: "bold",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
  },
});

const EndGame = ({ points, setPoints, round, setRound, history, setHistory }) => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  function handleClose() {
    setPoints(0);
    setRound(1);
    setHistory([...history, points]);
    setOpen(false);
  }

  function handleOpen() {
    if (round >= 30) {
      setOpen(true);
    }
  }

  useEffect(() => {
    handleOpen();
  }, [round]);

  return (
    <Modal open={open} onClose={handleClose} className={classes.modal}>
      <ModalWrapper>
        <h3>Your points: {points}</h3>
        <h3>Do you want play again?</h3>
        <button onClick={handleClose} className={classes.button}> Play </button>
      </ModalWrapper>
    </Modal>
  );
};

export default EndGame;
