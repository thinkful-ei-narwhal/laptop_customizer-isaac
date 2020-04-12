import React, { Component } from 'react';
import Option from './Option';

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';

//List all options
class OptionList extends Component {
	render() {
		const {
			feature,
			updateFeature,
			usCurrencyFormat,
			store,
			selected,
		} = this.props;

		return store[feature].map((item) => {
			const itemHash = slugify(JSON.stringify(item));
			return (
				<Option
					key={itemHash}
					itemHash={itemHash}
					item={item}
					feature={feature}
					usCurrencyFormat={usCurrencyFormat}
					selected={selected}
					updateFeature={updateFeature}
				/>
			);
		});
	}
}
export default OptionList;
