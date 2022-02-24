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
  const [gameUpdate, setgameUpdate] = useState(null);

  useEffect(() => {
    let allCharactersFound = characters.every((item) => {
      if (item.hasBeenFound === true) {
        return true;
      }
      return false;
    });

    if (allCharactersFound && !gameUpdate) {
      setGameOver(true);
      setTimeout(function () {
        window.location.reload();
      }, 3000);
    }
  }, [characters, gameUpdate]);

  const characterDetectedHandler = (name) => {
    setgameUpdate(`${name} Found!`);
    let characterList = characters.map((item) => {
      if (item.name === name) {
        return { ...item, hasBeenFound: !item.hasBeenFound };
      }
      return item;
    });
    setCharacters(characterList);
    setTimeout(function () {
      setgameUpdate(null);
    }, 1500);
  };

  const noCharacterHandler = () => {
    setgameUpdate('Try Again');
    setTimeout(function () {
      setgameUpdate(null);
    }, 1500);
  };

  return (
    <div className='container'>
      <Header characters={characters} />
      <PhotoTag
        characters={characters}
        characterDetected={characterDetectedHandler}
        noCharacterHandler={noCharacterHandler}
      />
      {gameUpdate && <GameUpdate gameUpdate={gameUpdate} />}
      {gameover && <GameOver />}
    </div>
  );
};

export default App;
