// import Home from '../containers/client/Home/Home'
import Contact from '../containers/client/Contact/Contact'
import Admin from '../containers/admin/Admin'
import {lazy} from 'react'
const MovieDetails = lazy(() => import('../containers/client/MovieDetails/MovieDetails'))
const Checkout = lazy(() => import('../containers/client/Checkout/Checkout'))
const Login = lazy(() => import('../containers/client/Login/Login'))
const Home = lazy(() => import('../containers/client/Home/Home'))
export const clientRoutes = [
    {
        path: '/',
        component: Home,
        exact: true,
    },
    {
      path: '/contact',
      component: Contact,
      exact: true,
    },
    {
      path: '/details/:id',
      component: MovieDetails,
      exact: true
    },
    {
      path: '/checkout/:id',
      component: Checkout,
      exact: true
    },
    {
      path: '/login',
      component: Login,
      exact: true
    }

];

export const adminRoutes = [
    {
        path: '/admin',
        component: Admin,
        exact: true,
      },
];
