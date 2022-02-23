import classes from './Header.module.css';
import HeaderCharacters from './HeaderCharacters';

const Header = (props) => {
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <h1>Photo Tagging App</h1>
        <h2>Find:</h2>
        {props.characters.map((item) => (
          <HeaderCharacters key={item.name} character={item} />
        ))}
      </div>
    </div>
  );
};

export default Header;
