import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

function switchTimeZone() {
    ReactDOM.render(<App updateTimeZones={switchTimeZone}/>, document.getElementById('root'));
};
switchTimeZone()
// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

