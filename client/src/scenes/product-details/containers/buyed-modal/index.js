import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

import {
	withNavigation
} from 'react-navigation';

import {
	Modal
} from 'react-native';

import {
	Button,
	Navbar,
	Icon,
	Label
} from 'src/shared/components';

const Container = styled.View`
	flex: 1;
	width: 100%;
	padding: 24px;
	align-items: center;
	justify-content: space-between;
`;

const ActionsContainer = styled.View`
	width: 100%;
`;

const IconContainer = styled.View`
	margin-top: 64px;
`;

const BuyedModalContainer = (props) => {
	const {
		isVisible,
		handleCloseModal
	} = props;

	return (
		<Modal
			animationType="slide"
			transparent={false}
			visible={isVisible}
			onRequestClose={() => {}}
		>
			<Navbar
				rightIcons={[
					{
						icon: {
							icon: 'close',
							width: '24',
							height: '24',
							dark: true
						},
						onPress: () => {
							handleCloseModal();
						}
					}
				]}
			/>
			<Container>
				<IconContainer>
					<Icon
						icon="bag-check"
						width={176}
						height={176}
					/>
					<Label
						dark
						text="nice choice!"
						fontSize={24}
						margin="16px 0px 0px 0px"
					/>
				</IconContainer>
				<ActionsContainer>
					<Button
						primary
						width="100%"
						height="48"
						text="keep buying"
						onPress={() => {
							const {
								navigation
							} = props;

							handleCloseModal();
							navigation.navigate('catalog');
						}}
					/>
					<Button
						primary
						outline
						width="100%"
						height="48"
						text="go to the bag"
						onPress={() => {
							const {
								navigation
							} = props;

							handleCloseModal();
							navigation.navigate('bag');
						}}
						buttonMargin="16px 0px 0px 0px"
					/>
				</ActionsContainer>
			</Container>
		</Modal>
	);
};

BuyedModalContainer.defaultProps = {
	isVisible: false,
	handleCloseModal: () => {}
};

BuyedModalContainer.propTypes = {
	isVisible: PropTypes.bool,
	handleCloseModal: PropTypes.func,
	navigation: PropTypes.shape({}).isRequired
};

export default withNavigation(BuyedModalContainer);
