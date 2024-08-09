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
    return (
        <div>

            <s.Header>Header</s.Header>
            <s.Body>
                <s.Nav>
                    Здесь будет навигация
                    <s.NavWrapper><NavLink to="/page-one">
                                Page One
                        </NavLink></s.NavWrapper>
                    <s.NavWrapper><NavLink to="/page-two">
                                Page Two
                    </NavLink></s.NavWrapper>
                            <s.NavWrapper><NavLink to="/page-three">
                                Page Three</NavLink></s.NavWrapper>
                </s.Nav>
                <s.Content>
                    Здесь будут кроссовки
                    <Routes>
                        <Route path="/" element={<Navigate to={"/page-one"}/>}/>
                        <Route path="/page-one" element={<PageOne/>}/>
                        <Route path="/page-two" element={<PageTwo/>}/>
                        <Route path="/page-three" element={<PageThree/>}/>
                        <Route path="/error404" element={<Error404/>}/>
                        <Route path = "/*" element={<Navigate to={"/error404"}/>} />
                    </Routes>

                </s.Content>/
            </s.Body>
            <s.Footer>abibas 2023</s.Footer>
        </div>

    );
}


export default App;
