import classes from './GameUpdate.module.css';

const GameUpdate = (props) => {
  return (
    <div
      className={
        classes[props.gameUpdate === 'Try Again' ? 'no-character' : 'gamestats']
      }
    >
      {props.gameUpdate}
    </div>
  );
};

export default GameUpdate;
