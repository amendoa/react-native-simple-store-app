import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import constants from 'src/modules/constants';

import {
	withNavigation
} from 'react-navigation';

import {
	Modal
} from 'react-native';

import {
	Button,
	Icon,
	Label
} from 'src/shared/components';

const Container = styled.View`
	flex: 1;
	width: 100%;
	padding: 0px 24px 24px 24px;
	align-items: center;
	justify-content: space-between;
	background-color: ${constants.COLORS.DEFAULT};
`;

const ActionsContainer = styled.View`
	width: 100%;
`;

const IconContainer = styled.View`
	margin-top: 128px;
`;

const CloseButtonContainer = styled.View`
	right: 0;
	top: 0;
	position: absolute;
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
