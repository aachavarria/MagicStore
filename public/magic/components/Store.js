/*
 *Module depencencies
*/

//import React from 'react';
//import ReactDOM from 'react-dom';

import TableContent from './stock/TableContent';
import FilterList from './filter/FilterList';

export default class Store extends React.Component{
	render(){
		let filters = [
			{"colors": ["white","red","green","black","blue"],
			"rarity": ["rare","common","uncommon"],
			"set": ["set1","set2","set3","set4","set5"]}
		];

		return <div>
			<TableContent url="https://api.deckbrew.com/mtg/cards" />
			<FilterList filters={filters}/>
		</div>
	}

}