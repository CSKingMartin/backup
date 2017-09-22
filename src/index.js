import React from 'react';
import ReactDOM from 'react-dom';

//data
import Monsters from './monsters.json';
import InitiativeStarter from './components/InitiativeStarter/InitiativeStarter.jsx';

//React Components
import PageShell from './components/PageShell/PageShell.jsx';
import MonsterSelector from './components/MonsterSelector/MonsterSelector.jsx';

const requireAll = (context) => context.keys().map(context);

//requires all css
requireAll(require.context('./components/', true, /\.css$/));

ReactDOM.render(
	<div>
		<PageShell>
			<InitiativeStarter>
				<MonsterSelector data={Monsters} />
			</InitiativeStarter>
		</PageShell>
	</div>,

	document.getElementById('page')
)
