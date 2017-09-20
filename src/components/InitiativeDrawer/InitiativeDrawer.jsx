import React from 'react';
import render from 'react-dom';

import Monsters from '../../monsters.json';
import Monster from '../Monster/Monster.jsx';
import messageBus from '../../helpers/messageBus.js';


class InitiativeDrawer extends React.Component {
	constructor() {
		super();
		this.state = {
			combatants: {
				players: [],
				monsters: []
			},
			cr: 0
		}
		// passes the .json data of added monster
		messageBus.on('add:monster', (context) => {
			// push to our array of monsters
			this.state.combatants.monsters.push(context.data);
			// calculate total CR
			this.calculateCR();
			// update render
			this.forceUpdate();

		});

		messageBus.on('remove:monster', (context) => {
			// remove from array
			this.state.combatants.monsters.splice(context.accessKey, 1);
			// calc CR
			this.calculateCR();
			// update render
			this.forceUpdate();

		});
	}

	// calculates total CR based on Monsters in `this.state.combatants.monsters`
	calculateCR() {
		let mon = 0;
		let tempCR = 0;

		this.state.combatants.monsters.map(function(data, index) {
			// get CR from individual monsters, count monsters
			tempCR += eval(data.challenge_rating);
			mon++;
		});

		// monster multiplier
		switch(mon) {
			case 0:
			case 1:
				this.state.cr = tempCR;
				break;
			case 2:
				this.state.cr = tempCR * 1.5;
				break;
			case 3:
			case 4:
			case 5:
			case 6:
				this.state.cr = tempCR * 2;
				break;
			case 7:
			case 8:
			case 9:
			case 10:
				this.state.cr = tempCR * 2.5;
				break;
			case 11:
			case 12:
			case 13:
			case 14:
				this.state.cr = tempCR * 3;
				break;
			default: 
				this.state.cr = tempCR * 4;
				break;
		}
	}

	render() {
		return (
			<div className="InitiativeDrawer InitiativeDrawer--closed">
				<p>CR: {this.state.cr}</p>
				{this.state.combatants.monsters.map(function(data, index){
          return <Monster key={index} accessKey={index} data={data} variant='inDrawer'/>
        })}
			</div>
		);
	}
}

module.exports = InitiativeDrawer;

