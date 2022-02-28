import classes from './Photo.module.css';

const Photo = (props) => {
  return (
    <img
      className={classes.photo}
      src={require('../../images/outer-space.jpg')}
      alt="Where's Wally? In outer Space"
      onClick={props.onClick}
    />
  );
};

export default Photo;
