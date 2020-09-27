import React from "react";
import UpIcon from "@material-ui/icons/ExpandLess";
import DownIcon from "@material-ui/icons/ExpandMore";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";

const StatementComponent = ({ statement }) => {
  if (statement.length === 0) {
    return <Typography variant={'body2'}>You haven't made any transactions yet.</Typography>;
  }

  return (
    <>
      <List dense>
        {statement.map((item) => (
          <ListItem>
            <ListItemIcon>
              {item.type === "IN" ? (
                <UpIcon style={{ color: "green" }} />
              ) : (
                <DownIcon style={{ color: "red" }} />
              )}
            </ListItemIcon>
            <ListItemText
              primary={item.data.symbol}
              secondary={`$ ${item.data.amount.toFixed(2)}`}
            />
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default StatementComponent;
