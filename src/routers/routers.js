import { lazy } from 'react';

const routers = [
    {
        path: '/',
        component: lazy(() => import('@components/Hompage/HomePage'))
    },
    {
        path: '/blog',
        component: lazy(() => import('@components/Blog/Blog'))
    }
];
export default routers;
