import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line
import Svg, {
	Polygon,
} from 'react-native-svg';

const ArrowLeftIconComponent = (props) => {
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
			<Polygon
				fillRule="evenodd"
				fill={color}
				points="6.414 13 12.707 19.293 11.293 20.707 2.586 12 11.293 3.293 12.707 4.707 6.414 11 21 11 21 13"
			/>
		</Svg>
	);
};

ArrowLeftIconComponent.defaultProps = {
	color: '',
};

ArrowLeftIconComponent.propTypes = {
	color: PropTypes.string
};

export default ArrowLeftIconComponent;
