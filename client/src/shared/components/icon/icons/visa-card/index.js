import React from 'react';

// eslint-disable-next-line
import Svg, {
	Rect,
	Path,
	G
} from 'react-native-svg';

const VisaCardIconComponent = props => (
	<Svg
		{
		...props
		}
		viewBox="0 0 64 32"
	>
		<G
			transform="translate(-24 -168)"
		>
			<Rect
				x="24"
				y="168"
				fill="#5197FF"
				width="64"
				height="32"
			/>
		</G>
		<G
			transform="translate(0 -27.338)"
		>
			<Path
				fill="#C9F1FF"
				d="M38.4,36.3l-4.7,10.2l-0.5-2c-0.9-2.3-3.6-4.8-6.6-6.1l4.3,12.9H36l7.5-15H38.4z"
			/>
			<Path
				fill="#EFC75E"
				d="M31.6,37.8c-0.5-0.9-1.5-1.5-2.6-1.4h-8L21,36.6c6.2,1.2,10.7,4.2,12.4,7.6L31.6,37.8z"
			/>
		</G>
	</Svg>
);

export default VisaCardIconComponent;
