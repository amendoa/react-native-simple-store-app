import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line
import Svg, {
	Rect,
	G,
	Polygon,
	Path
} from 'react-native-svg';

const BagCheckIconComponent = props => (
	<Svg
		{
		...props
		}
		viewBox="0 0 512 512"
	>
		<Rect
			x="55.6"
			y="154.8"
			fill="#5197FF"
			width="331.5"
			height="349.4"
		/>
		<Rect
			x="352.5"
			y="154.8"
			fill="#B8D4FF"
			width="34.6"
			height="349.4"
		/>
		<G>
			<Rect
				x="55.6"
				y="454.8"
				fill="#FFFFFF"
				width="331.5"
				height="49.3"
			/>
			<Rect
				x="55.6"
				y="154.8"
				fill="#FFFFFF"
				width="23.1"
				height="349.4"
			/>
		</G>
		<Rect
			x="352.5"
			y="454.8"
			fill="#FFDA44"
			width="34.6"
			height="49.3"
		/>
		<Rect
			x="352.5"
			y="454.8"
			fill="#E6E6E6"
			width="34.6"
			height="49.3"
		/>
		<Rect
			x="387.1"
			y="154.8"
			fill="#5197FF"
			width="69.2"
			height="349.4"
		/>
		<Path
			d="M395,146.9h-7.9h-25.7V94.4C361.4,42.4,319.1,0,267,0c-7.9,0-15.5,1-22.8,2.8C236.9,1,229.2,0,221.4,0
			C169.3,0,127,42.4,127,94.4v52.5H47.7V512h338.4h8.9h69.2V146.9H395z M448.5,485.7l-19.1-19.1V162.6h19.1V485.7z M421.2,480.6
			l15.6,15.6h-31.3L421.2,480.6z M413.6,162.6V466L395,484.6v-322H413.6z M345.7,94.4v52.5h-29.9V94.4c0-32.6-16.6-61.4-41.8-78.4
			C314.1,19.6,345.7,53.4,345.7,94.4z M244.2,19.1c32.3,9.8,55.9,39.8,55.9,75.3v52.5H188.3V94.4C188.3,59,211.9,28.9,244.2,19.1z
			M142.7,94.4c0-41,31.6-74.8,71.7-78.4c-25.2,17-41.8,45.8-41.8,78.4v52.5h-29.9L142.7,94.4L142.7,94.4z M127,162.6v32h15.7v-32
			h157.4v32h15.7v-32h63.5V447H63.5V162.6H127z M63.5,496.3v-33.6h315.8v33.6H63.5z"
		/>
		<Polygon
			fill="#5AD9AA"
			strokeMiterlimit="10"
			strokeWidth="14"
			stroke="#000000"
			points="320.6,227.8 227.6,320.8 191.4,284.7 163,313.1 227.6,377.7 349,256.2"
		/>
	</Svg>
);

BagCheckIconComponent.defaultProps = {
	color: '',
};

BagCheckIconComponent.propTypes = {
	color: PropTypes.string
};

export default BagCheckIconComponent;
