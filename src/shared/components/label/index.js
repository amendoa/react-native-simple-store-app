import React from 'react';
import styled from 'styled-components/native';
import constants from 'src/modules/constants';
import PropTypes from 'prop-types';

const getColor = (props) => {
	const {
		dark: isDarkLabel,
		default: isDefaultLabel,
		primary: isPrimaryLabel,
		gray: isGrayLabel
	} = props;

	const {
		COLORS
	} = constants;

	if (isGrayLabel) {
		return COLORS.DARK_GRAY;
	}

	if (isPrimaryLabel) {
		return COLORS.PRIMARY;
	}

	if (isDarkLabel) {
		return COLORS.DARK;
	}

	if (isDefaultLabel) {
		return COLORS.DEFAULT;
	}

	return 'transparent';
};

const Label = styled.Text`
	font-family: quicksand-bold;
	font-size: ${props => props.fontSize};
	text-align-vertical: center;
	color: ${props => getColor(props)};
	margin: ${props => props.margin}
`;

const LabelComponent = (props) => {
	const {
		text
	} = props;

	return (
		<Label
			{
			...props
			}
		>
			{
				text
			}
		</Label>
	);
};

LabelComponent.defaultProps = {
	text: 'text',
	fontSize: 1,
	margin: '0px 0px 5px 0px'
};

LabelComponent.propTypes = {
	text: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	fontSize: PropTypes.number,
	margin: PropTypes.string
};

export default LabelComponent;
