import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import AuthUserContext from './AuthUserContext';
import { firebase } from '../../firebase';
import * as routes from '../../constants/routes';

const withAuthorization = (authCondition) => (Component) => {
  const WithAuthorization = (props) => {
    useEffect(() => {
      firebase.auth.onAuthStateChanged((authUser) => {
        if (!authCondition(authUser)) {
          props.navigate(routes.LANDING);
        }
      });
    }, []);

    const navigate = useNavigate();

    return (
      <AuthUserContext.Consumer>
        {(authUser) =>
          authUser ? (
            <Component authUser={authUser} navigate={navigate} {...props} />
          ) : null
        }
      </AuthUserContext.Consumer>
    );
  };

  WithAuthorization.propTypes = {
    navigate: PropTypes.object.isRequired,
  };

  return WithAuthorization;
};

export default withAuthorization;
