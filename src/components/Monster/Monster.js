import React from 'react';
import render from 'react-dom';

import Monsters from '../../monsters.json';

var Monster = React.createClass({
	render: function() {
		return(
			<ul>
				{Monsters.map(function(monster, index) {
					return <div key={index}>
						<p>{monster.name}</p>
						<p>{monster.size}</p>
						<p>{monster.type}</p>
						<p>{monster.alignment}</p>
						<p>{monster.hit_points}</p>
						<p>{monster.hit_dice}</p>
						<p>{monster.speed}</p>
						<div className="stats">
							<p>{monster.strength}</p>
							<p>{monster.dexterity}</p>
							<p>{monster.constitution}</p>
							<p>{monster.intelligence}</p>
							<p>{monster.wisdom}</p>
							<p>{monster.charisma}</p>
						</div>
					</div>
				})}
			</ul>
		)
	}
});

module.exports = Monster;