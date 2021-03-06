import React from "react";
import { Typography, makeStyles, Link } from "@material-ui/core";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://www.beautifulrevolution.com.au/">
        The Beautiful Revolution
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Typography
        variant="h6"
        align="center"
        color="textSecondary"
        component="p"
      >
        Built Using React, Mongo, Express, Node and Material UI
      </Typography>
      <Copyright />
    </footer>
  );
}

export default Footer;
