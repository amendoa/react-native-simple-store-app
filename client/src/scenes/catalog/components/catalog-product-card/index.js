import React from 'react';

import styled from 'styled-components/native';
import PropTypes from 'prop-types';

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

const handlePressProduct = () => {
	console.log('on press product');
};

const CatalogProductCardComponent = (props) => {
	const {
		imageSource,
		imageThumbnailSource,
		price
	} = props;

	return (
		<Button
			onPress={handlePressProduct}
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
};

CatalogProductCardComponent.defaultProps = {
	imageSource: '',
	imageThumbnailSource: '',
	price: ''
};

CatalogProductCardComponent.propTypes = {
	imageSource: PropTypes.string,
	imageThumbnailSource: PropTypes.string,
	price: PropTypes.string
};

export default CatalogProductCardComponent;
