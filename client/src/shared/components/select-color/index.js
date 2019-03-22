import React from 'react';

import styled from 'styled-components/native';
import PropTypes from 'prop-types';

import {
	Button
} from 'src/shared/components';

const Wrapper = styled.View`
	width: 40px;
	height: 40px;
	flex-direction: row;
`;
const ColorItem = styled.View`
	width: ${props => (props.isSelected ? '32px' : '24px')};
	height: ${props => (props.isSelected ? '32px' : '24px')};
	margin-right: 16px;
	background-color: ${props => props.color};;
`;

const SelectColorComponent = (props) => {
	const {
		currentIdSelected,
		items,
		handleChangeValue
	} = props;

	return (
		<Wrapper>
			{
				items.map(item => (
					<Button
						buttonPadding="0px 0px 0px 0px"
						key={item.id}
						onPress={() => handleChangeValue(item.id)}
					>
						<ColorItem
							isSelected={item.id === currentIdSelected}
							color={item.color}
						/>
					</Button>
				))
			}
		</Wrapper>
	);
};

SelectColorComponent.defaultProps = {
	currentIdSelected: '',
	handleChangeValue: () => {},
	items: []
};

SelectColorComponent.propTypes = {
	currentIdSelected: PropTypes.string,
	handleChangeValue: PropTypes.func,
	items: PropTypes.arrayOf(PropTypes.shape({
		color: PropTypes.string,
		id: PropTypes.string
	})),
};

export default SelectColorComponent;
