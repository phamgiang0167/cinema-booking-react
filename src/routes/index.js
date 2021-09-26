// import Home from '../containers/client/Home/Home'
import Admin from '../containers/admin/Admin'
import {lazy} from 'react'
const MovieDetails = lazy(() => import('../containers/client/MovieDetails/MovieDetails'))
const Checkout = lazy(() => import('../containers/client/Checkout/Checkout'))
const Login = lazy(() => import('../containers/client/Login/Login'))
const Home = lazy(() => import('../containers/client/Home/Home'))
const Register = lazy(() => import('../containers/client/Register/Register'))
const BookingHistory = lazy(() => import('../containers/client/BookingHistory/BookingHistory'))
const User = lazy(() => import('../containers/client/Personal/User'))
export const clientRoutes = [
    {
        path: '/',
        component: Home,
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
    },
    {
      path: '/register',
      component: Register,
      exact: true
    },
    {
      path: '/history',
      component: BookingHistory,
      exact: true
    },
    {
      path: '/user',
      component: User,
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
