import React, {
	Component
} from 'react';

import {
	View,
	Text
} from 'react-native';

import {
	Font
} from 'expo';

import {
	Provider
} from 'react-redux';

import store from 'src/redux/store';
import Router from 'src/router';

const quicksandBold = require('./assets/fonts/Quicksand-Bold.ttf');

export default class App extends Component {
	constructor (props) {
		super(props);
		this.state = {
			fontLoaded: false
		};
	}

	async componentDidMount () {
		await Font.loadAsync({
			'quicksand-bold': quicksandBold
		});

		this.setState({
			fontLoaded: true
		});
	}

	render () {
		const {
			fontLoaded
		} = this.state;

		// TODO: loading screen
		if (!fontLoaded) {
			return (
				<View>
					<Text>
						{
							'loading ...'
						}
					</Text>
				</View>
			);
		}

		return (
			<Provider
				store={store}
			>
				<Router />
			</Provider>
		);
	}
}
