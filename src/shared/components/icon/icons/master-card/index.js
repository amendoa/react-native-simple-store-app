import React from 'react';

// eslint-disable-next-line
import Svg, {
	Rect,
	Path,
	Circle
} from 'react-native-svg';

const MasterCardIconComponent = props => (
	<Svg
		{
		...props
		}
		viewBox="0 0 64 32"
	>
		<Rect
			fill="#5197FF"
			width="64"
			height="32"
		/>
		<Path
			fill="#E28A74"
			d="M24.6,7.8c5,0,9,4,9,9s-4,9-9,9s-9-4-9-9S19.7,7.8,24.6,7.8z"
		/>
		<Circle
			fill="#FEEA86"
			cx="38.6"
			cy="16.8"
			r="9"
		/>
	</Svg>
);

export default MasterCardIconComponent;
