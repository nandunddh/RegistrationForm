import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


const app = ReactDOM.createRoot(document.getElementById('main'));


app.render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
);