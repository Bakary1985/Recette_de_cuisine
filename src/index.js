	
import React from 'react';
import { render } from 'react-dom';

import  Connexion  from './components/connexion';
import  App  from './components/app';

import './index.css'

//Router
import { BrowserRouter, Match } from 'react-router'

//component state less
const Root = () =>{
	return(
		<BrowserRouter>
			<div>
				<Match exactly pattern='/' component={ Connexion } />,
				<Match pattern='/box/:pseudo' component={ App } />
			</div>
		</BrowserRouter>
	)
}

render(
	<Root />,
	document.getElementById('root')
)