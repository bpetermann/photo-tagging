import React, { useContext } from 'react';
import classes from './Header.module.css';
import HeaderCharacters from './HeaderCharacters';
import AuthContext from '../../store/auth-context';

const Header = () => {
  const ctx = useContext(AuthContext);

  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <h1>Photo Tagging App</h1>
        {ctx.characters.map((item) => (
          <HeaderCharacters key={item.name} character={item} />
        ))}
      </div>
    </div>
  );
};

export default Header;
