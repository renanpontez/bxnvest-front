import React from 'react';
import { Paper, Typography, withStyles } from '@material-ui/core';

 const Card = withStyles(theme => ({
  root: {
    backgroundColor: '#3A4361',
    borderRadius: 30,
    padding: theme.spacing(3),
  }
}))(Paper);

export default ({
  title, 
  subtitle, 
  children, 
  ...cardProps
}) => (
  <Card {...cardProps}>
    {title && <Typography variant={'body1'} className={'title'}>{title}</Typography>}
    {subtitle && <Typography variant={'body2'} className={'subtitle'}>{subtitle}</Typography>}
    
    {children}
  </Card>
);
