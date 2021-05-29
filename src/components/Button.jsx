import React from 'react';
import './component.css';


const isOperator = (val) => {
	return !isNaN(val) || val === "=";
}

const themeOperator = (value) =>{
	if(value.themeId === 0){
		return "button-wrap";
	}
	else if(value.themeId === 1){
		return "button-wrap light-mode"
	}
	else {
		return "button-wrap dark-mode"
	}
}

export const CustomButton = (props) => (
	<div 
		className={`${themeOperator(props)}`} 
		onClick ={ () => props.handleClickButton(props.children)}

	>
		{props.children}
	</div>
);


export const ClearButton = (props) => (
	<div className={`${themeOperator(props)}`} onClick ={props.handleClearButton}>
		{props.children}
	</div>
);


export const ScientificModeButton = (props) => (
	<div className={`${themeOperator(props)}`} onClick ={props.handleSqurButton}>
		{props.children}
	</div>
);
