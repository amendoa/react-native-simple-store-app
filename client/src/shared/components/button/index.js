import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

import {
	Label,
	Icon
} from 'src/shared/components';

const getBackgroundColor = (props) => {
	const {
		theme,
		primary: isPrimaryButton,
		default: isDefaultButton,
		outline: isOutlineButton
	} = props;

	const {
		colors
	} = theme;

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
		theme,
		primary: isPrimaryButton,
		outline: isOutlineButton
	} = props;

	const {
		colors
	} = theme;

	if (isOutlineButton && isPrimaryButton) {
		return `1.5px solid ${colors.primary}`;
	}

	return '0px';
};

const ButtonWrapper = styled.TouchableOpacity`
	display: flex;
	justify-content: center;
	flex-direction: row;
	align-items: center;
	background-color: ${props => getBackgroundColor(props)};
	width: ${props => props.width};
	height: ${props => props.height};
	margin: 0;
	border: ${props => getBorder(props)};
`;

const ButtonComponent = (props) => {
	const {
		text,
		primary: isPrimaryButton,
		default: isDefaultButton,
		outline: isOutlineButton,
		icon
	} = props;

	return (
		<ButtonWrapper
			onPress={() => {
				console.log('teste');
			}}
			{
			...props
			}
			activeOpacity={1}
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
	);
};

ButtonComponent.defaultProps = {
	text: null,
	primary: false,
	default: false,
	outline: false,
	width: '100%',
	height: '48',
	icon: {}
};

ButtonComponent.propTypes = {
	text: PropTypes.string,
	primary: PropTypes.bool,
	default: PropTypes.bool,
	outline: PropTypes.bool,
	width: PropTypes.string,
	height: PropTypes.string,
	icon: PropTypes.shape({ root: PropTypes.string })
};

export default ButtonComponent;
