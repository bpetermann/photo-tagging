import React from 'react';
import classes from './HeaderCharacters.module.css';

const HeaderCharacters = (props) => {
  return (
    <div
      className={
        classes[
          props.character.hasBeenFound
            ? props.character.name + '-found'
            : props.character.name
        ]
      }
    >
      <h3>{props.character.name}</h3>
      <img
        src={require('../../images/' + props.character.name + '.png')}
        alt={props.character.name}
        className={classes[props.character.name + '-image']}
      />
    </div>
  );
};
export default HeaderCharacters;
