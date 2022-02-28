import React, { useContext } from 'react';
import classes from './GameUpdate.module.css';
import AuthContext from '../../store/auth-context';

const GameUpdate = () => {
  const ctx = useContext(AuthContext);
  let style = classes.gamestats;

  return (
    <div
      className={`${style} ${
        ctx.gameUpdate === 'Try Again' && classes.noCharacter
      }`}
    >
      {ctx.gameUpdate}
    </div>
  );
};

export default GameUpdate;
