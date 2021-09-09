import Home from '../containers/client/Home/Home'
import Contact from '../containers/client/Contact/Contact'
import Admin from '../containers/admin/Admin'
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
    }
];

export const adminRoutes = [
    {
        path: '/admin',
        component: Admin,
        exact: true,
      },
];
