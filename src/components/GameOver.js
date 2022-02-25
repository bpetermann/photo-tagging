import { Fragment } from 'react';
import classes from './GameOver.module.css';
import Backdrop from './Backdrop';

const GameOver = () => {
  return (
    <Fragment>
      <Backdrop />
      <div className={classes.gameover}>Congratulations!</div>;
    </Fragment>
  );
};

export default GameOver;
