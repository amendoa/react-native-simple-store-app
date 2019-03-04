import React, {
	Component
} from 'react';
import styled from 'styled-components/native';

import {
	Icon
} from 'src/shared/components';

import {
	Animated,
	Easing
} from 'react-native';

const Wrapper = styled(Animated.View)`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export default class SpinnerComponent extends Component {
	constructor (props) {
		super(props);
		this.state = {
			rotateAnimation: new Animated.Value(0)
		};
	}

	componentDidMount () {
		const {
			rotateAnimation
		} = this.state;

		Animated.loop(
			Animated.timing(rotateAnimation, {
				toValue: 1,
				duration: 700,
				easing: Easing.elastic(1)
			})
		).start();
	}

	render () {
		const {
			rotateAnimation
		} = this.state;


		const rotateZAnimation = rotateAnimation.interpolate({
			inputRange: [
				0, 1
			],
			outputRange: [
				'0deg',
				'360deg'
			]
		});

		return (
			<Wrapper
				style={{
					transform: [
						{
							rotateZ: rotateZAnimation
						}
					]
				}}
			>
				<Icon
					icon="spinner"
					width="32"
					height="32"
					primary
				/>
			</Wrapper>
		);
	}
}
