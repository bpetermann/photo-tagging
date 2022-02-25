import classes from './GameUpdate.module.css';

const GameUpdate = (props) => {
  let style = classes.gamestats;

  return (
    <div
      className={`${style} ${
        props.gameUpdate === 'Try Again' && classes.noCharacter
      }`}
    >
      {props.gameUpdate}
    </div>
  );
};

export default GameUpdate;
