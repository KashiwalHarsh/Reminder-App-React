import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ThemeContextProvider from './pages/context/ThemeContextProvider';
import BackgroundContextProvider from './pages/context/BackgroundContextProvider';
import ReminderContextProvider from './pages/context/ReminderContextProvider';
import LoginContextProvider from './pages/context/LoginContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeContextProvider>
        <BackgroundContextProvider>
            <ReminderContextProvider>
                <LoginContextProvider>
                    <App />
                </LoginContextProvider>
            </ReminderContextProvider>
        </BackgroundContextProvider>
    </ThemeContextProvider>
);

