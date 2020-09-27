import { Box, Grid, Typography } from '@material-ui/core';
import React from 'react';

const CardListDetails = ({ items }) => (
  <Grid container>
    {items.map((item, i) => (
      <Grid key={i} item xs={6} md={3}>
        <Box minHeight={100} py={2}>
          <Typography variant={"body2"}>{item.label}</Typography>
          <Typography variant={"body1"}>{item.value}</Typography>
        </Box>
      </Grid>
    ))}
  </Grid>
);

export default CardListDetails;