import './App.css';
import { Route, Switch } from 'react-router-dom';
import { Router } from 'react-router';
import PageNotFound from 'containers/shared/PageNotFound/PageNotFound';
import { adminRoutes, clientRoutes } from 'routes';
import ClientLayout from 'layouts/ClientLayout';

import { createBrowserHistory } from 'history';
import Dashboard from 'containers/admin/Dashboard/Dashboard';
import Movies from 'containers/admin/Movies/Movies';
import AddMovie from 'containers/admin/Movies/AddMovie/AddMovie';
import EditMovie from 'containers/admin/Movies/EditMovie/EditMovie';
import Showtime from 'containers/admin/Showtimes/Showtime';
import Users from 'containers/admin/Users/Users';
import AdminLayout from 'layouts/AdminLayout/AdminLayout';
export const history = createBrowserHistory();
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
        <div className='App'>
            <Router history={history}>
                <Switch>
                    {renderRoutes(clientRoutes, ClientLayout)}
                    <AdminLayout path='/admin' exact Component={Dashboard} />
                    <AdminLayout path='/admin/movies' exact Component={Movies} />
                    <AdminLayout path='/admin/movies/add-movie' exact Component={AddMovie} />
                    <AdminLayout path='/admin/movies/edit/:id' exact Component={EditMovie} />
                    <AdminLayout path='/admin/showtimes' exact Component={Showtime} />
                    <AdminLayout path='/admin/users' exact Component={Users} />
                    <Route path='*' component={PageNotFound} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
