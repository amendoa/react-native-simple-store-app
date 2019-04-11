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
		percentage
	} = props;

	let spinnerPercentage = percentage;

	if (spinnerPercentage < 0) {
		spinnerPercentage = 0;
	} else if (spinnerPercentage > 100) {
		spinnerPercentage = 100;
	}

	const circunference = Math.PI * (26 * 2);
	const dashoffset = ((100 - spinnerPercentage) / 100) * circunference;

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
				stroke={constants.COLORS.GRAY}
				strokeWidth="8"
				strokeDasharray={circunference}
				strokeDashoffset="0"
				r="26"
				cx="32"
				cy="32"
				fill="none"
			/>
			<Circle
				stroke={color}
				strokeWidth="8"
				strokeDasharray={circunference}
				strokeDashoffset={dashoffset}
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
	percentage: 20
};

SpinnerIconComponent.propTypes = {
	color: PropTypes.string,
	percentage: PropTypes.number
};

export default SpinnerIconComponent;
