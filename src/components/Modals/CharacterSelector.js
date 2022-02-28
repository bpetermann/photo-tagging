import { Fragment, useContext } from 'react';
import classes from './CharacterSelector.module.css';
import Backdrop from './Backdrop';
import AuthContext from '../../store/auth-context';

const CharacterSelector = (props) => {
  const ctx = useContext(AuthContext);

  const wantedCharacters = ctx.characters.filter(
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
