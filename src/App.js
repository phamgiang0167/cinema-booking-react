import './App.css';
import { Route, Switch } from 'react-router-dom';
import { Router } from 'react-router'
import PageNotFound from 'containers/shared/PageNotFound/PageNotFound';
import { adminRoutes, clientRoutes } from 'routes';
import ClientLayout from "layouts/ClientLayout"
import AdminLayout from "layouts/AdminLayout"
import { createBrowserHistory } from 'history'
export const history = createBrowserHistory()
function App() {
  const renderRoutes = (routes, Layout) => {
    return routes.map((route, index) => {
      const { path, component, exact, scroll } = route;
      return (
        <Layout
          key={index}
          path={path}
          component={component}
          exact={exact}
          scroll={scroll}
        />
      );
    });
  };

  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          {renderRoutes(clientRoutes, ClientLayout)}
          {renderRoutes(adminRoutes, AdminLayout)}
          <Route path="*" component={PageNotFound} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
