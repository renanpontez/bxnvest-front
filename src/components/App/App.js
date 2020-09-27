import React from "react";
import { BrowserRouter, HashRouter } from "react-router-dom";
import Routes from "./Routes";
import { ThemeProvider, Box, makeStyles } from "@material-ui/core";
import { mainTheme } from "../_shared/theme/main";

const useStyles = makeStyles(() => ({
  root: {
    "& h1": {
      margin: 0,
    },
  },
}));

const App = (props) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <ThemeProvider theme={mainTheme}>
        <HashRouter basename='/'>
          <Routes />
        </HashRouter>
      </ThemeProvider>
    </Box>
  );
};

export default App;
