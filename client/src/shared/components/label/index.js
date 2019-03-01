import React from 'react';
import styled from 'styled-components/native';
import constants from 'src/modules/constants';
import PropTypes from 'prop-types';

const getColor = (props) => {
	const {
		dark: isDarkLabel,
		default: isDefaultLabel,
		primary: isPrimaryLabel
	} = props;

	const {
		colors
	} = constants;

	if (isPrimaryLabel) {
		return colors.primary;
	}

	if (isDarkLabel) {
		return colors.dark;
	}

	if (isDefaultLabel) {
		return colors.default;
	}

	return 'transparent';
};

const Label = styled.Text`
	font-family: quicksand-bold;
	font-size: ${props => props.fontSize};
	text-align-vertical: center;
	text-align: center;
	margin: 0;
	align-self: center;
	color: ${props => getColor(props)};
	margin-bottom: 5;
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
	fontSize: 1
};

LabelComponent.propTypes = {
	text: PropTypes.string,
	fontSize: PropTypes.number
};

export default LabelComponent;
