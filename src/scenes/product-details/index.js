import React, {
	Component
} from 'react';

import {
	Dimensions
} from 'react-native';

import {
	BuyedModal
} from 'src/scenes/product-details/containers';

import styled from 'styled-components/native';
import constants from 'src/modules/constants';
import PropTypes from 'prop-types';
import Carousel from 'react-native-snap-carousel';

import {
	Navbar,
	Image,
	Tag,
	Button,
	InputNumber,
	SelectColor
} from 'src/shared/components';

const Wrapper = styled.SafeAreaView`
	flex: 1;
	align-items: center;
	background-color: ${constants.COLORS.DEFAULT};
`;

const Content = styled.View`
	flex: 1;
	align-items: center;
	background-color: ${constants.COLORS.DEFAULT};
	width: 100%;
	padding: 32px 0px 0px 24px;
`;

const ImageContainer = styled.View`
	flex: 1;
	width: 100%;
	padding-right: 24px;
`;

const InfoContainer = styled.View`
	width: 100%;
	position: absolute;
	flex-direction: row;
	justify-content: space-between;
	bottom: 0;
	padding: 0px 16px 16px 16px;
`;

const DirectionsContainer = styled.View`
	flex-direction: row;
`;

const ActionsContainer = styled.View`
	align-items: center;
	background-color: ${constants.COLORS.PRIMARY};
	width: 100%;
	padding: 16px 40px 24px 16px;
`;

const SelectContainer = styled.View`
	flex-direction: row;
	justify-content: space-between;
	margin-bottom: 32px;
	width: 100%;
`;

class ProductDetailsScene extends Component {
	constructor (props) {
		super(props);

		this.carousel = React.createRef();
		this.state = {
			productQuantity: 1,
			productColor: '3c8606bc-3ad7-4f57-be31-aa085bc7c280',
			isVisible: false
		};
	}

	renderItem = item => (
		<Image
			source={item.item.imageSource}
			thumbnailSource={item.item.imageThumbnailSource}
			width="100%"
			height="100%"
		/>
	)

	handleOnPressArrowLeft = () => {
		this.carousel.current.snapToPrev();
	}

	handleOnPressArrowRight = () => {
		this.carousel.current.snapToNext();
	}

	render () {
		const {
			productQuantity,
			productColor,
			isVisible
		} = this.state;

		const {
			navigation
		} = this.props;

		const currentProduct = navigation.getParam('product', {});

		const {
			images,
			price
		} = currentProduct;

		const caroulselWidth = Dimensions.get('window').width - 48;

		return (
			<Wrapper>
				<Navbar
					title="Details"
					leftIcon={{
						icon: {
							icon: 'arrow-left',
							width: '24',
							height: '24',
							dark: true
						},
						onPress: () => {
							navigation.navigate('catalog');
						}
					}}
				/>
				<BuyedModal
					isVisible={isVisible}
					handleCloseModal={() => {
						this.setState({
							isVisible: false
						});
					}}
				/>
				<Content>
					<ImageContainer>
						<Carousel
							ref={this.carousel}
							data={images}
							renderItem={this.renderItem}
							sliderWidth={caroulselWidth}
							itemWidth={caroulselWidth}
							layoutCardOffset={0}
						/>
						<InfoContainer>
							<Tag
								primary
								label={{
									default: true,
									text: price
								}}
							/>
							<DirectionsContainer>
								<Button
									primary
									width="40"
									height="40"
									icon={{
										icon: 'chevron-left',
										width: '24',
										height: '24',
										default: true
									}}
									onPress={this.handleOnPressArrowLeft}
								/>
								<Button
									primary
									width="40"
									height="40"
									icon={{
										icon: 'chevron-right',
										width: '24',
										height: '24',
										default: true
									}}
									buttonMargin="0px 0px 0px 16px"
									onPress={this.handleOnPressArrowRight}
								/>
							</DirectionsContainer>
						</InfoContainer>
					</ImageContainer>
					<ActionsContainer>
						<SelectContainer>
							<SelectColor
								items={[
									{
										color: '#ffffff',
										id: '3c8606bc-3ad7-4f57-be31-aa085bc7c280'
									},
									{
										color: '#ffb7c3',
										id: 'c7690ac0-1288-4323-b233-7ecda4c7399d'
									},
									{
										color: '#a6e0fe',
										id: '6e15c069-62ae-4979-8227-9f404543c9fc'
									}
								]}
								currentIdSelected={productColor}
								handleChangeValue={(id) => {
									this.setState({
										productColor: id
									});
								}}
							/>
							<InputNumber
								value={productQuantity}
								handleChangeValue={(value) => {
									this.setState({
										productQuantity: value
									});
								}}
							/>
						</SelectContainer>
						<Button
							default
							width="100%"
							height="48"
							text="add to bag"
							onPress={() => {
								this.setState({
									isVisible: true
								});
							}}
						/>
					</ActionsContainer>
				</Content>
			</Wrapper>
		);
	}
}

ProductDetailsScene.defaultProps = {
	navigation: {
		navigate: () => {}
	}
};

ProductDetailsScene.propTypes = {
	navigation: PropTypes.shape({})
};

export default ProductDetailsScene;
