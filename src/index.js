import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import AllPatients from './components/AllPatients'
import Show from './components/Show'

ReactDOM.render(
    <Router>
    <Route exact path='/' component={AllPatients}/>
    <Route exact path='/Filter' component={App}/>
    <Route path='/:day' component={Show} />

</Router>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls. Learn
// more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
