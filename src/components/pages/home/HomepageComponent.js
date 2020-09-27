import React from "react";
import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import logoUrl from "./logo.png";
import { useHistory } from "react-router-dom";
import Button from "../../_shared/components/Button";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

const useStyles = makeStyles((theme) => ({
  homeRoot: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
    backgroundColor: theme.palette.background.default,
    color: "#FFF",
    textAlign: "center",
    paddingTop: theme.spacing(5),
  },
}));

const HomepageComponent = (props) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Box className={classes.homeRoot}>
      <Grid container justify={"center"}>
        <Grid item xs={12} md={4}>
          <Box py={2}>
            <Typography variant={"h1"}>Welcome to bxnvest!</Typography>
            <Typography variant={"subtitle"}>
              This is the prototype of your new level of investment!
            </Typography>
          </Box>
          <Box p={5}>
            <img src={logoUrl} width={"100%"} />
          </Box>

          <Button
            variant={"contained"}
            color={"primary"}
            className={""}
            size={"small"}
            onClick={() => history.push("/app")}
          >
            ACCESS PROTOTYPE <PlayArrowIcon/>
          </Button>
        </Grid>
      </Grid>
          
    </Box>
  );
};

export default HomepageComponent;
