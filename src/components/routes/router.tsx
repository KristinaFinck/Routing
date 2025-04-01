import * as React from "react";
import {
    createBrowserRouter, Navigate, Outlet, RouteObject
} from "react-router-dom";
import App from "../../App";
import {Error404} from "../pages/Error404";
import {Adidas} from "../pages/Adidas";
import {Puma} from "../pages/Puma";
import {Abibas} from "../pages/Abibas";
import {Prices} from "../pages/Prices";
import {Model} from "../pages/Model";
import {ProtectedPage} from "../pages/ProtectedPage";
import {Login} from "../pages/Login";

export const PATH = {
    LOGIN: '/login',
    ADIDAS: '/adidas',
    PUMA: '/puma',
    ABIBAS: '/abibas',
    PRICES: '/prices',
    MODEL: '/:model/:id',
    PROTECTED_PAGE: '/protected_page',
    ERROR: '/error'
} as const;
export const publicRoutes:RouteObject[] = [
        {
            path: PATH.LOGIN,
            element: <Login />
        },
    // ✅ Редирект с корня на страницу Adidas
    {
        index: true, // означает путь "/"
        element: <Navigate to={PATH.ADIDAS} replace/>
},
{
    path: PATH.ADIDAS,
        element: <Adidas/>,
},
{
    path: PATH.PUMA,
        element: <Puma/>,
},
{
    path: PATH.ABIBAS,
        element: <Abibas/>,
},
{
    path: PATH.PRICES,
        element: <Prices/>,
},
{
    path: PATH.MODEL,
        element: <Model/>
},

{
    path: PATH.ERROR,
        element: <Error404/>
},
    {
        path: "*",
        element: <Error404 />,
    },

];
export const privateRoutes:RouteObject[] = [
    {
        path: PATH.PROTECTED_PAGE,
        element: (
                <ProtectedPage/>
        )
    },];
export const PrivateRoutes = () => {
    const isAuth = true // Здесь должна быть реальная проверка авторизации

    return isAuth ? <Outlet /> : <Navigate to='/login' />;
};
export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <Navigate to={PATH.ERROR}/>,
        // errorElement: <Error404 />,
        children: [
            {
                element: <PrivateRoutes />,
                children: privateRoutes,
            },
            ...publicRoutes, // ⬅ Вставляем публичные маршруты

        ],
    }]
);

