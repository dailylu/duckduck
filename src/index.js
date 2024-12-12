import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import App from './App';
import { BrowserRouter } from 'react-router';


const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
  <>
    {/* 페이지 이동 */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* 페이지 이동 */}
  </>
);