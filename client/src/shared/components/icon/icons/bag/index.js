import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line
import Svg, {
	Path
} from 'react-native-svg';

const BagIconComponent = (props) => {
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
			<Path
				fill-rule="evenodd"
				fill={color}
				d="M20.9459865,2 L21.9398231,19.88906 C22.0010936,20.9919288 21.1567113,21.9356502 20.0538425,21.9969207 C19.9984009,21.9994866 19.9984009,21.9994866 19.9429024,22 L4.05709758,22 C2.95252808,22 2.05709758,21.1045695 2.05709758,20 C2.05761099,19.9445015 2.05761099,19.9445015 2.06017687,19.88906 L3.05401353,2 L20.9459865,2 Z M4.94598647,4 L4.05709758,20 L19.9429024,20 L19.0540135,4 L4.94598647,4 Z M7,6 L9,6 L9,8.5 C9,9.74837297 10.3851384,11 12,11 C13.6148616,11 15,9.74837297 15,8.5 L15,6 L17,6 L17,8.5 C17,10.9006956 14.6767623,13 12,13 C9.32323775,13 7,10.9006956 7,8.5 L7,6 Z"
			/>
		</Svg>
	);
};

BagIconComponent.defaultProps = {
	color: '',
};

BagIconComponent.propTypes = {
	color: PropTypes.string
};

export default BagIconComponent;
