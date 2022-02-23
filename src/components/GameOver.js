import { Fragment } from 'react';
import classes from './GameOver.module.css';
const Backdrop = (props) => {
  return <div className={classes.backdrop}></div>;
};

const GameOver = () => {
  return (
    <Fragment>
      <Backdrop />
      <div className={classes.gamestats}>Congratulations!</div>;
    </Fragment>
  );
};

export default GameOver;
