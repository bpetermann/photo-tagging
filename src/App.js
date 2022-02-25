import Header from './components/Header';
import Main from './components/Main';
import { useEffect, useState, Fragment } from 'react';
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
      return item.hasBeenFound;
    });

    if (allCharactersFound && !gameUpdate) {
      setGameOver(true);
      setTimeout(function () {
        window.location.reload();
      }, 3000);
    }
  }, [characters, gameUpdate]);

  const characterDetectedHandler = (text) => {
    gameUpdateHandler(`${text} Found!`);
    let characterList = characters.map((item) => {
      if (item.name === text) {
        return { ...item, hasBeenFound: !item.hasBeenFound };
      }
      return item;
    });
    setCharacters(characterList);
  };

  const gameUpdateHandler = (text) => {
    setgameUpdate(text);
    setTimeout(function () {
      setgameUpdate(null);
    }, 1500);
  };

  return (
    <Fragment>
      <Header characters={characters} />
      <Main
        characters={characters}
        characterDetected={characterDetectedHandler}
        gameUpdateHandler={gameUpdateHandler}
      />
      {gameUpdate && <GameUpdate gameUpdate={gameUpdate} />}
      {gameover && <GameOver />}
    </Fragment>
  );
};

export default App;
