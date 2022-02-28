import { useState, useContext } from 'react';
import classes from './Main.module.css';
import CharacterSelector from '../Modals/CharacterSelector';
import characterStats from '../../CharacterArray';
import Photo from './Photo';
import AuthContext from '../../store/auth-context';

const Main = () => {
  const ctx = useContext(AuthContext);
  const [showCharacterSelector, setShowCharacterSelector] = useState(false);
  const [selectedTag, setSelectedTag] = useState({
    offsetY: null,
    offsetX: null,
  });

  const closeCharacterSelector = () => {
    setShowCharacterSelector(false);
  };

  const coordinatesHandler = (event) => {
    setSelectedTag({
      offsetY: event.nativeEvent.offsetY,
      offsetX: event.nativeEvent.offsetX,
    });
    setShowCharacterSelector(true);
  };

  const compareChoiceHandler = (name) => {
    const chosenCharacter = characterStats.filter((item) => item.name === name);
    if (
      selectedTag.offsetY >= chosenCharacter[0].offsetYStart &&
      selectedTag.offsetY <= chosenCharacter[0].offsetYEnd &&
      selectedTag.offsetX >= chosenCharacter[0].offsetXStart &&
      selectedTag.offsetX <= chosenCharacter[0].offsetXEnd
    ) {
      ctx.characterDetected(name);
    } else {
      ctx.gameUpdateHandler('Try Again');
    }
    setShowCharacterSelector(false);
  };

  return (
    <div className={classes.main}>
      <Photo onClick={coordinatesHandler} />
      {showCharacterSelector && (
        <CharacterSelector
          onClose={closeCharacterSelector}
          onChoice={compareChoiceHandler}
        />
      )}
    </div>
  );
};

export default Main;
