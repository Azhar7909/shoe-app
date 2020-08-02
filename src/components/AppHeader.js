import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  Link: {
    color: 'white',
    textDecorationLine: 'none',
    marginRight: '10px'
  },
}));

export default function AppHeader() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Shoe Shop
          </Typography>
          <Link to="/" className={classes.Link}>DashBoard</Link>
          <Link to="/ProductScreen" className={classes.Link}>Product</Link>
          <Link to="/AboutScreen" className={classes.Link}>About</Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
