import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import constants from 'src/modules/constants';

import {
	Label
} from 'src/shared/components';

const getBackgroundColor = (props) => {
	const {
		primary: isPrimaryTag,
		default: isDefaultTag
	} = props;

	const {
		COLORS
	} = constants;

	if (isPrimaryTag) {
		return COLORS.PRIMARY;
	}

	if (isDefaultTag) {
		return COLORS.DEFAULT;
	}

	return 'transparent';
};

const Tag = styled.View`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 80;
	height: 40;
	background-color: ${props => getBackgroundColor(props)};
`;

const TagComponent = (props) => {
	const {
		label
	} = props;

	return (
		<Tag
			{
			...props
			}
		>
			<Label
				fontSize={16}
				{
				...label
				}
			/>
		</Tag>
	);
};

TagComponent.defaultProps = {
	primary: false,
	default: false,
	label: {}
};

TagComponent.propTypes = {
	primary: PropTypes.bool,
	default: PropTypes.bool,
	label: PropTypes.shape({})
};

export default TagComponent;
