/*
 *Module depencencies
*/

//import React from 'react';
//import ReacthOM from 'react-dom';
import CardRow from './CardRow';

export default class CardTable extends React.Component {
	render(){
		let cardList = this.props.cards.map(( card =>{
			return <CardRow key={card[0].id} name={card[0].name} />
		}))
		return <table>
				<thead>
					<tr>
						<th>Title</th>
						<th>Set</th>
						<th>Type</th>
						<th>P/T</th>
						<th>Rarity</th>
						<th>Stock</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>{cardList}</tbody>
		</table>
	}
	
}