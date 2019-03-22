import React, {
	Component
} from 'react';

import styled from 'styled-components/native';
import constants from 'src/modules/constants';
import PropTypes from 'prop-types';
import * as catalogActions from 'src/redux/actions/catalog';

import {
	FlatList,
	View
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

import {
	connect
} from 'react-redux';

import {
	bindActionCreators
} from 'redux';

const Wrapper = styled.SafeAreaView`
	flex: 1;
	align-items: center;
	background-color: ${constants.COLORS.DEFAULT};
`;

class CatalogScene extends Component {
	constructor (props) {
		super(props);

		this.state = {};
	}

	componentDidMount () {
		const {
			catalogDispatchActions
		} = this.props;

		catalogDispatchActions.getCatalogs({
			resetCurrentPage: false
		});
	}

	handleCatalogsRefresh = () => {
		const {
			catalogDispatchActions
		} = this.props;

		catalogDispatchActions.refreshGetCatalogs({
			resetCurrentPage: true
		});
	}

	handleCatalogsLoadMore = () => {
		const {
			catalogDispatchActions
		} = this.props;

		catalogDispatchActions.getCatalogs({
			resetCurrentPage: false
		});
	}

	handleBagIconPress = () => {
		const {
			navigation
		} = this.props;

		navigation.navigate('bag');
	}

	render () {
		const {
			catalogData
		} = this.props;

		const {
			result,
			isFetching,
			isRefreshing,
			canLoadMore
		} = catalogData;

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
							onPress: this.handleBagIconPress
						}
					]}
				/>
				<PullRefresh
					isRefreshing={isRefreshing}
					isFetching={isFetching}
					onRefresh={this.handleCatalogsRefresh}
					onLoadMore={this.handleCatalogsLoadMore}
					canLoadMore={canLoadMore}
				>
					<FlatList
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
									<CatalogProductList
										title={title}
										products={products}
										isLastItem={index === (result.length - 1)}
										isFirstItem={index === 0}
									/>
								</TranslateAndOpacityAnimation>
							);
						}}
					/>
					{
						isFetching && (
							<View>
								<CatalogProductList
									title=""
									isLastItem={false}
									isFirstItem
									isFetching
								/>
								<CatalogProductList
									title=""
									isLastItem={false}
									isFirstItem
									isFetching
								/>
							</View>
						)
					}
				</PullRefresh>
			</Wrapper>
		);
	}
}

CatalogScene.propTypes = {
	catalogData: PropTypes.shape({}).isRequired,
	catalogDispatchActions: PropTypes.shape({}).isRequired,
	navigation: PropTypes.shape({}).isRequired
};

const mapStateToProps = state => ({
	catalogData: state.catalog
});

const mapDispatchToProps = dispatch => ({
	catalogDispatchActions: bindActionCreators(catalogActions, dispatch)
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CatalogScene);
