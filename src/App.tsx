import React, {useState} from 'react';
import styles from "./components/Site.module.css";
import {PageOne} from "./components/pages/PageOne";
import {PageTwo} from "./components/pages/PageTwo";
import {PageThree} from "./components/pages/PageThree";
import {Link, Navigate, Route, Routes} from "react-router-dom";
import {Error404} from "./components/pages/Error404";


function App() {
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    Здесь будет навигация
                    <nav>
                        <ul>
                            <li><Link to="/page-one">Page One</Link></li>
                            <li><Link to="/page-two">Page Two</Link></li>
                            <li><Link to="/page-three">Page Three</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className={styles.content}>
                    Здесь будут кроссовки
                    <Routes>
                        <Route path="/" element={<PageOne/>}/>
                        <Route path="/page-two" element={<PageTwo/>}/>
                        <Route path="/page-three" element={<PageThree/>}/>
                        <Route path="/error404" element={<Error404/>}/>
                        <Route path = "/*" element={<Navigate to={"/error404"}/>} />
                    </Routes>

                </div>/
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>

    );
}


export default App;
