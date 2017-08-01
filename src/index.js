import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import Home from './Home';
import Review from './Review';
import About from './About';
import Contact from './Contact';
import { Router, Route, browserHistory} from 'react-router';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
	<Router history={browserHistory}>
	<Route path="/" component={App}>
	<Route path="/" component={Home}>
	<Route path="/review" component={Review}/>
	<Route path="/about" component={About}/>
	<Route path="/contact" component={Contact}/>
	
	</Route>
	</Route>
	</Router>
	), document.getElementById('root')) ;
registerServiceWorker();
