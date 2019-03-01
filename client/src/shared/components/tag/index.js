import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import constants from 'src/modules/constants';

const getBackgroundColor = (props) => {
	const {
		primary: isPrimaryTag
	} = props;

	const {
		colors
	} = constants;

	if (isPrimaryTag) {
		return colors.primary;
	}

	return 'transparent';
};

const Tag = styled.View`
	display: flex;
	align-items: center;
	justify-content: center;
	width: ${props => props.width};
	height: ${props => props.height};
	background-color: ${props => getBackgroundColor(props)};
	border-radius: 50;
`;

const TagComponent = props => (
	<Tag
		{
		...props
		}
	/>
);

TagComponent.defaultProps = {
	primary: true,
	width: 50,
	height: 50,
};

TagComponent.propTypes = {
	primary: PropTypes.bool,
	width: PropTypes.number,
	height: PropTypes.number,
};

export default TagComponent;
