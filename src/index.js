import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <div className='app'>
      <h1 className='head1'>My Contacts</h1>
      <App></App>
    </div>
);

