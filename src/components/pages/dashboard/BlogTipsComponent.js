import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  blogRoot: {

  }
}));

const BlogTipsComponent = () => {
  const classes = useStyles();

  return (
    <>
      <List className={classes.blogRoot}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="stock" src="https://g.foolcdn.com/editorial/images/506661/gettyimages-523155194.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Stock market: do you know it?"
            secondary={"The best tips to avoid mistakes with stock market..."}
          />
        </ListItem>
        <Divider variant="inset" component="li" />

        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="bitcoin" src="https://s3.criptofacil.com/wp-content/uploads/2020/09/famoso-investidor-esta-muito-otimista-sobre-bitcoin.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Why this coin is so strong?"
            secondary={"We talked with several investors to master Bitcoin and..."}
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="bitcoin" src="https://responsive.fxempire.com/cover/1845x1230/webp-lossy-70.q50/_fxempire_/2020/03/Stocks-Up.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Free course!"
            secondary={"We have great news for you! We have made a partnershi..."}
          />
        </ListItem>
      </List>
    </>
  );
};

export default BlogTipsComponent;
