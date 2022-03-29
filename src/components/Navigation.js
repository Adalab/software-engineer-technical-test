import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import * as routes from '../constants/routes';
import SignOutButton from './pages/SignOut';
import AuthUserContext from './auth/AuthUserContext';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Home from '@material-ui/icons/Home';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const Navigation = (props) => {
  let navigate = useNavigate();

  return (
    <AuthUserContext.Consumer>
      {(authUser) => (
        <NavigationAuth authUser={authUser} navigate={navigate} {...props} />
      )}
    </AuthUserContext.Consumer>
  );
};

const NavigationAuth = ({ authUser, navigate }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const close = () => setAnchorEl(null);

  const handleLink = (to) => () => {
    navigate(to);
    close();
  };

  const open = Boolean(anchorEl);
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          className="menuButton"
          color="inherit"
          aria-label="Menu"
          onClick={handleLink(routes.HOME)}
        >
          <Home />
        </IconButton>
        <Typography variant="body1" color="inherit" className="grow">
          Candidatas Adalab
        </Typography>
        <IconButton
          aria-owns={open ? 'menu-appbar' : null}
          aria-haspopup="true"
          onClick={(event) => setAnchorEl(event.currentTarget)}
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={open}
          onClose={close}
        >
          {authUser ? (
            [
              <MenuItem onClick={handleLink(routes.ACCOUNT)} key="account">
                Cuenta
              </MenuItem>,
              <MenuItem onClick={close} key="signout">
                <SignOutButton />
              </MenuItem>,
            ]
          ) : (
            <MenuItem onClick={handleLink(routes.LANDING)}>Acceder</MenuItem>
          )}
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

NavigationAuth.propTypes = {
  navigate: PropTypes.function,
  authUser: PropTypes.object,
};

export default Navigation;
