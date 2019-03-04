import React from 'react';
import PropTypes from 'prop-types';
import constants from 'src/modules/constants';

// eslint-disable-next-line
import Svg, {
	Circle
} from 'react-native-svg';

const SpinnerIconComponent = (props) => {
	const {
		color,
	} = props;

	return (
		<Svg
			{
			...props
			}
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center'
			}}
			viewBox="0 0 64 64"
		>
			<Circle
				stroke={constants.colors.gray}
				strokeWidth="8"
				strokeDasharray="300"
				strokeDashoffset="82"
				r="26"
				cx="32"
				cy="32"
				fill="none"
			/>
			<Circle
				stroke={color}
				strokeWidth="8"
				strokeDasharray="128"
				strokeDashoffset="82"
				r="26"
				cx="32"
				cy="32"
				fill="none"
			/>
		</Svg>
	);
};

SpinnerIconComponent.defaultProps = {
	color: '',
};

SpinnerIconComponent.propTypes = {
	color: PropTypes.string
};

export default SpinnerIconComponent;
