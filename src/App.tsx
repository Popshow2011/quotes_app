import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    height: "100vh",
    width: "100%",
  },
});

const App: React.FC = () => {
  const classes = useStyles();
  return <div className={classes.root}></div>;
};

export default App;
