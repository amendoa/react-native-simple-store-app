import React, {
	Component
} from 'react';

import {
	Modal
} from 'react-native';

import {
	Button,
	Label
} from 'src/shared/components';

import constants from 'src/modules/constants';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

const Wrapper = styled.SafeAreaView`
	flex: 1;
	background-color: rgba(0, 0, 0, 0.63);
	width: 100%;
	justify-content: center;
	align-items: center;
	padding: 0px 24px 0px 24px;
`;

const Container = styled.View`
	background-color: ${constants.COLORS.DEFAULT};
	width: 100%;
	height: 200px;
	padding: 16px;
	justify-content: flex-end;
`;

const ActionsContainer = styled.View`
	flex-direction: row;
`;

const CloseButtonContainer = styled.View`
	right: 0;
	top: 0;
	position: absolute;
`;

export default class ConfirmAlertComponent extends Component {
	constructor (props) {
		super(props);

		this.state = {
			confirmAlertIsVisible: false
		};
	}

	openConfirm = () => {
		this.setState({
			confirmAlertIsVisible: true
		});
	}

	handlePressCloseButton = () => {
		this.setState({
			confirmAlertIsVisible: false
		});
	}

	handlePressConfirmButton = () => {
		const {
			handleConfirm
		} = this.props;

		this.setState({
			confirmAlertIsVisible: false
		});

		handleConfirm();
	}

	render () {
		const {
			confirmAlertIsVisible
		} = this.state;

		return (
			<Modal
				animationType="fade"
				transparent
				visible={confirmAlertIsVisible}
				onRequestClose={() => {}}
			>
				<Wrapper>
					<Container>
						<CloseButtonContainer>
							<Button
								icon={{
									icon: 'close',
									width: '30',
									height: '30',
									dark: true
								}}
								onPress={this.handlePressCloseButton}
							/>
						</CloseButtonContainer>
						<Label
							text="Are you sure?"
							dark
							margin="0px 0px 48px 0px"
							fontSize={24}
						/>
						<ActionsContainer>
							<Button
								outline
								primary
								text="no"
								width="50%"
								onPress={this.handlePressCloseButton}
							/>
							<Button
								primary
								text="yes"
								width="50%"
								onPress={this.handlePressConfirmButton}
							/>
						</ActionsContainer>
					</Container>
				</Wrapper>
			</Modal>
		);
	}
}

ConfirmAlertComponent.defaultProps = {
	handleConfirm: () => {}
};

ConfirmAlertComponent.propTypes = {
	handleConfirm: PropTypes.func
};
