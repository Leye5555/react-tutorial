import PropTypes from "prop-types";

const Button = (props) => {
  return <button>{props.text}</button>;
};

export default Button;

Button.propTypes = {
  text: PropTypes.string,
};
