import React, {
	Component
} from 'react';

import styled from 'styled-components/native';
import PropTypes from 'prop-types';

import {
	withNavigation
} from 'react-navigation';

import {
	Image,
	Tag,
	Button
} from 'src/shared/components';

const Wrapper = styled.View`
	
`;

const TagContainer = styled.View`
	position: absolute;
	bottom: 0;
`;

const ImageContainer = styled.View`
	margin: 0px 0px 16px 16px;
`;

class CatalogProductCardComponent extends Component {
	handlePressProduct = () => {
		const {
			navigation,
			model
		} = this.props;

		navigation.navigate('productDetails', {
			product: model
		});
	}

	render () {
		const {
			model
		} = this.props;

		const {
			imageSource,
			imageThumbnailSource,
			price
		} = model;

		return (
			<Button
				onPress={this.handlePressProduct}
				buttonPadding="0px 0px 0px 0px"
			>
				<Wrapper>
					<ImageContainer>
						<Image
							source={imageSource}
							thumbnailSource={imageThumbnailSource}
							width={180}
							height={180}
						/>
					</ImageContainer>
					<TagContainer>
						<Tag
							primary
							label={{
								default: true,
								text: price
							}}
						/>
					</TagContainer>
				</Wrapper>
			</Button>
		);
	}
}

CatalogProductCardComponent.defaultProps = {
	navigation: {
		navigate: () => {}
	},
	model: {}
};

CatalogProductCardComponent.propTypes = {
	navigation: PropTypes.shape({}),
	model: PropTypes.shape({
		imageSource: PropTypes.string,
		imageThumbnailSource: PropTypes.string,
		price: PropTypes.string,
	})
};

export default withNavigation(CatalogProductCardComponent);
