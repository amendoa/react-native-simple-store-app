import React, {
	Component
} from 'react';

import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';

import {
	Icon,
	Button
} from 'src/shared/components';

const Wrapper = styled.View`
	width: 100%;
`;

const Item = styled.View`
	width: 100%;
	align-items: center;
	justify-content: space-between;
	flex-direction: row;
	margin: 8px 0px 8px 0px;
`;

const RadioOptionContainer = styled.View`

`;

class RadioGroupComponent extends Component {
	constructor (props) {
		super(props);

		this.state = {
			currentItemId: props.currentItemId
		};
	}

	handleClickOption = (currentItemId) => {
		const {
			handleChangeOption
		} = this.props;

		handleChangeOption(currentItemId);

		this.setState({
			currentItemId
		});
	}

	render () {
		const {
			options
		} = this.props;

		const {
			currentItemId
		} = this.state;

		return (
			<Wrapper>
				{
					options.map(item => (
						<Button
							width="100%"
							key={uuid()}
							onPress={() => this.handleClickOption(item.id)}
							buttonPadding="0px 0px 0px 0px"
							buttonMargin="0px 0px 0px 0px"
						>
							<Item>
								<RadioOptionContainer>
									{
										item.renderItem()
									}
								</RadioOptionContainer>
								<Icon
									primary
									icon={item.id === currentItemId ? 'radio-checked' : 'radio'}
									width="22"
									height="22"
								/>
							</Item>
						</Button>
					))
				}
			</Wrapper>
		);
	}
}

RadioGroupComponent.defaultProps = {
	options: [],
	currentItemId: 0,
	handleChangeOption: () => {}
};

RadioGroupComponent.propTypes = {
	options: PropTypes.arrayOf(PropTypes.shape({
		renderItem: PropTypes.func,
		id: PropTypes.number
	})),
	currentItemId: PropTypes.number,
	handleChangeOption: PropTypes.func
};

export default RadioGroupComponent;
