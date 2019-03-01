import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line
import Svg, {
	Polygon,
} from 'react-native-svg';

const ChevronLeftIconComponent = (props) => {
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
				points="9.414 12 16.707 19.293 15.293 20.707 6.586 12 15.293 3.293 16.707 4.707"
			/>
		</Svg>
	);
};

ChevronLeftIconComponent.defaultProps = {
	color: '',
};

ChevronLeftIconComponent.propTypes = {
	color: PropTypes.string
};

export default ChevronLeftIconComponent;
