import Home from '../containers/client/Home/Home'
import Admin from '../containers/admin/Admin'
export const clientRoutes = [
    {
        path: '/',
        component: Home,
        exact: true,
      },
];

export const adminRoutes = [
    {
        path: '/admin',
        component: Admin,
        exact: true,
      },
];
