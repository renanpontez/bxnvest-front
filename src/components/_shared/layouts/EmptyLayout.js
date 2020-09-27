import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Box } from '@material-ui/core';

const EmptyLayout = ({
  children
}) => {
  return (
    <>{children}</>
  );
}

EmptyLayout.propTypes = {

}

export default EmptyLayout;