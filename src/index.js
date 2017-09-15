import React from 'react';
import ReactDOM from 'react-dom';

import Monster from './components/Monster/Monster.jsx';

const requireAll = (context) => context.keys().map(context);

//requires all css
requireAll(require.context('./components/', true, /\.css$/));
// requireAll(require.context('./components/', true, /\.jsx?$/));

ReactDOM.render(
	<div>
		<Monster />
	</div>,

	document.getElementById('page')
)
