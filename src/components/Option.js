import React, { Component } from 'react';

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';

//Display each option
export class Option extends Component {
	render() {
		const {
			item,
			itemHash,
			selected,
			feature,
			updateFeature,
			usCurrencyFormat,
		} = this.props;
		return (
			<div key={itemHash} className='feature__item'>
				<input
					type='radio'
					id={itemHash}
					className='feature__option'
					name={slugify(feature)}
					checked={item.name === selected[feature].name}
					onChange={(e) => updateFeature(feature, item)}
				/>
				<label htmlFor={itemHash} className='feature__label'>
					{item.name} ({usCurrencyFormat.format(item.cost)})
				</label>
			</div>
		);
	}
}

export default Option;
