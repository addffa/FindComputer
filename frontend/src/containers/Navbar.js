import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import DevicesRoundedIcon from '@material-ui/icons/DevicesRounded';
import { Link } from "react-router-dom";
import { logout } from '../services/auth.service'

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
}));

export default function Navbar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <DevicesRoundedIcon />
          <Typography variant="h6" className={classes.title}>
            <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit' }}>
              <Button color="inherit">FindComputer</Button>
            </Link>
          </Typography>
          {!props.isAuth && (
            <>
              <Link to="/signup" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                <Button color="inherit">Signup</Button>
              </Link>
              <Link to="/login" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                <Button color="inherit">Login</Button>
              </Link>
            </>
          )}
          {props.isAuth &&
            <>
              <Link to="/items" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                <Button color="inherit">My Items</Button>
              </Link>
              <Link to="/profile" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                <Button color="inherit">Profile</Button>
              </Link>
              <Button color="inherit" onClick={() => {
                logout();
                props.setAuth(null);
                alert("Bye!")
              }}>
                Logout
            </Button>
            </>
          }
        </Toolbar>
      </AppBar>
    </div>
  );
}
