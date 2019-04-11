import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line
import Svg, {
	Circle,
} from 'react-native-svg';

const RadioCheckedIconComponent = (props) => {
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
				fill="none"
				stroke={color}
				stroke-miterlimit="10"
				stroke-width="1.8px"
			/>

			<Circle
				cx="7.93"
				cy="7.93"
				r="4"
				fill={color}
			/>
		</Svg>
	);
};

RadioCheckedIconComponent.defaultProps = {
	color: '',
};

RadioCheckedIconComponent.propTypes = {
	color: PropTypes.string
};

export default RadioCheckedIconComponent;
