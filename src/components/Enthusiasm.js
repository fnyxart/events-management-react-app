import classes from "./Enthusiasm.module.scss";

function Enthusiasm(props) {
  return (
    <div className={classes.center}>
      <h1>{props.children}</h1>
    </div>
  );
}

export default Enthusiasm;
