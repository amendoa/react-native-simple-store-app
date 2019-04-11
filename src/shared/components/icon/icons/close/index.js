import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line
import Svg, {
	Path,
} from 'react-native-svg';

const CloseIconComponent = (props) => {
	const {
		color,
	} = props;

	return (
		<Svg
			{
			...props
			}
			viewBox="0 0 24 24"
		>
			<Path
				fill-rule="evenodd"
				fill={color}
				d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
			/>
		</Svg>
	);
};

CloseIconComponent.defaultProps = {
	color: '',
};

CloseIconComponent.propTypes = {
	color: PropTypes.string
};

export default CloseIconComponent;
