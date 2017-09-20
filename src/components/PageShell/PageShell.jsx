import React from 'react';
import render from 'react-dom';

import InitiativeDrawer from '../InitiativeDrawer/InitiativeDrawer.jsx';


class PageShell extends React.Component {

	handleClick() {
		var initDrawer = document.querySelector('.InitiativeDrawer');
		var pageMain = document.querySelector('.PageShell__main');

		if (initDrawer.classList.contains('InitiativeDrawer--open')) {
			initDrawer.classList.remove("InitiativeDrawer--open");
			initDrawer.classList.add("InitiativeDrawer--closed");

			this.setState({
				message: 'Open'
			});

		} else {
			initDrawer.classList.remove("InitiativeDrawer--closed");
			initDrawer.classList.add("InitiativeDrawer--open");

			this.setState({
				message: 'Close'
			});
		}
	}

	constructor() {
		super();
		this.state = {
			message: 'Open'
		};
	}

	render() {
		return (
			<div className="PageShell">
				<PageShell__header onClick={() => this.handleClick()} message={this.state.message} />
				<InitiativeDrawer />
				<PageShell__main>
					{this.props.children}
				</PageShell__main>
			</div>
		)
	}

}

function PageShell__header(props) {
	return (
			<ul className="PageShell__header">
				<li>
					<button onClick={props.onClick}>{props.message}</button>
				</li>
				<li>
					<input id="search" type="text" />
				</li>
			</ul>
	);
}

function PageShell__main(props){
	return (
		<div className="PageShell__main">
			{props.children}
		</div>
	);
}



module.exports = PageShell;