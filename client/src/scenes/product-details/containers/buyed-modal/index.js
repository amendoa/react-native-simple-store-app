import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import constants from 'src/modules/constants';

import {
	withNavigation,
	SafeAreaView
} from 'react-navigation';

import {
	Modal
} from 'react-native';

import {
	Button,
	Icon,
	Label
} from 'src/shared/components';

const Container = styled(SafeAreaView)`
	flex: 1;
	width: 100%;
	justify-content: space-between;
	background-color: ${constants.COLORS.DEFAULT};
`;

const ActionsContainer = styled(SafeAreaView)`
	width: 100%;
	padding: 24px;
	align-self: flex-end;
`;

const IconContainer = styled(SafeAreaView)`
	align-self: center;
`;

const CloseButtonContainer = styled(SafeAreaView)`
	align-items: flex-end;
	padding: 0px 8px 0px 8px;
`;

const BuyedModalContainer = (props) => {
	const {
		isVisible,
		handleCloseModal
	} = props;

	return (
		<Modal
			animationType="slide"
			transparent
			visible={isVisible}
			onRequestClose={() => {}}
		>
			<Container>
				<CloseButtonContainer>
					<Button
						icon={{
							icon: 'close',
							width: '30',
							height: '30',
							dark: true
						}}
						onPress={() => {
							handleCloseModal();
						}}
					/>
				</CloseButtonContainer>
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
						buttonMargin="0px 0px 16px 0px"
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
					/>
				</ActionsContainer>
			</Container>
		</Modal>
	);
};

BuyedModalContainer.defaultProps = {
	isVisible: false,
	handleCloseModal: () => {},
	navigation: {
		navigate: () => {}
	}
};

BuyedModalContainer.propTypes = {
	isVisible: PropTypes.bool,
	handleCloseModal: PropTypes.func,
	navigation: PropTypes.shape({})
};

export default withNavigation(BuyedModalContainer);
