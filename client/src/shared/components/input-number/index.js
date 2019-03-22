import React, {
	Component
} from 'react';

import styled from 'styled-components/native';
import constants from 'src/modules/constants';
import PropTypes from 'prop-types';

import {
	Button,
	Label
} from 'src/shared/components';

const Wrapper = styled.View`
	flex-direction: row;
	background-color: ${constants.COLORS.DEFAULT};
`;

const NumberContainer = styled.View`
	width: 40px;
	height: 40px;
	background-color: ${constants.COLORS.DEFAULT};
	align-items: center;
	justify-content: center;
`;

export default class InputNumberComponent extends Component {
	handleClickLeftArrow = () => {
		const {
			handleChangeValue,
			value
		} = this.props;

		const newValue = value - 1;

		if (newValue >= 1) {
			handleChangeValue(newValue);
		}
	}

	handleClickRightArrow = () => {
		const {
			handleChangeValue,
			value
		} = this.props;

		const newValue = value + 1;

		if (newValue <= 99) {
			handleChangeValue(newValue);
		}
	}

	render () {
		const {
			value
		} = this.props;

		return (
			<Wrapper>
				<Button
					default
					width="40"
					height="40"
					icon={{
						icon: 'chevron-left',
						width: '24',
						height: '24',
						dark: true
					}}
					onPress={this.handleClickLeftArrow}
				/>
				<NumberContainer>
					<Label
						text={value}
						dark
						fontSize={16}
					/>
				</NumberContainer>
				<Button
					default
					width="40"
					height="40"
					icon={{
						icon: 'chevron-right',
						width: '24',
						height: '24',
						dark: true
					}}
					onPress={this.handleClickRightArrow}
				/>
			</Wrapper>
		);
	}
}

InputNumberComponent.defaultProps = {
	value: 0,
	handleChangeValue: () => {}
};

InputNumberComponent.propTypes = {
	value: PropTypes.number,
	handleChangeValue: PropTypes.func
};
