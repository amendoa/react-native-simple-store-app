import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line
import Svg, {
	Circle,
} from 'react-native-svg';

const RadioIconComponent = (props) => {
	const {
		color,
	} = props;

	return (
		<Svg
			{
			...props
			}
			viewBox="0 0 15.87 15.87"
		>
			<Circle
				cx="7.93"
				cy="7.93"
				r="7"
				stroke-miterlimit="10"
				stroke-width="1.8px"
				fill="none"
				stroke={color}
			/>
		</Svg>
	);
};

RadioIconComponent.defaultProps = {
	color: '',
};

RadioIconComponent.propTypes = {
	color: PropTypes.string
};

export default RadioIconComponent;
