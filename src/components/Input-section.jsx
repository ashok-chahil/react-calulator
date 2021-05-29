import React from 'react';
import './component.css';

const inputSectionTheme = (value) => {
	if(value.themeId === 0){
		return "input-section";
	}
	else if(value.themeId === 1){
		return "input-section input-sec-light-mode"
	}
	else {
		return "input-section input-sec-dark-mode"
	}
}

export const Input = (props) => (
	<div className={inputSectionTheme(props)}>{props.input}</div>
);
