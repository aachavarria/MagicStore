/*
 *Module depencencies
*/

//import React from 'react';
//import ReactDOM from 'react-dom';

export default class FilterItem extends React.Component {
	render(){
		return <div className="checkbox"> 
			<label> <input type="checkbox"/>{this.props.name}</label> 
		</div>
	}
	
}