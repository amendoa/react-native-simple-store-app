import React, {
	PureComponent
} from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

import {
	FlatList,
	ScrollView
} from 'react-native';

import {
	CatalogProductCard
} from 'src/scenes/catalog/components';

import {
	TranslateAndOpacityAnimation
} from 'src/shared/animations';

import {
	Label,
	Sketch
} from 'src/shared/components';

const Wrapper = styled.View`
	margin-bottom: ${props => (props.isLastItem ? '32px' : '32px')};
	margin-top: ${props => (props.isFirstItem ? '32px' : '0px')};
`;

const Header = styled.View`
	flex-direction: row;
	justify-content: flex-start;
	align-items: flex-start;
	margin: 0px 0px 16px 24px;
`;

const Item = styled.View`
	margin-left: ${props => (props.isFirstItem ? '24px' : '0px')};
	margin-right: 24px;
`;

export default class CatalogProductListContainer extends PureComponent {
	render () {
		const {
			title,
			isLastItem,
			isFirstItem,
			isFetching,
			products
		} = this.props;

		if (isFetching) {
			return (
				<Wrapper
					isLastItem={isLastItem}
					isFirstItem={isFirstItem}
				>
					<Header>
						<Sketch
							height={15}
							width={50}
						/>
					</Header>
					<ScrollView
						horizontal
						showsHorizontalScrollIndicator={false}
					>
						<Item
							isFirstItem
						>
							<Sketch
								height={180}
								width={180}
							/>
						</Item>
						<Item>
							<Sketch
								height={180}
								width={180}
							/>
						</Item>
						<Item>
							<Sketch
								height={180}
								width={180}
							/>
						</Item>
					</ScrollView>
				</Wrapper>
			);
		}

		return (
			<Wrapper
				isLastItem={isLastItem}
				isFirstItem={isFirstItem}
			>
				<Header>
					<Label
						text={title}
						dark
						fontSize={18}
					/>
				</Header>
				<FlatList
					horizontal
					showsHorizontalScrollIndicator={false}
					data={products}
					renderItem={(data) => {
						const {
							item,
							index
						} = data;
						return (
							<TranslateAndOpacityAnimation
								delayMultiplier={index}
							>
								<Item
									isLastItem={index === (products.length - 1)}
									isFirstItem={index === 0}
								>
									<CatalogProductCard
										imageSource={item.imageSource}
										imageThumbnailSource={item.imageThumbnailSource}
										price={item.price}
									/>
								</Item>
							</TranslateAndOpacityAnimation>
						);
					}}
				/>
			</Wrapper>
		);
	}
}

CatalogProductListContainer.defaultProps = {
	title: '',
	isLastItem: false,
	isFirstItem: false,
	isFetching: false,
	products: []
};

CatalogProductListContainer.propTypes = {
	title: PropTypes.string,
	isLastItem: PropTypes.bool,
	isFirstItem: PropTypes.bool,
	isFetching: PropTypes.bool,
	products: PropTypes.arrayOf(PropTypes.shape({
		imageSource: PropTypes.string,
		imageThumbnailSource: PropTypes.string,
		price: PropTypes.string,
		key: PropTypes.string
	}))
};
