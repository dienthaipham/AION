import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer, Header } from './components';
import { ABOUT_ROUTES, MAIN_ROUTES } from './constants/routes';
import AIONYPlusPage from './pages/AIONYPlusPage';
import './App.scss';

const App = () => {
    return (
        <BrowserRouter>
            {/* <div id="app"> */}
            <Header />
            <Routes>
                {MAIN_ROUTES.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        element={route.element}
                    />
                ))}

                {ABOUT_ROUTES.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        element={route.element}
                    />
                ))}
            </Routes>
            <Footer />
            {/* </div> */}
        </BrowserRouter>
    );
};

export default App;
