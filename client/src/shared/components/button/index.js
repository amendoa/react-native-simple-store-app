import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import constants from 'src/modules/constants';

import React, {
	Component
} from 'react';

import {
	Animated,
	Easing,
	TouchableWithoutFeedback
} from 'react-native';

import {
	Label,
	Icon
} from 'src/shared/components';

const getBackgroundColor = (props) => {
	const {
		primary: isPrimaryButton,
		default: isDefaultButton,
		outline: isOutlineButton
	} = props;

	const {
		colors
	} = constants;

	if (isOutlineButton) {
		return colors.default;
	}

	if (isPrimaryButton) {
		return colors.primary;
	}

	if (isDefaultButton) {
		return colors.default;
	}

	return 'transparent';
};

const getBorder = (props) => {
	const {
		primary: isPrimaryButton,
		outline: isOutlineButton
	} = props;

	const {
		colors
	} = constants;

	if (isOutlineButton && isPrimaryButton) {
		return `1.5px solid ${colors.primary}`;
	}

	return '0px';
};

const ButtonWrapper = styled.View`
	display: flex;
	justify-content: center;
	flex-direction: row;
	align-items: center;
	background-color: ${props => getBackgroundColor(props)};
	width: ${props => props.width};
	height: ${props => props.height};
	margin: 0;
	border: ${props => getBorder(props)};
	padding: 8px 8px 8px 8px;
`;

export default class ButtonComponent extends Component {
	constructor (props) {
		super(props);
		this.state = {
			animatePress: new Animated.Value(1)
		};
	}

	animateIn = () => {
		const {
			animatePress
		} = this.state;

		Animated.timing(animatePress, {
			toValue: 0.98,
			duration: 100,
			easing: Easing.elastic(2),
			useNativeDriver: true
		}).start();
	}

	animateOut = () => {
		const {
			animatePress
		} = this.state;

		Animated.timing(animatePress, {
			toValue: 1,
			duration: 100,
			easing: Easing.elastic(2),
			useNativeDriver: true
		}).start();
	}

	render () {
		const {
			text,
			primary: isPrimaryButton,
			default: isDefaultButton,
			outline: isOutlineButton,
			icon,
			onPress
		} = this.props;

		const {
			animatePress
		} = this.state;

		return (
			<TouchableWithoutFeedback
				onPressIn={() => this.animateIn()}
				onPressOut={() => this.animateOut()}
				onPress={onPress}
			>
				<ButtonWrapper
					style={{
						transform: [
							{
								scale: animatePress
							}
						]
					}}
					{
					...this.props
					}
					as={Animated.View}
				>
					{
						text && (
							<Label
								text={text}
								default={isPrimaryButton}
								dark={isDefaultButton}
								primary={isOutlineButton}
								fontSize={16}
							/>
						)
					}
					{
						icon && (
							<Icon
								{
								...icon
								}
							/>
						)
					}
				</ButtonWrapper>
			</TouchableWithoutFeedback>
		);
	}
}

ButtonComponent.defaultProps = {
	text: null,
	primary: false,
	default: false,
	outline: false,
	width: 'auto',
	height: 'auto',
	icon: {},
	onPress: () => {}
};

ButtonComponent.propTypes = {
	text: PropTypes.string,
	primary: PropTypes.bool,
	default: PropTypes.bool,
	outline: PropTypes.bool,
	width: PropTypes.string,
	height: PropTypes.string,
	icon: PropTypes.shape({}),
	onPress: PropTypes.func
};
