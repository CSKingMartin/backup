import React from 'react';
import ReactDOM from 'react-dom';
import Monster from './components/Monster/Monster.jsx'

const requireAll = (context) => context.keys().map(context);


//requires all css
requireAll(require.context('./components/', true, /\.css$/));
//requires all jsx
requireAll(require.context('./components/', true, /\.jsx$/));

ReactDOM.render(
	<Monster />,
	document.getElementById('page')
)
