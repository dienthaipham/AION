import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components';
import { ABOUT_ROUTES, MAIN_ROUTES } from './constants/routes';
import './App.scss';

const App = () => {
    return (
        <BrowserRouter>
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
        </BrowserRouter>
    );
};

export default App;
