import React from 'react';
import styled from 'styled-components/native';
import constants from 'src/modules/constants';

import {
	Button
} from 'src/shared/components';

const Wrapper = styled.View`
	flex: 1;
	align-items: center;
	justify-content: center;
	padding: 10px;
	background-color: #dbdee2
`;

const Container = styled.View`
	margin: 20px 0px 20px 0px;
	width: 100%
`;

export default () => (
	<Wrapper>
		<Container>
			<Button
				primary
				text="add to bag I"
			/>
		</Container>
		<Container>
			<Button
				default
				text="add to bag II"
			/>
		</Container>
		<Container>
			<Button
				primary
				outline
				text="add to bag III"
			/>
		</Container>
		<Container>
			<Button
				primary
				width="50"
				height="50"
				icon={{
					icon: 'arrow-left',
					width: '50',
					height: '50',
					color: constants.colors.dark
				}}
			/>
		</Container>
	</Wrapper>
);
