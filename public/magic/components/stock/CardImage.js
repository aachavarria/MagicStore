/*
 *Module depencencies
*/

//import React from 'react';
//import ReactDOM from 'react-dom';

export default class CardImage extends React.Component{
	render(){
		return <div className="cardimage">
			<img src={this.props.imageUrl} />
		</div>
	}

}