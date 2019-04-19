import React from 'react';
import styled from 'styled-components/native';
import constants from 'src/modules/constants';
import PropTypes from 'prop-types';

import {
	Navbar,
	PullRefresh,
	Button,
	Label
} from 'src/shared/components';

import {
	TranslateAndOpacityAnimation
} from 'src/shared/animations';

import {
	BagProductCard
} from 'src/scenes/bag/components';

import {
	FlatList
} from 'react-native';

const Wrapper = styled.SafeAreaView`
	flex: 1;
	align-items: center;
	background-color: ${constants.COLORS.DEFAULT};
	width: 100%;
`;

const Container = styled.View`
	flex: 1;
	width: 100%;
`;

const BagItemsList = styled(FlatList)`
	padding: 0px 24px 80px 24px;
`;

const CheckoutButtonContainer = styled.View`
	position: absolute;
	bottom: 0;
	right: 0;
	left: 0;
	padding: 24px;
	background-color: ${constants.COLORS.DEFAULT};
`;

const TotalContainer = styled.View`
	flex-direction: row;
	align-items: center;
	padding: 24px;
`;

const result = [
	{
		imageSource: 'https://raw.githubusercontent.com/almeida-matheus/react-native-simple-store-app/develop/art/public/images/product1/image1.jpg',
		imageThumbnailSource: 'https://raw.githubusercontent.com/almeida-matheus/react-native-simple-store-app/develop/art/public/thumbs/product1/image1.jpg',
		price: '$40.00',
		key: '328298dd-e251-4e2e-9356-ed031ae5955f'
	},
	{
		imageSource: 'https://raw.githubusercontent.com/almeida-matheus/react-native-simple-store-app/develop/art/public/images/product2/image1.jpg',
		imageThumbnailSource: 'https://raw.githubusercontent.com/almeida-matheus/react-native-simple-store-app/develop/art/public/thumbs/product2/image1.jpg',
		price: '$50.00',
		key: '25a77ec7-e070-4ec4-8ff6-6d2de63893ab'
	},
	{
		imageSource: 'https://raw.githubusercontent.com/almeida-matheus/react-native-simple-store-app/develop/art/public/images/product3/image1.jpg',
		imageThumbnailSource: 'https://raw.githubusercontent.com/almeida-matheus/react-native-simple-store-app/develop/art/public/thumbs/product3/image1.jpg',
		price: '$45.00',
		key: 'e7d7022b-8948-4402-b2d9-5a0e5ca2b832'
	},
	{
		imageSource: 'https://raw.githubusercontent.com/almeida-matheus/react-native-simple-store-app/develop/art/public/images/product4/image1.jpg',
		imageThumbnailSource: 'https://raw.githubusercontent.com/almeida-matheus/react-native-simple-store-app/develop/art/public/thumbs/product4/image1.jpg',
		price: '$60.00',
		key: '328298dd-e251-4e2e-9356-ed031ae5954f'
	},
	{
		imageSource: 'https://raw.githubusercontent.com/almeida-matheus/react-native-simple-store-app/develop/art/public/images/product5/image1.jpg',
		imageThumbnailSource: 'https://raw.githubusercontent.com/almeida-matheus/react-native-simple-store-app/develop/art/public/thumbs/product5/image1.jpg',
		price: '$70.00',
		key: '25a77ec7-e070-4ec4-8ff6-6d2de53893ab'
	}
];

const BagScene = props => (
	<Wrapper>
		<Navbar
			title="bag"
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
					} = props;

					navigation.goBack();
				}
			}}
		/>
		<Container>
			<TotalContainer>
				<Label
					text="total: "
					dark
					fontSize={18}
				/>
				<Label
					text="$100.50"
					primary
					fontSize={18}
				/>
			</TotalContainer>
			<PullRefresh
				isRefreshing={false}
				isFetching={false}
				onRefresh={() => {}}
				onLoadMore={() => {}}
				canLoadMore={false}
				pullRefreshIsEnabled={false}
			>
				<BagItemsList
					data={result}
					scrollEnabled={false}
					renderItem={(data) => {
						const {
							index,
							item
						} = data;

						return (
							<TranslateAndOpacityAnimation
								delayMultiplier={index}
								doTranslateY
								doTranslateX={false}
								doOpacity={false}
							>
								<BagProductCard
									isLastItem={index === (result.length - 1)}
									model={item}
								/>
							</TranslateAndOpacityAnimation>
						);
					}}
				/>
			</PullRefresh>
			<CheckoutButtonContainer>
				<Button
					primary
					text="check out"
					height="48"
					onPress={() => {
						const {
							navigation
						} = props;

						navigation.navigate('payment');
					}}
				/>
			</CheckoutButtonContainer>
		</Container>
	</Wrapper>
);

BagScene.defaultProps = {
	navigation: {
		navigate: () => {},
		goBack: () => {}
	}
};

BagScene.propTypes = {
	navigation: PropTypes.shape({})
};

export default BagScene;
