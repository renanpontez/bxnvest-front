import React from "react";
import PropTypes from "prop-types";
import { Box, CircularProgress } from "@material-ui/core";

const PageLoader = (props) => {
  return (
    <Box
      position={"absolute"}
      left={0}
      right={0}
      top={0}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      width={"100%"}
      height={"100vh"}
    >
      <CircularProgress size={50} />
          
    </Box>
  );
};

PageLoader.propTypes = {};

export default PageLoader;
