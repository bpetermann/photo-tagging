import { Fragment } from 'react';
import classes from './CharacterSelector.module.css';

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const CharacterSelector = (props) => {
  const { pageY, pageX } = props.coordinates;
  const notFoundCharacters = props.characters.filter(
    (item) => item.hasBeenFound === false
  );

  const setCharacterHandler = (event) => {
    props.onChoice(event.target.textContent);
  };

  return (
    <Fragment>
      <Backdrop onClose={props.onClose} />
      <div
        className={classes.selector}
        style={{ top: pageY + 'px', left: pageX + 'px' }}
      >
        {notFoundCharacters.map((item) => {
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
