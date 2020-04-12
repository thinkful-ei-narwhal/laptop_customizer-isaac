import React, { Component } from 'react';
import './App.css';

import FeatureList from './components/FeatureList';
import Header from './components/Header';
import Cart from './components/cart/Cart';

//Convert Numbers to US Dollas
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD',
});

class App extends Component {
	state = {
		selected: {
			Processor: {
				name: '17th Generation Intel Core HB (7 Core with donut spare)',
				cost: 700,
			},
			'Operating System': {
				name: 'Ubuntu Linux 16.04',
				cost: 200,
			},
			'Video Card': {
				name: 'Toyota Corolla 1.5v',
				cost: 1150.98,
			},
			Display: {
				name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
				cost: 1500,
			},
		},
	};

	//Update selected in state
	updateFeature = (feature, newValue) => {
		const selected = Object.assign({}, this.state.selected);
		selected[feature] = newValue;
		this.setState({
			selected,
		});
	};

	render() {
		return (
			<div className='App'>
				<Header />
				<main>
					<form className='main__form'>
						<h2>Customize your laptop</h2>

						<FeatureList
							store={this.props.store}
							usCurrencyFormat={USCurrencyFormat}
							selected={this.state.selected}
							updateFeature={this.updateFeature}
						/>
					</form>

					<Cart
						selected={this.state.selected}
						usCurrencyFormat={USCurrencyFormat}
					/>
				</main>
			</div>
		);
	}
}

export default App;
