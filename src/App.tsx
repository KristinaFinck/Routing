import React from 'react';
import {NavLink, Outlet} from 'react-router-dom';
import styles from "./components/Site.module.css";
import {S} from './components/pages/_styles';
import {PATH} from './components/routes/router'


function App() {
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <S.NavWrapper><NavLink to={PATH.ADIDAS}>adidas</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PUMA}>puma</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.ABIBAS}>abibas</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PRICES}>цены для оптовиков</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PROTECTED_PAGE}>ProtectedPage</NavLink></S.NavWrapper>
                </div>
                <div className={styles.content}>
                    <Outlet />
                    {/*<Routes>*/}
                    {/*    <Route path={'/'} element={<Navigate to={'/adidas'}/>}/>*/}

                    {/*    <Route path={PATH.PAGE1} element={<Adidas/>}/>*/}
                    {/*    <Route path={PATH.PAGE2} element={<Puma/>}/>*/}
                    {/*    <Route path={PATH.PAGE3} element={<Abibas/>}/>*/}
                    {/*    <Route path={PATH.PAGE_PRISES} element={<Prices/>} />*/}
                    {/*    <Route path={'/:model/:id'} element={<Model/>}/>*/}


                    {/*    <Route path={'/*'} element={<Error404/>}/>*/}
                    {/*    <Route path={'/model/*'} element={<Error404/>}/>*/}
                    {/*</Routes>*/}
                </div>
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
}

export default App;
 //(Add images for Adidas component)
