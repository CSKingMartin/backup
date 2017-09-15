import React from 'react';
import render from 'react-dom';


function Card(props) {
	return (
		<div className="Card">
			{props.children}
		</div>
	);
}

module.exports = Card;