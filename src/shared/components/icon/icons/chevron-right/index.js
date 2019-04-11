import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line
import Svg, {
	Polygon,
} from 'react-native-svg';

const ChevronRightIconComponent = (props) => {
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
				points="14.586 12 7.293 4.707 8.707 3.293 17.414 12 8.707 20.707 7.293 19.293"
			/>
		</Svg>
	);
};

ChevronRightIconComponent.defaultProps = {
	color: '',
};

ChevronRightIconComponent.propTypes = {
	color: PropTypes.string
};

export default ChevronRightIconComponent;
