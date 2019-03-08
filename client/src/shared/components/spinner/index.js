import React, {
	Component
} from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

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
			rotateAnimation: new Animated.Value(0),
			percentage: 0
		};
	}

	componentDidMount () {
		this.startStopAnimation();
	}

	componentDidUpdate () {
		this.startStopAnimation();
	}

	startStopAnimation = () => {
		const {
			isLoading
		} = this.props;

		const {
			rotateAnimation
		} = this.state;

		if (isLoading) {
			this.runLoopAnimation();
		} else {
			rotateAnimation.stopAnimation();
		}
	}

	runLoopAnimation = () => {
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

	setPercentage = (percentage) => {
		this.setState({
			percentage
		});
	}

	render () {
		const {
			rotateAnimation,
			percentage
		} = this.state;

		const {
			isLoading,
			defaultPercentage
		} = this.props;

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
					percentage={isLoading ? defaultPercentage : percentage}
				/>
			</Wrapper>
		);
	}
}

SpinnerComponent.defaultProps = {
	isLoading: false,
	defaultPercentage: 30
};

SpinnerComponent.propTypes = {
	isLoading: PropTypes.bool,
	defaultPercentage: PropTypes.number
};
