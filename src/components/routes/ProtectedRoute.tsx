import {ReactNode} from 'react';
import {Navigate} from "react-router-dom";
import {Error404} from "../pages/Error404";

type Props = {
    children: ReactNode
};
export const ProtectedRoute = ({children}: Props): JSX.Element => {
    const logged = false // Здесь должна быть реальная проверка авторизации

    return logged ? <>{children}</> : <Navigate to="/error" replace />;
};