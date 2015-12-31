/*
 *Module depencencies
*/

//import React from 'react';
//import ReactDOM from 'react-dom';

import SearchBar from './SearchBar';
import FilterItem from './FilterItem';

export default class FilterList extends React.Component {
	render(){

		let colors = this.props.filters[0].colors.map(function (filter) {
			return <FilterItem name={filter} />
		});

		let rarity = this.props.filters[0].rarity.map(function (filter) {
			return <FilterItem name={filter} />
		});

		let set = this.props.filters[0].set.map(function (filter) {
			return <FilterItem name={filter} />
		});

		return <div>
				<h2>Filter</h2>
				<SearchBar/>
				<div><h3>Colors</h3>
					{colors}
				</div>
				<div><h3>Rarity</h3>
					{rarity}
				</div>
				<div><h3>Set</h3>
					{set}
				</div>
		</div>
	}
}