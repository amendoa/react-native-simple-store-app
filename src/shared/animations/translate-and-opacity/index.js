import React, {
	Component
} from 'react';

import {
	Animated,
	Easing
} from 'react-native';

import PropTypes from 'prop-types';

export default class TranslateAndOpacityAnimation extends Component {
	constructor (props) {
		super(props);

		const {
			translateStartValue,
			opacityStartValue
		} = props;

		this.state = {
			translateAnimator: new Animated.Value(translateStartValue),
			opacityAnimator: new Animated.Value(opacityStartValue)
		};
	}

	componentDidMount () {
		const {
			opacityAnimator,
			translateAnimator,
		} = this.state;

		const {
			delayMultiplier,
			useNativeDriver,
			opacityToValue,
			opacityDuration,
			translateToValue,
			translateDuration,
			doTranslateY,
			doTranslateX,
			doOpacity
		} = this.props;

		if (doOpacity) {
			Animated.timing(opacityAnimator, {
				toValue: opacityToValue,
				useNativeDriver,
				duration: opacityDuration,
				easing: Easing.ease,
				delay: delayMultiplier * 0.3
			}).start();
		}

		if (doTranslateY || doTranslateX) {
			Animated.timing(translateAnimator, {
				toValue: translateToValue,
				useNativeDriver,
				duration: translateDuration,
				easing: Easing.ease,
				delay: delayMultiplier * 0.3
			}).start();
		}
	}

	render () {
		const {
			opacityAnimator,
			translateAnimator,
		} = this.state;

		const {
			doTranslateY,
			doTranslateX,
			doOpacity,
			children
		} = this.props;

		const style = {
			transform: []
		};

		if (doTranslateX) {
			style.transform.push({
				translateX: translateAnimator
			});
		}

		if (doTranslateY) {
			style.transform.push({
				translateY: translateAnimator
			});
		}

		if (doOpacity) {
			style.opacity = opacityAnimator;
		}

		return (
			<Animated.View
				style={style}
			>
				{
					children
				}
			</Animated.View>
		);
	}
}

TranslateAndOpacityAnimation.defaultProps = {
	children: null,
	delayMultiplier: 0,
	useNativeDriver: true,
	opacityStartValue: 0,
	opacityToValue: 1,
	opacityDuration: 300,
	translateStartValue: 40,
	translateToValue: 0,
	translateDuration: 300,
	doTranslateY: false,
	doTranslateX: true,
	doOpacity: true
};

TranslateAndOpacityAnimation.propTypes = {
	children: PropTypes.node,
	delayMultiplier: PropTypes.number,
	useNativeDriver: PropTypes.bool,
	opacityStartValue: PropTypes.number,
	opacityToValue: PropTypes.number,
	opacityDuration: PropTypes.number,
	translateStartValue: PropTypes.number,
	translateToValue: PropTypes.number,
	translateDuration: PropTypes.number,
	doTranslateY: PropTypes.bool,
	doTranslateX: PropTypes.bool,
	doOpacity: PropTypes.bool
};
