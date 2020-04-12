import React, { Component } from 'react';

export class Summary extends Component {
	render() {
		const { selected, usCurrencyFormat } = this.props;
		return Object.keys(selected).map((feature, idx) => {
			const featureHash = feature + '-' + idx;
			const selectedOption = selected[feature];

			return (
				<div className='summary__option' key={featureHash}>
					<div className='summary__option__label'>{feature} </div>
					<div className='summary__option__value'>{selectedOption.name}</div>
					<div className='summary__option__cost'>
						{usCurrencyFormat.format(selectedOption.cost)}
					</div>
				</div>
			);
		});
	}
}

export default Summary;
