import {ReactNode} from 'react';
import {Navigate} from "react-router-dom";

type Props = {
    children: ReactNode
};
//  Убрала экспорт ,потому что вместо этой переменной использую  PrivateRoutes
// This component is not used because we use <PrivateRoutes> + Outlet for protected routes.
// Keeping it here just in case we want to protect individual routes in the future.

 const ProtectedRoute = ({children}: Props): JSX.Element => {
    const logged = true // Здесь должна быть реальная проверка авторизации

    return logged ? <>{children}</> : <Navigate to='/login' />;
};
