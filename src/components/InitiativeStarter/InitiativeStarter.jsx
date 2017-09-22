import React from 'react';
import render from 'react-dom';


function InitiativeStarter(props) {
	return (
		<div className="InitiativeStarter">
			{props.children}
		</div>
	);
}

module.exports = InitiativeStarter;