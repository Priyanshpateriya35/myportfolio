import React from 'react';
import App from './App'
import reactDom from 'react-dom';
//import {BrowserRouter} from 'react-router-dom'
import {HashRouter} from 'react-router-dom'

reactDom.render(
<React.StrictMode>   
<HashRouter>
<App />
</HashRouter>
</React.StrictMode>,
document.getElementById("root")
);
