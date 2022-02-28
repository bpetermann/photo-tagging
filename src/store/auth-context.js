import React, {useState} from 'react';

const AuthContext = React.createContext({
  characters: [],
  gameUpdate: null,
  characterDetected: () => {},
  gameUpdateHandler: () => {}
});

export const AuthContextProvider = (props) => {
    const [characters, setCharacters] = useState([
        { name: 'Wally', hasBeenFound: false },
        { name: 'Odlaw', hasBeenFound: false },
        { name: 'Wizard', hasBeenFound: false },
      ]);
      const [gameUpdate, setgameUpdate] = useState(null);

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

  return <AuthContext.Provider
  value={{
    characters: characters,
    gameUpdate: gameUpdate,
    characterDetected:   characterDetectedHandler,
    gameUpdateHandler: gameUpdateHandler,
  }}>{props.children}</AuthContext.Provider>;
};

export default AuthContext;
