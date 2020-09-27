import React from "react";
import { BrowserRouter } from "react-router-dom";
import { withCookies } from "react-cookie";
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
        <BrowserRouter>
          <Routes cookies={props.cookies} />
        </BrowserRouter>
      </ThemeProvider>
    </Box>
  );
};

export default withCookies(App);
