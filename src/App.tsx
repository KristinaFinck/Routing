import React from 'react';
import {Navigate, NavLink, Route, Routes, Outlet} from 'react-router-dom';
import {Error404} from "./components/pages/Error404";
import {Adidas} from "./components/pages/Adidas";
import {Puma} from "./components/pages/Puma";
import {Abibas} from "./components/pages/Abibas";
import styles from "./components/Site.module.css";
import {S} from './components/pages/_styles';
import {Model} from "./components/pages/Model";
import {Prices} from "./components/pages/Prices";


const PATH = {
    PAGE1: '/adidas',
    PAGE2: '/puma',
    PAGE3: '/abibas',
    PAGE_PRISES: '/prices'
} as const;

function App() {
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <S.NavWrapper><NavLink to={PATH.PAGE1}>adidas</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PAGE2}>puma</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PAGE3}>abibas</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PAGE_PRISES}>цены для оптовиков</NavLink></S.NavWrapper>

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
