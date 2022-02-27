import { Fragment } from 'react';
import classes from './CharacterSelector.module.css';
import Backdrop from './Backdrop';

const CharacterSelector = (props) => {
  const wantedCharacters = props.characters.filter(
    (item) => item.hasBeenFound === false
  );

  const setCharacterHandler = (event) => {
    props.onChoice(event.target.textContent);
  };

  return (
    <Fragment>
      <Backdrop onClose={props.onClose} />
      <div className={classes.selector}>
        {wantedCharacters.map((item) => {
          return (
            <button
              key={item.name}
              onClick={setCharacterHandler}
              value={item.name}
            >
              {item.name}
            </button>
          );
        })}
      </div>
    </Fragment>
  );
};

export default CharacterSelector;
