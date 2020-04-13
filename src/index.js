import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';//starting point for frontend react app
//import * as serviceWorker from './serviceWorker';

ReactDOM.render(    //render our app 
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

