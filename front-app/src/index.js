import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './css/index.css'
import App from './App';



import reportWebVitals from './reportWebVitals';
import FooterPage from './components/FooterPage';
import SocialNetWorks from './components/SocialNetworks';

ReactDOM.render(
  <div className="PageIndex">
    
    <BrowserRouter>
      <App />
      
      
    
    
  </BrowserRouter>
  </div>,
  
  document.getElementById('root'),
  
)


reportWebVitals();
