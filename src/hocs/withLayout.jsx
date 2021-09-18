import React from 'react';
import { Route } from 'react-router';

const withLayout = WrappedComponent => {
  return ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={routeProps => (
        
        <WrappedComponent>
          <Component {...routeProps} scroll={rest.scroll}/>
        </WrappedComponent>
      )}
    />
  );
};

export default withLayout;