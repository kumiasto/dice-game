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
  wrapper: {
    display: "flex",
  },
  button: {
    padding: "1vh 3vh",
    fontWeight: "bold",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
    margin: "0 2vh",
  },
});

const ResumeGame = ({ points, setPoints, round, setRound, history, setHistory }) => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  function handleClose() {
    setPoints(0);
    setRound(1);
    setHistory([...history, points]);
    setOpen(false);
  }

  function handleOpen() {
    setOpen(round > 1 ? true : false);
  }

  useEffect(() => {
    handleOpen();
  }, []);

  return (
    <Modal open={open} onClose={handleClose} className={classes.modal}>
      <ModalWrapper>
        <h3>Reload the previous game?</h3>
        <div className={classes.wrapper}>
          <button onClick={() => setOpen(false)} className={classes.button}> Yes </button>
          <button onClick={handleClose} className={classes.button}> No </button>
        </div>
      </ModalWrapper>
    </Modal>
  );
};

export default ResumeGame;
