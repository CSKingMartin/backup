import React from 'react';
import ReactDOM from 'react-dom';

//data
import Monsters from './monsters.json';

//React Components
import Monster from './components/Monster/Monster.jsx';
import InitiativeDrawer from './components/InitiativeDrawer/InitiativeDrawer.jsx';
import PageShell from './components/PageShell/PageShell.jsx';
import Grid from './components/Grid/Grid.jsx';

const requireAll = (context) => context.keys().map(context);

//requires all css
requireAll(require.context('./components/', true, /\.css$/));

ReactDOM.render(
	<div>
		<PageShell>
			<Grid>
				{Monsters.map(function(data, index){
          return <Monster key={index} data={data} />
        })}
			</Grid>
		</PageShell>
	</div>,

	document.getElementById('page')
)
