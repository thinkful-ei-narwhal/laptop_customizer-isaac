import React, { Component } from 'react';

import Summary from './Summary';
import Total from './Total';

export class Cart extends Component {
	render() {
		const { usCurrencyFormat, selected } = this.props;
		return (
			<section className='main__summary'>
				<h2>Your cart</h2>
				<Summary selected={selected} usCurrencyFormat={usCurrencyFormat} />
				<div className='summary__total'>
					<div className='summary__total__label'>Total</div>
					<div className='summary__total__value'>
						{usCurrencyFormat.format(Total(selected))}
					</div>
				</div>
			</section>
		);
	}
}

export default Cart;
