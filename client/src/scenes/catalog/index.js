import React from 'react';
import styled from 'styled-components/native';
import constants from 'src/modules/constants';
import uuid from 'uuid/v4';

import {
	ScrollView
} from 'react-native';

import {
	Button,
	Icon,
	Navbar,
	Tag,
	Image
} from 'src/shared/components';

import {
	CatalogProductList
} from 'src/scenes/catalog/containers';

const Wrapper = styled.View`
	flex: 1;
	align-items: center;
	background-color: ${constants.colors.default}
`;

const catalogs = [
	{
		title: 'T-Shirts I'
	},
	{
		title: 'T-Shirts II'
	},
	{
		title: 'T-Shirts III'
	},
	{
		title: 'T-Shirts IV'
	},
	{
		title: 'T-Shirts V'
	}
];

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
		<ScrollView
			showsVerticalScrollIndicator={false}
		>
			{
				catalogs.map((item, index) => (
					<CatalogProductList
						key={uuid()}
						title={item.title}
						isLastItem={index === (catalogs.length - 1)}
						isFirstItem={index === 0}
					/>
				))
			}

			{/* <Button
				primary
				text="add to bag I"
				width="50"
				height="50"
			/> */}
		</ScrollView>
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
