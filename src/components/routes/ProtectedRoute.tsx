import {ReactNode} from 'react';
import {Navigate} from "react-router-dom";
import {Error404} from "../pages/Error404";

type Props = {
    children: ReactNode
};
//  Убрала экспорт ,потому что вместо этой переменной использую  PrivateRoutes
 const ProtectedRoute = ({children}: Props): JSX.Element => {
    const logged = true // Здесь должна быть реальная проверка авторизации

    return logged ? <>{children}</> : <Navigate to='/login' />;
};
