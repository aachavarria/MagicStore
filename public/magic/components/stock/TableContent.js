/*
 *Module depencencies
*/

import React from 'react';
import ReactDOM from 'react-dom';
import CardTable from './CardTable';
import $ from 'jquery';

export default class TableContent extends React.Component{
	constructor(props){
		super(props);
		this.state={cardsInStock:[]};
		this.cardsInStock = [];
	}
	componentDidMount(){
		let mycards=[
			{"multiverse_id":12414},
			{"multiverse_id": 391782},
			{"multiverse_id": 43539}
		];

		mycards.map(( card =>{
			let url = this.props.url+"?multiverseid="+card.multiverse_id;
			$.ajax({
		        url: url,
		        dataType: 'json',
		        success: function(data) {
		        	this.cardsInStock.push(data);
		            this.setState({cardsInStock: this.cardsInStock});
		        }.bind(this),
		            error: function(xhr, status, err) {
		            console.error(this.props.url, status, err.toString())
		        }.bind(this)
		    });

		}))

	}
	render(){
		return <CardTable cards={this.state.cardsInStock} />
	}
	
}