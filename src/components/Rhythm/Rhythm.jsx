import React from 'react';
import render from 'react-dom';


function Rhythm(props) {
	return (
		<div className="Rhythm">
			{props.children}
		</div>
	);
}

module.exports = Rhythm;