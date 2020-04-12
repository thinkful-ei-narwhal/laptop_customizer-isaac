import React, { Component } from 'react';
import OptionList from './OptionList';

//List all features with their repective options
class FeutureList extends Component {
	render() {
		const { updateFeature, usCurrencyFormat, store, selected } = this.props;
		return Object.keys(store).map((feature, idx) => {
			const featureHash = feature + '-' + idx;

			return (
				<fieldset className='feature' key={featureHash}>
					<legend className='feature__name'>
						<h3>{feature}</h3>
					</legend>
					<OptionList
						feature={feature}
						store={store}
						usCurrencyFormat={usCurrencyFormat}
						updateFeature={updateFeature}
						selected={selected}
					/>
				</fieldset>
			);
		});
	}
}

export default FeutureList;
