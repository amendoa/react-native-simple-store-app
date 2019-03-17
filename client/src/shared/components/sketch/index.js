import React, {
	Component
} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import constants from 'src/modules/constants';

import {
	Animated,
	Easing
} from 'react-native';

const Sketch = styled(Animated.View)`
	background-color: ${constants.COLORS.DARK_GRAY};
	width: ${props => props.width};
	height: ${props => props.height};
`;

export default class SketchComponent extends Component {
	constructor (props) {
		super(props);

		this.state = {
			opacity: new Animated.Value(0.5)
		};
	}

	componentDidMount () {
		const {
			opacity
		} = this.state;

		Animated.loop(
			Animated.sequence([
				Animated.timing(opacity, {
					toValue: 1,
					duration: 800,
					easing: Easing.ease,
					useNativeDriver: true
				}),
				Animated.timing(opacity, {
					toValue: 0.4,
					duration: 800,
					easing: Easing.ease,
					useNativeDriver: true
				})
			])
		).start();
	}

	render () {
		const {
			height,
			width
		} = this.props;

		const {
			opacity,
		} = this.state;

		return (
			<Sketch
				height={height}
				width={width}
				style={{
					opacity
				}}
			/>
		);
	}
}

SketchComponent.defaultProps = {
	width: 50,
	height: 50
};

SketchComponent.propTypes = {
	width: PropTypes.number,
	height: PropTypes.number
};
