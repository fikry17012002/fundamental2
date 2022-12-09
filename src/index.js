import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import CatatanApp from './components/CatatanApp';
 
import './styles/style.css'; 

const root = createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
    <CatatanApp />
</BrowserRouter>
);