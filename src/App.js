import Header from './components/Header/Header';
import Main from './components/Main/Main';
import React, { useEffect, useState, useContext, Fragment } from 'react';
import GameOver from './components/Modals/GameOver';
import GameUpdate from './components/Modals/GameUpdate';
import AuthContext from './store/auth-context';

const App = () => {
  const ctx = useContext(AuthContext);
  const [gameover, setGameOver] = useState(false);

  const allCharactersFound = ctx.characters.every((item) => {
    return item.hasBeenFound;
  });

  const gameOverHandler = allCharactersFound && !ctx.gameUpdate;

  useEffect(() => {
    if (gameOverHandler) {
      setGameOver(true);
      setTimeout(function () {
        window.location.reload();
      }, 3000);
    }
  }, [gameOverHandler]);

  return (
    <Fragment>
      <Header />
      <Main />
      {ctx.gameUpdate && <GameUpdate />}
      {gameover && <GameOver />}
    </Fragment>
  );
};

export default App;
