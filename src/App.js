import React, {Component} from 'react';
import './App.css';
import { CustomButton, ClearButton, ScientificModeButton } from './components/Button';
import { Button } from 'reactstrap';
import { Input } from './components/Input-section';
import * as math from 'mathjs';


class App extends Component {
	constructor(props) {
		super(props);
		this.state ={
			input           : "",
			current_theme   : 0,
			scientific_mode : false
		};
	}

	handleInputToAdd = (val) => {
		this.setState({ input: this.state.input + val });
	}

	handleEqualValue = () => {
		this.setState({ input: math.evaluate(this.state.input) });
	}

	handleSquareValue = () => {
		this.setState({ input: math.square(this.state.input) });
	}

	handleSqrtvalue = () => {
		this.setState({ input: Math.sqrt(this.state.input) });
	}

	handleSignChangeValue = () => {
		this.setState({ input: this.state.input * (-1) });
	}

	handleScientificModeAction = () => {
		this.setState({ scientific_mode: !this.state.scientific_mode })
	}

	handleTheme = (id) => {	
		this.setState({current_theme : id})
	}

	themeOperator = () => {
		if(this.state.current_theme === 0){
			return "app";
		}
		else if(this.state.current_theme === 1){
			return "app light-theme-backg"
		}
		else {
			return "app dark-theme-backg"
		}
	}

	render(){
		return (
			<div className={this.themeOperator()}>
				<div className="calculator-wrapper">
					<div className="row w-100">
						<Input themeId={this.state.current_theme} input={this.state.input} />
					</div>
					<div className="row w-100">
						<CustomButton themeId={this.state.current_theme} handleClickButton={this.handleInputToAdd}>7</CustomButton>
						<CustomButton themeId={this.state.current_theme} handleClickButton={this.handleInputToAdd}>8</CustomButton>
						<CustomButton themeId={this.state.current_theme} handleClickButton={this.handleInputToAdd}>9</CustomButton>
						<CustomButton themeId={this.state.current_theme} handleClickButton={this.handleInputToAdd}>+</CustomButton>
					</div>
					<div className="row w-100">
						<CustomButton themeId={this.state.current_theme} handleClickButton={this.handleInputToAdd}>4</CustomButton>
						<CustomButton themeId={this.state.current_theme} handleClickButton={this.handleInputToAdd}>5</CustomButton>
						<CustomButton themeId={this.state.current_theme} handleClickButton={this.handleInputToAdd}>6</CustomButton>
						<CustomButton themeId={this.state.current_theme} handleClickButton={this.handleInputToAdd}>-</CustomButton>
					</div>
					<div className="row w-100">
						<CustomButton themeId={this.state.current_theme} handleClickButton={this.handleInputToAdd}>1</CustomButton>
						<CustomButton themeId={this.state.current_theme} handleClickButton={this.handleInputToAdd}>2</CustomButton>
						<CustomButton themeId={this.state.current_theme} handleClickButton={this.handleInputToAdd}>3</CustomButton>
						<CustomButton themeId={this.state.current_theme} handleClickButton={this.handleInputToAdd}>*</CustomButton>
					</div>
					<div className="row w-100">
						<ClearButton themeId={this.state.current_theme} handleClearButton={() => this.setState({input:""})}>Clear</ClearButton>
						<CustomButton themeId={this.state.current_theme} handleClickButton={this.handleInputToAdd}>0</CustomButton>
						<CustomButton themeId={this.state.current_theme} handleClickButton={this.handleEqualValue}>=</CustomButton>
						<CustomButton themeId={this.state.current_theme} handleClickButton={this.handleInputToAdd}>/</CustomButton>
					</div>
					{this.state.scientific_mode ? 
						<div className="row w-100">
							<ScientificModeButton themeId={this.state.current_theme} handleSqurButton={this.handleSquareValue}>x<sup>2</sup></ScientificModeButton>
							<ScientificModeButton themeId={this.state.current_theme} handleSqurButton={this.handleSqrtvalue}>√</ScientificModeButton>
							<ScientificModeButton themeId={this.state.current_theme} handleSqurButton={this.handleSignChangeValue}>Sign Change</ScientificModeButton>
							
						</div> : null
					}

					<div className="row w-100 mt-4">
						<Button className="btn btn-success mr-3" onClick ={this.handleScientificModeAction}>Scientific Mode</Button>
						<Button className="btn btn-light mr-3" onClick={() => this.handleTheme(1)}>Light Theme</Button>
						<Button className="btn btn-dark" onClick={() => this.handleTheme(2)}>Dark Theme</Button>
					</div>
					<div className="row w-100 mt-4">
						<Button className="btn btn-secondary mr-3" onClick={() => this.handleTheme(0)}>Default Theme</Button>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
