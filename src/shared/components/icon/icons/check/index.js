import React from 'react';

// eslint-disable-next-line
import Svg, {
	Path,
	G,
	Circle
} from 'react-native-svg';

const CheckIconComponent = props => (
	<Svg
		{
		...props
		}
		viewBox="0 0 128 128"
	>
		<G>
			<Circle
				fill="#31AF91"
				cx="64"
				cy="64"
				r="64"
			/>
		</G>
		<G>
			<Path
				fill="#FFFFFF"
				d="M54.3,97.2L24.8,67.7c-0.4-0.4-0.4-1,0-1.4l8.5-8.5c0.4-0.4,1-0.4,1.4,0L55,78.1l38.2-38.2 c0.4-0.4,1-0.4,1.4,0l8.5,8.5c0.4,0.4,0.4,1,0,1.4L55.7,97.2C55.3,97.6,54.7,97.6,54.3,97.2z"
			/>
		</G>
	</Svg>
);

export default CheckIconComponent;
