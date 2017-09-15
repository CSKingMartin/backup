import React from 'react';
import render from 'react-dom';
import Card from '../Card/Card.jsx';
import Grid from '../Grid/Grid.jsx'

import Monsters from '../../monsters.json';


function Monster(props) {
	return (
		<div className="Monster">
			<Card>
				<h3 key={props.index} className="Monster__name">
					{props.name}
				</h3>
				<div className="Monster__stats">
					<div className="Monster__stats__row">
						<div>
							<h5>STR</h5>
							<p>{props.stats.str}</p>
						</div>
						<div>
							<h5>DEX</h5>
							<p>{props.stats.dex}</p>
						</div>
						<div>
							<h5>CON</h5>
							<p>{props.stats.con}</p>
						</div>
					</div>
					<div className="Monster__stats__row">
						<div>
							<h5>INT</h5>
							<p>{props.stats.int}</p>
						</div>
						<div>
							<h5>WIS</h5>
							<p>{props.stats.wis}</p>
						</div>
						<div>
							<h5>CHA</h5>
							<p>{props.stats.cha}</p>
						</div>
					</div>
				</div>
			</Card>
		</div>
	);
}

class MonsterList extends React.Component {
	MonsterFactory(data) {
		const list = data.map(function(monster, index) {
			const monsterData = {
				"name": data[index].name,
				"index": index,
				"stats": {
					"str": data[index].strength,
					"dex": data[index].dexterity,
					"con": data[index].constitution,
					"int": data[index].intelligence,
					"wis": data[index].wisdom,
					"cha": data[index].charisma,
				}
			}
			return( 
				<Monster name={monsterData.name} key={monsterData.index} stats={monsterData.stats} />
			);
		});
		
		return list;
	};

	render() {
		return (
			<Grid>
				{this.MonsterFactory(Monsters)}
			</Grid>
		);
	}
}

module.exports = MonsterList;