
import classes from './HeaderCharacters.module.css';

const HeaderCharacters = (props) => {
  return (
    <h3
      className={
        classes[
          props.character.hasBeenFound
            ? props.character.name + '-found'
            : props.character.name
        ]
      }
    >
      {props.character.name}
    </h3>
  );
};
export default HeaderCharacters;
