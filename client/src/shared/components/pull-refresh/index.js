import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import constants from 'src/modules/constants';

// eslint-disable-next-line
import {
	PanGestureHandler,
	State,
	ScrollView
} from 'react-native-gesture-handler';

import {
	Animated
} from 'react-native';


import {
	Spinner
} from 'src/shared/components';

const RefreshAnimationContainer = styled(Animated.View)`
	position: absolute;
	display: flex;
	width: 100%;
	height: ${props => props.height};
	align-items: center;
	justify-content: center;
	z-index: 1;
`;

const SpinnerContainer = styled(Animated.View)``;

const Wrapper = styled.View`
	width: 100%;
	flex: 1;
`;

const Container = styled(Animated.View)`
	background-color: ${constants.colors.default};
`;

export default class PullRefreshComponent extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			gestureEnabled: true,
			refreshHeight: new Animated.Value(0),
			refreshingIsOpen: false
		};

		this.scrollRef = React.createRef();
		this.panRef = React.createRef();
		this.spinner = React.createRef();
	}

	componentDidMount () {
		this.runAnimation();
	}

	componentDidUpdate () {
		this.runAnimation();
	}

	hangleGestureEvent = ({ nativeEvent }) => {
		const {
			gestureEnabled,
			refreshHeight
		} = this.state;

		const {
			refreshAnimationHeight,
			isRefreshing,
			translationYDivider
		} = this.props;

		const {
			translationY
		} = nativeEvent;

		if (!gestureEnabled || translationY < 0) {
			return;
		}

		if (!isRefreshing) {
			const newrefreshHeightValue = translationY * translationYDivider;

			this.spinner.current.setPercentage((newrefreshHeightValue / refreshAnimationHeight) * 100);

			refreshHeight.setValue(newrefreshHeightValue);
		}
	}

	handleStateChange = ({ nativeEvent }) => {
		const {
			refreshAnimationHeight,
			onRefresh,
			isRefreshing,
			translationYDivider
		} = this.props;

		const {
			translationY,
			state
		} = nativeEvent;

		const endStates = [
			State.CANCELLED,
			State.END,
			State.FAILED
		];

		if (endStates.includes(state)) {
			if (!isRefreshing) {
				this.spinner.current.setPercentage(0);

				if ((translationY * translationYDivider) >= refreshAnimationHeight) {
					this.setState({
						refreshingIsOpen: true
					});

					this.runRefreshingAnimation(refreshAnimationHeight);

					onRefresh();
				} else {
					this.runRefreshingAnimation(0);
				}
			}
		}
	}

	handleScroll = ({ nativeEvent }) => {
		const {
			gestureEnabled
		} = this.state;

		const {
			scrollLimitToLoadMore,
			onLoadMore,
			isLoadingMore
		} = this.props;

		const {
			layoutMeasurement,
			contentOffset,
			contentSize
		} = nativeEvent;

		if (
			(layoutMeasurement.height + contentOffset.y) >=	(contentSize.height - scrollLimitToLoadMore)
			&& !isLoadingMore
		) {
			onLoadMore();
		}

		if (contentOffset.y <= 0 && !gestureEnabled) {
			this.setState({
				gestureEnabled: true
			});
		}

		if (contentOffset.y > 0 && gestureEnabled) {
			this.setState({
				gestureEnabled: false
			});
		}
	};

	runAnimation = () => {
		const {
			isRefreshing
		} = this.props;

		const {
			refreshingIsOpen
		} = this.state;

		if (!isRefreshing && refreshingIsOpen) {
			this.setState({
				refreshingIsOpen: false
			});

			this.runRefreshingAnimation(0);
		}
	}

	runRefreshingAnimation = (toValue) => {
		const {
			refreshHeight
		} = this.state;

		Animated.spring(refreshHeight, {
			toValue,
			bounciness: 12,
			useNativeDriver: true
		}).start();
	}

	render () {
		const {
			gestureEnabled,
			refreshHeight
		} = this.state;

		const {
			refreshAnimationHeight,
			isRefreshing,
			children
		} = this.props;

		const spinnerOpacity = refreshHeight.interpolate({
			inputRange: [
				0, refreshAnimationHeight
			],
			outputRange: [
				0, 1
			],
			extrapolate: 'clamp'
		});

		const spinnerTranslate = refreshHeight.interpolate({
			inputRange: [
				0, refreshAnimationHeight
			],
			outputRange: [
				5, -10
			],
			extrapolate: 'clamp'
		});
		console.log('pull refresh render');
		return (
			<Wrapper>
				<RefreshAnimationContainer
					height={refreshAnimationHeight}
				>
					<SpinnerContainer
						style={{
							opacity: spinnerOpacity,
							transform: [
								{
									translateY: spinnerTranslate
								}
							]
						}}
					>
						<Spinner
							ref={this.spinner}
							isLoading={isRefreshing}
						/>
					</SpinnerContainer>
				</RefreshAnimationContainer>
				<Container
					style={{
						transform: [
							{
								translateY: refreshHeight
							}
						]
					}}
				>
					<PanGestureHandler
						enabled={gestureEnabled}
						ref={this.panRef}
						activeOffsetY={5}
						failOffsetY={-5}
						onGestureEvent={this.hangleGestureEvent}
						onHandlerStateChange={this.handleStateChange}
					>

						<ScrollView
							ref={this.scrollRef}
							scrollEventThrottle={40}
							onScroll={this.handleScroll}
							waitFor={[this.panRef]}
							scrollEnabled={!isRefreshing}
						>
							{
								children
							}
						</ScrollView>
					</PanGestureHandler>
				</Container>
			</Wrapper>
		);
	}
}

PullRefreshComponent.defaultProps = {
	children: null,
	refreshAnimationHeight: 60,
	translationYDivider: 0.5,
	scrollLimitToLoadMore: 200,
	isRefreshing: false,
	isLoadingMore: false,
	onRefresh: () => {},
	onLoadMore: () => {}
};

PullRefreshComponent.propTypes = {
	children: PropTypes.node,
	refreshAnimationHeight: PropTypes.number,
	translationYDivider: PropTypes.number,
	scrollLimitToLoadMore: PropTypes.number,
	isRefreshing: PropTypes.bool,
	isLoadingMore: PropTypes.bool,
	onRefresh: PropTypes.func,
	onLoadMore: PropTypes.func
};
