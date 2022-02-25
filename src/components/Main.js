import { useState } from 'react';
import classes from './Main.module.css';
import CharacterSelector from './CharacterSelector';
import characterStats from '../CharacterArray';
import Photo from './Photo';

const PhotoTag = (props) => {
  const [selectorCoordinates, setselectorCoordinates] = useState('');
  const [showCharacterSelector, setShowCharacterSelector] = useState(false);
  const [selectedTag, setSelectedTag] = useState({
    offsetY: null,
    offsetX: null,
  });

  const closeCharacterSelector = () => {
    setShowCharacterSelector(false);
  };

  const coordinatesHandler = (event) => {
    setselectorCoordinates({
      pageY: event.pageY,
      pageX: event.pageX,
    });

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
      props.characterDetected(name);
    } else {
      props.gameUpdateHandler('Try Again');
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
          coordinates={selectorCoordinates}
          characters={props.characters}
        />
      )}
    </div>
  );
};

export default PhotoTag;
