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
		key: '1'
	},
	{
		key: '2'
	},
	{
		key: '3'
	},
	{
		key: '4'
	},
];

const BagScene = props => (
	<Wrapper>
		<Navbar
			title="Bag"
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

					navigation.navigate('catalog');
				}
			}}
		/>
		<Container>
			<TotalContainer>
				<Label
					text="Total: "
					dark
					fontSize={18}
				/>
				<Label
					text="100,50$"
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
							item,
							index
						} = data;

						const {
							title,
							products
						} = item;

						return (
							<TranslateAndOpacityAnimation
								delayMultiplier={index}
								doTranslateY
								doTranslateX={false}
								doOpacity={false}
							>
								<BagProductCard
									isLastItem={index === (result.length - 1)}
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
				/>
			</CheckoutButtonContainer>
		</Container>
	</Wrapper>
);

BagScene.defaultProps = {
	navigation: {
		navigate: () => {}
	}
};

BagScene.propTypes = {
	navigation: PropTypes.shape({})
};

export default BagScene;
