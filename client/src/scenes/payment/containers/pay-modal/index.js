import React, {
	Component
} from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import constants from 'src/modules/constants';

import {
	withNavigation,
	SafeAreaView
} from 'react-navigation';

import {
	Modal,
	Animated
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
	flex: 1 0 0;
	justify-content: center;
	align-items: center;
`;

class PayModalContainer extends Component {
	constructor (props) {
		super(props);

		this.state = {
			iconTranslateY: new Animated.Value(0),
			isLoading: true
		};
	}

	componentDidMount () {
		const {
			iconTranslateY
		} = this.state;

		Animated.loop(
			Animated.sequence([
				Animated.timing(iconTranslateY, {
					toValue: 1,
					duration: 1500,
					useNativeDriver: true
				}),
				Animated.timing(iconTranslateY, {
					toValue: 0,
					duration: 1500,
					useNativeDriver: true
				})
			])
		).start();

		setTimeout(() => {
			this.setState({
				isLoading: false
			});
		}, 9000);
	}

	render () {
		const {
			isVisible,
			handleCloseModal
		} = this.props;

		const {
			iconTranslateY,
			isLoading
		} = this.state;

		return (
			<Modal
				animationType="slide"
				transparent
				visible={isVisible}
				onRequestClose={() => {}}
			>
				<Container>
					{
						isLoading && (
							<IconContainer>
								<Animated.View
									style={{
										transform: [
											{
												translateY: iconTranslateY.interpolate({
													inputRange: [0, 1],
													outputRange: [-25, 0]
												})
											}
										]
									}}
								>
									<Icon
										icon="pocket"
										width={160}
										height={160}
									/>
								</Animated.View>
								<Label
									dark
									text="almost there!"
									fontSize={24}
									margin="16px 0px 0px 0px"
								/>
							</IconContainer>
						)
					}
					{
						!isLoading && (
							<IconContainer>
								<Icon
									icon="check"
									width={128}
									height={128}
								/>
								<Label
									dark
									text="payment successful"
									fontSize={24}
									margin="16px 0px 0px 0px"
								/>
							</IconContainer>
						)
					}
					{
						!isLoading && (
							<ActionsContainer>
								<Button
									primary
									width="100%"
									height="48"
									text="keep buying"
									onPress={() => {
										const {
											navigation
										} = this.props;
										handleCloseModal();
										navigation.navigate('catalog');
									}}
									buttonMargin="0px 0px 16px 0px"
								/>
							</ActionsContainer>
						)
					}
				</Container>
			</Modal>
		);
	}
}

PayModalContainer.defaultProps = {
	isVisible: false,
	handleCloseModal: () => {},
	navigation: {
		navigate: () => {}
	}
};

PayModalContainer.propTypes = {
	isVisible: PropTypes.bool,
	handleCloseModal: PropTypes.func,
	navigation: PropTypes.shape({})
};

export default withNavigation(PayModalContainer);
