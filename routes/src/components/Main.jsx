import PropTypes from "prop-types";

const Main = (props) => {
  console.log(props);
  return <main>{props.children}</main>;
};

export default Main;

Main.propTypes = {
  children: PropTypes.element,
};
