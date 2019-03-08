import React, {
	Component
} from 'react';
import styled from 'styled-components/native';
import constants from 'src/modules/constants';
import uuid from 'uuid/v4';

import {
	FlatList
} from 'react-native';

import {
	Navbar,
	PullRefresh
} from 'src/shared/components';

import {
	CatalogProductList
} from 'src/scenes/catalog/containers';

import {
	TranslateAndOpacityAnimation
} from 'src/shared/animations';

const Wrapper = styled.View`
	flex: 1;
	align-items: center;
	background-color: ${constants.colors.default}
`;

const catalogs = [
	{
		title: 'T-Shirts I',
		key: uuid()
	},
	{
		title: 'T-Shirts II',
		key: uuid()
	},
	{
		title: 'T-Shirts III',
		key: uuid()
	},
	{
		title: 'T-Shirts IV',
		key: uuid()
	},
	{
		title: 'T-Shirts V',
		key: uuid()
	},
	{
		title: 'T-Shirts VI',
		key: uuid()
	},
	{
		title: 'T-Shirts VII',
		key: uuid()
	},
	{
		title: 'T-Shirts VIII',
		key: uuid()
	}
];

export default class CatalogScene extends Component {
	static navigationOptions = {
		header: null
	}

	constructor (props) {
		super(props);

		this.state = {
			isFetching: false
		};
	}

	handleCatalogsRefresh = () => {
		this.setState({
			isFetching: true
		});

		setTimeout(() => {
			this.setState({
				isFetching: false
			});
		}, 5000);
	}

	render () {
		const {
			isFetching
		} = this.state;

		return (
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

				<PullRefresh
					isRefreshing={isFetching}
					onRefresh={this.handleCatalogsRefresh}
				>
					<FlatList
						data={catalogs}
						scrollEnabled={false}
						renderItem={(data) => {
							const {
								item,
								index
							} = data;

							return (
								<TranslateAndOpacityAnimation
									delayMultiplier={index}
									doTranslateY
									doTranslateX={false}
									doOpacity={false}
								>
									<CatalogProductList
										title={item.title}
										isLastItem={index === (catalogs.length - 1)}
										isFirstItem={index === 0}
									/>
								</TranslateAndOpacityAnimation>
							);
						}}
					/>
				</PullRefresh>
			</Wrapper>
		);
	}
}
