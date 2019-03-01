import React from 'react';
import PropTypes from 'prop-types';
import constants from 'src/modules/constants';
import styled from 'styled-components/native';

import {
	Tag
} from 'src/shared/components';

import {
	ArrowLeftIcon,
	ChevronLeftIconComponent,
	ChevronRightIconComponent,
	CloseIconComponent,
	BagIconComponent,
	InfoIconComponent
} from 'src/shared/components/icon/icons';

const getIconColor = (props) => {
	const {
		dark: isDarkIcon,
		primary: isPrimaryIcon,
		default: isDefaultIcon
	} = props;

	if (isDarkIcon) {
		return constants.colors.dark;
	}

	if (isPrimaryIcon) {
		return constants.colors.primary;
	}

	if (isDefaultIcon) {
		return constants.colors.default;
	}

	return 'transparent';
};

const Wrapper = styled.View`
	display: flex;
	align-items: flex-start;
`;

const TagContainer = styled.View`
	position: absolute;
	z-index: 1;
	margin-top: -5;
	right: 0;
`;

const renderIcon = (props) => {
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
					color={getIconColor(props)}
				/>
			);

		case 'chevron-left':
			return (
				<ChevronLeftIconComponent
					{
					...props
					}
					color={getIconColor(props)}
				/>
			);

		case 'chevron-right':
			return (
				<ChevronRightIconComponent
					{
					...props
					}
					color={getIconColor(props)}
				/>
			);

		case 'close':
			return (
				<CloseIconComponent
					{
					...props
					}
					color={getIconColor(props)}
				/>
			);

		case 'bag':
			return (
				<BagIconComponent
					{
					...props
					}
					color={getIconColor(props)}
				/>
			);

		case 'info':
			return (
				<InfoIconComponent
					{
					...props
					}
					color={getIconColor(props)}
				/>
			);

		default:
			return null;
	}
};

const IconComponent = (props) => {
	const {
		tag
	} = props;

	return (
		<Wrapper>
			{
				tag && (
					<TagContainer>
						<Tag
							primary
							width={16}
							height={16}
						/>
					</TagContainer>
				)
			}
			{
				renderIcon(props)
			}
		</Wrapper>
	);
};

renderIcon.defaultProps = {
	icon: ''
};

renderIcon.propTypes = {
	icon: PropTypes.string
};

IconComponent.defaultProps = {
	tag: false
};

IconComponent.propTypes = {
	tag: PropTypes.bool,
};

export default IconComponent;
