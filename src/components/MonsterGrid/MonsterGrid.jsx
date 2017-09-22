import React from 'react';
import render from 'react-dom';

import Monster from '../Monster/Monster.jsx';
import InitiativeDrawer from '../InitiativeDrawer/InitiativeDrawer.jsx';


class MonsterGrid extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			searchText: ''
		}
	}

	handleClick(context, bool) {
		this.props.cb(context, bool);
	}

	shouldComponentUpdate(nextProps) {
    return nextProps.data !== this.props.data;
   }

	render() {
		return (
			<div className="MonsterGrid">
				{this.props.data.map((data, index) => {
					return <Monster key={index} data={data} cb={this.handleClick.bind(this)}/>
				})}
			</div>
		);
	}
}

module.exports = MonsterGrid;

