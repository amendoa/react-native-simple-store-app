import React, {
	Component
} from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import constants from 'src/modules/constants';

import {
	Navbar,
	Button,
	RadioGroup,
	Icon,
	Label
} from 'src/shared/components';

import {
	PayModal
} from 'src/scenes/payment/containers';

const Wrapper = styled.SafeAreaView`
	flex: 1;
	align-items: center;
	background-color: ${constants.COLORS.DEFAULT};
	width: 100%;
`;

const Container = styled.ScrollView`
	flex: 1;
	width: 100%;
	padding: 0px 24px 0px 24px;
	margin: 24px 0px 0px 0px;
`;

const PayButtonContainer = styled.View`
	padding: 24px;
	width: 100%;
	background-color: ${constants.COLORS.DEFAULT};
`;

const SelectItemContainer = styled.View`
	flex-direction: row;
`;

const PaymentItemDescContainer = styled.View`
	margin-left: 16px;
`;

const ItemDescContainer = styled.View``;

const OrderInfoContainer = styled.View`
	margin-bottom: 8px;
`;

const OrderInfoItem = styled.View`
	flex-direction: row;
	justify-content: space-between;
`;

class PaymentScene extends Component {
	constructor (props) {
		super(props);

		this.state = {
			payModalIsOpen: false
		};
	}

	render () {
		const {
			payModalIsOpen
		} = this.state;

		return (
			<Wrapper>
				<Navbar
					title="payment"
					leftIcon={{
						icon: {
							icon: 'arrow-left',
							width: '24',
							height: '24',
							dark: true
						},
						onPress: () => {
							const {
								navigation
							} = this.props;

							navigation.goBack();
						}
					}}
				/>
				<PayModal
					isVisible={payModalIsOpen}
					handleCloseModal={() => {
						this.setState({
							payModalIsOpen: false
						});
					}}
				/>
				<Container>
					<Label
						dark
						text="payment method"
						fontSize={18}
						margin="0px 0px 16px 0px"
					/>
					<RadioGroup
						options={[
							{
								renderItem: () => (
									<SelectItemContainer>
										<Icon
											icon="visa-card"
											width="70"
											height="50"
										/>
										<PaymentItemDescContainer>
											<Label
												gray
												text="mastercard"
												fontSize={18}
											/>
											<Label
												gray
												text="**** **** **** 3111"
												fontSize={16}
											/>
										</PaymentItemDescContainer>

									</SelectItemContainer>
								),
								id: 1
							},
							{
								renderItem: () => (
									<SelectItemContainer>
										<Icon
											icon="master-card"
											width="70"
											height="50"
										/>
										<PaymentItemDescContainer>
											<Label
												gray
												text="visa"
												fontSize={18}
											/>
											<Label
												gray
												text="**** **** **** 5655"
												fontSize={16}
											/>
										</PaymentItemDescContainer>
									</SelectItemContainer>
								),
								id: 2
							}
						]}
						currentItemId={1}
					/>
					<Label
						dark
						text="shipping address"
						fontSize={18}
						margin="24px 0px 16px 0px"
					/>
					<RadioGroup
						options={[
							{
								renderItem: () => (
									<SelectItemContainer>
										<ItemDescContainer>
											<Label
												gray
												text="991 franklin street"
												fontSize={18}
											/>
											<Label
												gray
												text="montgomery, AL 36116"
												fontSize={16}
											/>
										</ItemDescContainer>
									</SelectItemContainer>
								),
								id: 1
							},
							{
								renderItem: () => (
									<SelectItemContainer>
										<ItemDescContainer>
											<Label
												gray
												text="2828 ward road"
												fontSize={18}
											/>
											<Label
												gray
												text="port chester, NY 10573"
												fontSize={16}
											/>
										</ItemDescContainer>
									</SelectItemContainer>
								),
								id: 2
							}
						]}
						currentItemId={1}
					/>

				</Container>
				<PayButtonContainer>
					<OrderInfoContainer>
						<OrderInfoItem>
							<Label
								dark
								text="order"
								fontSize={16}
							/>
							<Label
								gray
								text="100,10$"
								fontSize={16}
							/>
						</OrderInfoItem>
						<OrderInfoItem>
							<Label
								dark
								text="delivery"
								fontSize={16}
							/>
							<Label
								gray
								text="10,00$"
								fontSize={16}
							/>
						</OrderInfoItem>
						<OrderInfoItem>
							<Label
								dark
								text="summary"
								fontSize={16}
							/>
							<Label
								gray
								text="110,10$"
								fontSize={16}
							/>
						</OrderInfoItem>
					</OrderInfoContainer>
					<Button
						primary
						text="pay 110,10$"
						height="48"
						onPress={() => {
							this.setState({
								payModalIsOpen: true
							});
						}}
					/>
				</PayButtonContainer>
			</Wrapper>
		);
	}
}

PaymentScene.defaultProps = {
	navigation: {
		navigate: () => {},
		goBack: () => {}
	}
};

PaymentScene.propTypes = {
	navigation: PropTypes.shape({})
};

export default PaymentScene;
