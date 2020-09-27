import React from "react";
import PropTypes from "prop-types";
import { Box, IconButton, makeStyles, Paper } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import logoSymbolUrl from "./logo_symbol.png";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  layoutRoot: {
    position: "relative",

    "& .sidebar": {
      position: "absolute",
      left: 0,
      top: 0,
      width: 120,
      backgroundColor: theme.palette.background.default,
      paddingRight: theme.spacing(3),
      paddingTop: theme.spacing(3),
      textAlign: 'center',
      minHeight: '100vh',

        
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      }
    },

    "& .main-container": {
      position: 'absolute',
      left: 90,
      top: 0,
      width: 'calc(100% - 90px)',
      backgroundColor: theme.palette.secondary.main,
      borderTopLeftRadius: 30,
      borderBottomLeftRadius: 30,
      minHeight: '100vh',
      padding: theme.spacing(5),

      
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        left: 0,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        padding: theme.spacing(2),
      }
    },
  },
}));

const DashboardLayout = ({ children }) => {
  const classes = useStyles();

  return (
    <Box className={classes.layoutRoot}>
      <Box className={"sidebar"}>
        <Link to={"/"}>
          <IconButton>
            <img src={logoSymbolUrl} width={30} />
          </IconButton>
        </Link>
      </Box>
      <Paper elevation={10} className={"main-container"}>{children}</Paper>
    </Box>
  );
};

DashboardLayout.propTypes = {};

export default DashboardLayout;
