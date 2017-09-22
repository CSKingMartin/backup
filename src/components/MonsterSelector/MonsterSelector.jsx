import React from 'react';

import MonsterGrid from '../MonsterGrid/MonsterGrid.jsx';
import MonsterQueue from '../MonsterQueue/MonsterQueue.jsx';
import Monster from '../Monster/Monster.jsx';

import Monsters from '../../monsters.json';

class MonsterSelector__searchbar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			message: ''
		}
	}

	handleFilterChange(newText) {
		this.props.filter(newText.target.value);
	}

	render() {
		return ( 
			<input placeholder="Search..." type='text' onChange={this.handleFilterChange.bind(this)} />
		);
	}
}

class MonsterSelector extends React.Component {
	constructor(props) {
		super(props);
		this.monsters = [],
		this.filteredData = this.props.data,
		this.CR = 0,
		this.state = {
			drawer: 'Open',
			filter: ''
		}
	}

	// search module //

	addRemoveMonster(context, bool) {
		if(bool) { this.monsters.push(context) }
			else { this.monsters.splice(context.accessKey, 1)};

		this.calculateCR();
		this.forceUpdate();
	}

	// calculates total CR based on selected monsters
	calculateCR() {
		let mon = 0;
		let tempCR = 0;

		this.monsters.map(function(data, index) {
			// get CR from individual monsters, count monsters
			tempCR += eval(data.challenge_rating);
			mon++;
		});

		// monster multiplier
		switch(mon) {
			case 0:
			case 1:
				this.CR = tempCR;
				break;
			case 2:
				this.CR = tempCR * 1.5;
				break;
			case 3:
			case 4:
			case 5:
			case 6:
				this.CR = tempCR * 2;
				break;
			case 7:
			case 8:
			case 9:
			case 10:
				this.CR = tempCR * 2.5;
				break;
			case 11:
			case 12:
			case 13:
			case 14:
				this.CR = tempCR * 3;
				break;
			default: 
				this.CR = tempCR * 4;
				break;
		}
	}

	openCloseDrawer() {
		var initDrawer = document.querySelector('.MonsterQueue');
		var pageMain = document.querySelector('.PageShell__main');

		if (initDrawer.classList.contains('MonsterQueue--open')) {
			initDrawer.classList.remove("MonsterQueue--open");
			initDrawer.classList.add("MonsterQueue--closed");

			this.setState({
				drawer: 'Open'
			});

		} else {
			initDrawer.classList.remove("MonsterQueue--closed");
			initDrawer.classList.add("MonsterQueue--open");

			this.setState({
				drawer: 'Close'
			});
		}
	}

	handleFilterChange(text) {
		this.state.filter = text;

		let newData = [];

		this.props.data.map((data, index) => {
			let monsterName = data.name.toUpperCase();
			let search = text.toUpperCase();

			if (monsterName.indexOf(search) === -1) {
				return;
			} else {
				newData.push(data);
			}
		});

		this.filteredData = newData;

		this.forceUpdate();
	}

	render() {
		return (
			<div className="MonsterSelector">
				<div className="MonsterSelector__navbar">
					<button onClick={this.openCloseDrawer.bind(this)}>{this.state.drawer}</button>
					<MonsterSelector__searchbar filter={this.handleFilterChange.bind(this)} />
				</div>
				<div className="MonsterSelector__main">
					<MonsterGrid data={this.filteredData} cb={this.addRemoveMonster.bind(this)}/>
				</div>
				<MonsterQueue cr={this.CR}>
					{this.monsters.map((data, index) => {
						return <Monster key={index} data={data} variant="inDrawer" cb={this.addRemoveMonster.bind(this)} />
					})}
				</MonsterQueue>
			</div>
		);
	}
}

module.exports = MonsterSelector;

