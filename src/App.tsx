<<<<<<< HEAD
import React, {useState} from 'react';
import styles from "./components/Site.module.css";
import {PageOne} from "./components/pages/PageOne";
import {PageTwo} from "./components/pages/PageTwo";
import {PageThree} from "./components/pages/PageThree";
import {Link, Navigate, NavLink, Route, Routes} from "react-router-dom";
import {Error404} from "./components/pages/Error404";
import styled from 'styled-components'
import {s} from './components/pages/_styles'

function App() {
    const PATH = {
        PAGE1: '/page1',
        PAGE2: '/page2',
        PAGE3: '/page3',
        ERROR: '/error404'
    }
    return (
        <div>

            <s.Header>Header</s.Header>
            <s.Body>
                <s.Nav>
                    Здесь будет навигация
                    <s.NavWrapper><NavLink to={PATH.PAGE1}>
                                Page One
                        </NavLink></s.NavWrapper>
                    <s.NavWrapper><NavLink to={PATH.PAGE2}>
                                Page Two
                    </NavLink></s.NavWrapper>
                            <s.NavWrapper><NavLink to={PATH.PAGE3}>
                                Page Three</NavLink></s.NavWrapper>
                </s.Nav>
                <s.Content>
                    Здесь будут кроссовки
                    <Routes>
                        <Route path="/" element={<Navigate to={PATH.PAGE1}/>}/>
                        <Route path={PATH.PAGE1} element={<PageOne/>}/>
                        <Route path={PATH.PAGE2} element={<PageTwo/>}/>
                        <Route path={PATH.PAGE3} element={<PageThree/>}/>
                        <Route path={PATH.ERROR} element={<Error404/>}/>
                        <Route path = "/*" element={<Navigate to={PATH.ERROR}/>} />
                    </Routes>

                </s.Content>/
            </s.Body>
            <s.Footer>abibas 2023</s.Footer>
        </div>

    );
}


export default App;
import React from 'react';
import {Navigate, NavLink, Route, Routes} from 'react-router-dom';
import {Error404} from "./components/pages/Error404";
import {Adidas} from "./components/pages/Adidas";
import {PageTwo} from "./components/pages/PageTwo";
import {PageThree} from "./components/pages/PageThree";
import styles from "./components/Site.module.css";
import {S} from './components/pages/_styles';


const PATH = {
    PAGE1: '/adidas',
    PAGE2: '/puma',
    PAGE3: '/abibas',
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

                </div>
                <div className={styles.content}>
                    <Routes>
                        <Route path={'/'} element={<Navigate to={'/adidas'}/>}/>

                        <Route path={PATH.PAGE1} element={<Adidas/>}/>
                        <Route path={PATH.PAGE2} element={<PageTwo/>}/>
                        <Route path={PATH.PAGE3} element={<PageThree/>}/>

                        <Route path={'/*'} element={<Error404/>}/>
                    </Routes>
                </div>
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
}

export default App;
 //(Add images for Adidas component)
