import React from 'react';
import render from 'react-dom';


function Grid(props) {
	return (
		<div className="Grid">
			{props.children}
		</div>
	);
}

module.exports = Grid;