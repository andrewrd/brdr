import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import Login from './Components/login.js';
import './index.css';
import { BrowserRouter, Match} from 'react-router';

const Root = () => {
	
	return (
		<BrowserRouter>
			<div>
				<Match exactly pattern="/" component={Login} />
				<Match pattern="/app" component={App}/>
			</div>
		</BrowserRouter>
	)
}

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
