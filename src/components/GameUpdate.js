import classes from './GameUpdate.module.css';

const GameUpdate = (props) => {
  return <div className={classes.gamestats}>{props.characterFound} Found!</div>;
};

export default GameUpdate;
