import React, {
	Component
} from 'react';

import {
	Animated,
	StatusBar,
	Easing
} from 'react-native';

import {
	Font
} from 'expo';

import {
	Provider
} from 'react-redux';

import {
	Icon
} from 'src/shared/components';

import store from 'src/redux/store';
import Router from 'src/router';
import constants from 'src/modules/constants';
import styled from 'styled-components/native';

const quicksandBold = require('./assets/fonts/Quicksand-Bold.ttf');
const quicksandMedium = require('./assets/fonts/Quicksand-Medium.ttf');

const Wrapper = styled.SafeAreaView`
	flex: 1;
`;

const Container = styled(Animated.View)`
	flex: 1;
	background-color: ${constants.COLORS.DEFAULT};
	justify-content: center;
	align-items: center;
	position: absolute;
	width: 100%;
	height: 100%;
`;

export default class App extends Component {
	constructor (props) {
		super(props);
		this.state = {
			fontLoaded: false,
			isLoading: true,
			loading: new Animated.Value(0)
		};
	}

	async componentDidMount () {
		const {
			loading
		} = this.state;

		await Font.loadAsync({
			'quicksand-bold': quicksandBold,
			'quicksand-medium': quicksandMedium
		});

		this.setState({
			fontLoaded: true
		});

		Animated.timing(loading, {
			toValue: 1,
			duration: 700,
			useNativeDriver: true,
			easing: Easing.ease,
		}).start(() => {
			this.setState({
				isLoading: false
			});
		});
	}

	render () {
		const {
			fontLoaded,
			loading,
			isLoading
		} = this.state;

		return (
			<Wrapper>
				<StatusBar
					translucent={false}
					backgroundColor={constants.COLORS.DEFAULT}
					barStyle="dark-content"
				/>

				{
					fontLoaded && (
						<Provider
							store={store}
						>
							<Router />
						</Provider>
					)
				}
				{
					isLoading && (
						<Container
							style={{
								opacity: loading.interpolate({
									inputRange: [0, 1],
									outputRange: [1, 0]
								})
							}}
						>
							<Animated.View
								style={{
									transform: [
										{
											scale: loading.interpolate({
												inputRange: [0, 1],
												outputRange: [1, 5]
											})
										}
									],
									opacity: loading.interpolate({
										inputRange: [0, 1],
										outputRange: [1, 0]
									})
								}}
							>
								<Icon
									icon="loading-bag"
									width={160}
									height={160}
									default
								/>
							</Animated.View>
						</Container>
					)
				}
			</Wrapper>
		);
	}
}
