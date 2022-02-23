import Header from './components/Header';
import PhotoTag from './components/PhotoTag';
import { useEffect, useState } from 'react';
import GameOver from './components/GameOver';
import GameUpdate from './components/GameUpdate';

const App = () => {
  const [characters, setCharacters] = useState([
    { name: 'Wally', hasBeenFound: false },
    { name: 'Odlaw', hasBeenFound: false },
    { name: 'Wizard', hasBeenFound: false },
  ]);
  const [gameover, setGameOver] = useState(false);
  const [characterFound, setCharacterFound] = useState(null);

  useEffect(() => {
    let allCharactersFound = characters.every((item) => {
      if (item.hasBeenFound === true) {
        return true;
      }
      return false;
    });

    if (allCharactersFound && !characterFound) {
      setGameOver(true);
    }
  }, [characters, characterFound]);

  const characterDetectedHandler = (name) => {
    setCharacterFound(name);
    let characterList = characters.map((item) => {
      if (item.name === name) {
        return { ...item, hasBeenFound: !item.hasBeenFound };
      }
      return item;
    });
    setCharacters(characterList);
    setTimeout(function () {
      setCharacterFound(null);
    }, 1500);
  };

  return (
    <div className='container'>
      <Header characters={characters} />
      <PhotoTag
        characters={characters}
        characterDetected={characterDetectedHandler}
      />
      {characterFound && <GameUpdate characterFound={characterFound} />}
      {gameover && <GameOver />}
    </div>
  );
};

export default App;
