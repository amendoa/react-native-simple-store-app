import React from 'react';
import styled from 'styled-components/native';
import constants from 'src/modules/constants';

import {
	Button,
	Icon,
	Navbar,
	Tag,
	Image
} from 'src/shared/components';

const Wrapper = styled.View`
	flex: 1;
	align-items: center;
	background-color: ${constants.colors.default}
`;

const Container = styled.View`
	width: 100%;
	height: 100%;
`;

export default () => (
	<Wrapper>
		<Navbar
			title="Catalog"
			rightIcons={[
				{
					icon: {
						icon: 'info',
						width: '24',
						height: '24',
						dark: true
					},
					onPress: () => {
					}
				},
				{
					icon: {
						icon: 'bag',
						width: '24',
						height: '24',
						dark: true,
						tag: true
					},
					onPress: () => {
					}
				}
			]}
		/>
		<Container>
			<Image
				source="http://192.168.0.100:7070/images/product1.jpg"
				thumbnailSource="http://192.168.0.100:7070/thumbs/product1.jpg"
				width={150}
				height={150}
			/>

			<Button
				primary
				text="add to bag I"
				width="50"
				height="50"
			/>
		</Container>
		{/* <Container>
			<Icon
				icon="bag"
				width="24"
				height="24"
				dark
			/>
		</Container> */}
		{/* <Container>
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
					dark: true
				}}
			/>
		</Container> */}
		{/* <Container>
			<Icon
				icon="arrow-left"
				width="24"
				height="24"
				primary
			/>
			<Icon
				icon="chevron-left"
				width="24"
				height="24"
				primary
			/>
			<Icon
				icon="chevron-right"
				width="24"
				height="24"
				primary
			/>
			<Icon
				icon="close"
				width="24"
				height="24"
				primary
			/>
			<Icon
				icon="bag"
				width="24"
				height="24"
				primary
			/>

			<Icon
				icon="info"
				width="24"
				height="24"
				primary
			/>
		</Container> */}
	</Wrapper>
);
