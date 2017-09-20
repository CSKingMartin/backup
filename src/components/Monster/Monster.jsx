import React from 'react';
import render from 'react-dom';
import Card from '../Card/Card.jsx';
import Grid from '../Grid/Grid.jsx'

import messageBus from '../../helpers/messageBus.js';
import createClassStack from '../../helpers/createClassStack.js';

function Monster (props) {

	const classStack = createClassStack([
    'Monster', 
    `Monster--${props.variant}`
  ]);

	function handleClick(props, bool) {
		// yes we are adding
		if(bool) { messageBus.emit('add:monster', props); }
		// no we are not
			else { messageBus.emit('remove:monster', props); };
	}

	return (
		<div accessKey={props.index} className={classStack}>
			<Card>
				<h3 className="Monster__name">
					{props.data.name}
				</h3>
				<div className="Monster__stats">
					<div className="Monster__stats__row">
						<div>
							<h5>STR</h5>
							<p>{props.data.strength}</p>
						</div>
						<div>
							<h5>DEX</h5>
							<p>{props.data.dexterity}</p>
						</div>
						<div>
							<h5>CON</h5>
							<p>{props.data.constitution}</p>
						</div>
					</div>
					<div className="Monster__stats__row">
						<div>
							<h5>INT</h5>
							<p>{props.data.intelligence}</p>
						</div>
						<div>
							<h5>WIS</h5>
							<p>{props.data.wisdom}</p>
						</div>
						<div>
							<h5>CHA</h5>
							<p>{props.data.charisma}</p>
						</div>
					</div>
				</div>
				<button id="button--add" onClick={() => handleClick(props, true)}>ADD</button>
				<button id="button--remove" onClick={() => handleClick(props, false)}>REMOVE</button>
			</Card>
		</div>
	);
}

module.exports = Monster;