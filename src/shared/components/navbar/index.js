import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import uuid from 'uuid/v4';
import constants from 'src/modules/constants';

import {
	Button,
	Label
} from 'src/shared/components';

const Wrapper = styled.View`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: row;
	width: 100%;
	height: 64;
	padding: 8px 16px 8px 16px;
	background-color: ${constants.COLORS.DEFAULT};
`;

const LeftItem = styled.View`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-direction: row;
	flex: 1 0 0;
`;

const MiddleItem = styled.View`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	flex: 1 0 0;
`;

const RightItem = styled.View`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	flex-direction: row;
	flex: 1 0 0;
	margin-top: 20;
`;

const NavbarComponent = (props) => {
	const {
		title,
		leftIcon,
		rightIcons
	} = props;

	return (
		<Wrapper>
			<LeftItem>
				{
					leftIcon && (
						<Button
							icon={leftIcon.icon}
							onPress={leftIcon.onPress}
						/>
					)
				}
			</LeftItem>
			<MiddleItem>
				{
					title && (
						<Label
							text={title}
							dark
							fontSize={24}
							bold
						/>
					)
				}
			</MiddleItem>
			<RightItem>
				{
					rightIcons && (
						rightIcons.map(item => (
							<Button
								key={uuid()}
								icon={item.icon}
								onPress={item.onPress}
							/>
						))
					)
				}
			</RightItem>
		</Wrapper>
	);
};


NavbarComponent.defaultProps = {
	title: null,
	leftIcon: {},
	rightIcons: []
};

NavbarComponent.propTypes = {
	title: PropTypes.string,
	leftIcon: PropTypes.shape({
		icon: PropTypes.object,
		onPress: PropTypes.func
	}),
	rightIcons: PropTypes.arrayOf(
		PropTypes.shape({
			icon: PropTypes.object,
			onPress: PropTypes.func
		})
	)
};

export default NavbarComponent;
