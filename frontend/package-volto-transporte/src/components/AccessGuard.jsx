import React from 'react';
import { Redirect } from 'react-router-dom';
import { Loader, Message } from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import useUser from '@plone/volto/hooks/user/useUser';

const AccessGuard = ({ component: Component, roles = [], ...props }) => {
  const user = useUser();
  const authenticated = useSelector((state) => Boolean(state.userSession?.token));

  if (!authenticated) {
    return <Redirect to="/login" />;
  }
  if (!user) {
    return <Loader active inline="centered" />;
  }

  const allowed = roles.length === 0 || roles.some((role) => user.roles?.includes(role));
  if (!allowed) {
    return <Message negative>Você não tem permissão para acessar esta página.</Message>;
  }
  return <Component {...props} />;
};

export default AccessGuard;
