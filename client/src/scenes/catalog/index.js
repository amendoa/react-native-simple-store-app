import React, {
	Component
} from 'react';

import styled from 'styled-components/native';
import constants from 'src/modules/constants';
import PropTypes from 'prop-types';

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

import {
	connect
} from 'react-redux';

const Wrapper = styled.View`
	flex: 1;
	align-items: center;
	background-color: ${constants.colors.default}
`;

class CatalogScene extends Component {
	constructor (props) {
		super(props);

		this.state = {
			isRefreshing: false,
			isLoadingMore: false,
			currentPage: 1,
			itemsByPage: 3
		};
	}

	handleCatalogsRefresh = () => {
		this.setState({
			isRefreshing: true
		});

		setTimeout(() => {
			this.setState({
				isRefreshing: false
			});
		}, 5000);
	}

	handleCatalogsLoadMore = () => {
		this.setState({
			isLoadingMore: true
		});

		setTimeout(() => {
			this.setState({
				isLoadingMore: false
			});
		}, 5000);
	}

	render () {
		const {
			isRefreshing,
			isLoadingMore,
			currentPage,
			itemsByPage
		} = this.state;

		const {
			catalogData
		} = this.props;

		const {
			result
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
							onPress: () => {
							}
						}
					]}
				/>

				<PullRefresh
					isRefreshing={isRefreshing}
					isLoadingMore={isLoadingMore}
					onRefresh={this.handleCatalogsRefresh}
					onLoadMore={this.handleCatalogsLoadMore}
				>
					<FlatList
						data={result}
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
										isLastItem={index === (result.length - 1)}
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

CatalogScene.propTypes = {
	catalogData: PropTypes.shape({}).isRequired
};

const mapStateToProps = state => ({
	catalogData: state.catalog
});

export default connect(
	mapStateToProps,
	null
)(CatalogScene);
