import {ReactNode} from 'react';
import {Navigate} from "react-router-dom";

type Props = {
    children: ReactNode
};
export const ProtectedRoute = ({children}: Props): JSX.Element => {
    const logged = true // Здесь должна быть реальная проверка авторизации

    return logged ? <>{children}</> : <Navigate to={'/error'} />
};