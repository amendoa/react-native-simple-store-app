import React, {
	Component
} from 'react';

import {
	Animated,
	Easing
} from 'react-native';

import styled from 'styled-components/native';
import constants from 'src/modules/constants';
import PropTypes from 'prop-types';

const Wrapper = styled.View`
	width: ${props => props.width};
	height: ${props => props.height};
	background-color: ${constants.COLORS.GRAY};
`;


const MainImage = styled(Animated.Image)`
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
`;

export default class ImageComponent extends Component {
	constructor (props) {
		super(props);
		this.state = {
			imageIsLoaded: false,
			mainImageOpacityAnimation: new Animated.Value(0),
			thumbImageOpacityAnimation: new Animated.Value(0)
		};
	}

	handleMainImageLoadEnd = () => {
		const {
			mainImageOpacityAnimation
		} = this.state;

		Animated.timing(mainImageOpacityAnimation, {
			toValue: 1,
			duration: 300,
			easing: Easing.ease,
			useNativeDriver: true
		}).start(() => {
			this.setState({
				imageIsLoaded: true
			});
		});
	}

	handleThumbnailLoadEnd = () => {
		const {
			thumbImageOpacityAnimation
		} = this.state;

		Animated.timing(thumbImageOpacityAnimation, {
			toValue: 1,
			duration: 300,
			easing: Easing.ease,
			useNativeDriver: true
		}).start();
	}

	render () {
		const {
			source,
			thumbnailSource,
			width,
			height
		} = this.props;

		const {
			imageIsLoaded,
			thumbImageOpacityAnimation,
			mainImageOpacityAnimation
		} = this.state;

		return (
			<Wrapper
				{
				...this.props
				}
			>
				{
					!imageIsLoaded && (
						<Animated.Image
							style={{
								opacity: thumbImageOpacityAnimation,
								width,
								height
							}}
							source={{ uri: thumbnailSource }}
							onLoadEnd={this.handleThumbnailLoadEnd}
							fadeDuration={0}
							blurRadius={0.5}
						/>
					)
				}
				<MainImage
					style={{
						opacity: mainImageOpacityAnimation,
						width,
						height
					}}
					source={{ uri: source }}
					onLoadEnd={this.handleMainImageLoadEnd}
					fadeDuration={0}

				/>
			</Wrapper>
		);
	}
}

ImageComponent.defaultProps = {
	source: '',
	thumbnailSource: '',
	width: 100,
	height: 100,
};

ImageComponent.propTypes = {
	source: PropTypes.string,
	thumbnailSource: PropTypes.string,
	width: PropTypes.number,
	height: PropTypes.number
};
