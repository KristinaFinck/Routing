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
