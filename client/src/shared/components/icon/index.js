import React from 'react';
import PropTypes from 'prop-types';

import {
	ArrowLeftIcon
} from 'src/shared/components/icon/icons';

const IconComponent = (props) => {
	const {
		icon
	} = props;

	switch (icon) {
		case 'arrow-left':
			return (
				<ArrowLeftIcon
					{
					...props
					}
				/>
			);

		default:
			return null;
	}
};

IconComponent.defaultProps = {
	icon: '',
};

IconComponent.propTypes = {
	icon: PropTypes.string
};

export default IconComponent;
