/*
 *Module depencencies
*/

//import React from 'react';
//import ReactDOM from 'react-dom';
import CardImage from './CardImage';

export default class CardRow extends React.Component{
	constructor(props){
		super(props);
		this.state={showImage:false};
	}

	onMouseEnter(ev){
		this.setState({showImage:true});
	}

	onMouseOut(ev){
		this.setState({showImage:false});
	}

	render(){
		return <tr>
			<td>
				<a href="#" onMouseEnter={this.onMouseEnter.bind(this)} onMouseOut={this.onMouseOut.bind(this)} > {this.props.name} </a>
				{this.state.showImage &&
			        <CardImage imageUrl="https://image.deckbrew.com/mtg/multiverseid/259715.jpg" />
			    }	
			</td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
	}

}