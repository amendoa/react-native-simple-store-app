import React from 'react';
import styled from 'styled-components/native';
import uuid from 'uuid/v4';
import PropTypes from 'prop-types';

import {
	ScrollView
} from 'react-native';

import {
	CatalogProductCard
} from 'src/scenes/catalog/components';

import {
	Label
} from 'src/shared/components';

const Wrapper = styled.View`
	margin-bottom: ${props => (props.isLastItem ? '32px' : '32px')};
	margin-top: ${props => (props.isFirstItem ? '32px' : '0px')}
`;

const Header = styled.View`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: flex-start;
	margin: 0px 0px 16px 24px;
`;

const Item = styled.View`
	margin-left: ${props => (props.isFirstItem ? '24px' : '0px')};
	margin-right: 24px;
`;

const CatalogProductListContainer = (props) => {
	const {
		title,
		isLastItem,
		isFirstItem
	} = props;

	const items = [
		{
			imageSource: 'http://192.168.0.100:7070/images/product1.jpg',
			imageThumbnailSource: 'http://192.168.0.100:7070/thumbs/product1.jpg',
			price: '40,99$'
		},
		{
			imageSource: 'http://192.168.0.100:7070/images/product2.jpg',
			imageThumbnailSource: 'http://192.168.0.100:7070/thumbs/product2.jpg',
			price: '49,99$'
		}
	];

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
			<ScrollView
				horizontal
				showsHorizontalScrollIndicator={false}
			>
				{
					items.map((item, index) => (
						<Item
							key={uuid()}
							isLastItem={index === (items.length - 1)}
							isFirstItem={index === 0}
						>
							<CatalogProductCard
								imageSource={item.imageSource}
								imageThumbnailSource={item.imageThumbnailSource}
								price={item.price}
							/>
						</Item>
					))
				}
			</ScrollView>
		</Wrapper>
	);
};

CatalogProductListContainer.defaultProps = {
	title: '',
	isLastItem: false,
	isFirstItem: false
};

CatalogProductListContainer.propTypes = {
	title: PropTypes.string,
	isLastItem: PropTypes.bool,
	isFirstItem: PropTypes.bool
};

export default CatalogProductListContainer;
