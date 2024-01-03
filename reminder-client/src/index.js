import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ThemeContextProvider from './context/ThemeContextProvider';
import BackgroundContextProvider from './context/BackgroundContextProvider';
import ReminderContextProvider from './context/ReminderContextProvider';
import LoginContextProvider from './context/LoginContextProvider';

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

