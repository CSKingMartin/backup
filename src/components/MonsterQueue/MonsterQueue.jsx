import React from 'react';
import render from 'react-dom';

import Monsters from '../../monsters.json';
import Monster from '../Monster/Monster.jsx';
import messageBus from '../../helpers/messageBus.js';


class MonsterQueue extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			cr: this.props.cr
		};
	}

	componentWillReceiveProps(nextProps) {
	  this.setState({ cr: nextProps.cr });  
	}

	render() {
		return (
			<div className="MonsterQueue MonsterQueue--closed">
				<p>CR: {this.state.cr || 0}</p>
				{this.props.children}
			</div>
		);
	}
}

module.exports = MonsterQueue;

