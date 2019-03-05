import React, {
	Component
} from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import constants from 'src/modules/constants';

import {
	ScrollView,
	Animated,
	Easing,
	PanResponder
} from 'react-native';

import {
	Spinner
} from 'src/shared/components';

const Wrapper = styled.View`
	flex: 1;
	background-color: red;
`;

const Container = styled(Animated.View)`
	background-color: ${constants.colors.default};
	z-index: 1;
`;

const RefreshAnimationContainer = styled.View`
	position: absolute;
	display: flex;
	width: 100%;
	height: ${props => props.refreshAnimationHeight};
	align-items: center;
	justify-content: center;
`;

export default class PullRefreshComponent extends Component {
	constructor (props) {
		super(props);

		this.state = {
			scrollY: new Animated.Value(0),
			refreshHeight: new Animated.Value(0),
			refreshingIsOpen: false,
			spinnerPullPercentage: 0,
			scrollIsEnabled: true
		};

		this.scrollViewRef = React.createRef();
	}

	componentWillMount () {
		this._panResponder = PanResponder.create({
			onStartShouldSetPanResponder: this.handleStartShouldSetPanResponder,
			onMoveShouldSetPanResponder: this.handleMoveShouldSetPanResponder,
			onPanResponderMove: this.handlePanResponderMove,
			onPanResponderRelease: this.handlePanResponderEnd,
			onPanResponderTerminate: this.handlePanResponderEnd,
			onPanResponderGrant: () => this.setState({ scrollIsEnabled: false }),
		});
	}

	componentDidMount () {
		this.runAnimation();
	}

	componentDidUpdate () {
		this.runAnimation();
	}

	handleStartShouldSetPanResponder = () => {
		const {
			scrollIsEnabled
		} = this.state;

		const {
			isRefreshing
		} = this.props;

		return !isRefreshing;
	}

	handleMoveShouldSetPanResponder = () => {
		const {
			scrollIsEnabled
		} = this.state;

		const {
			isRefreshing
		} = this.props;

		return !isRefreshing;
	}

	handlePanResponderMove = (event, gestureState) => {
		const {
			scrollY,
			refreshHeight
		} = this.state;

		const {
			refreshAnimationHeight,
			isRefreshing
		} = this.props;

		if (!isRefreshing) {
			if ((gestureState.dy >= 0 && scrollY._value === 0) || (refreshHeight._value > 0)) {
				const newrefreshHeightValue = gestureState.dy * 0.5;

				this.setState({
					spinnerPullPercentage: (newrefreshHeightValue / refreshAnimationHeight) * 100
				});

				refreshHeight.setValue(newrefreshHeightValue);
			}

			this.scrollViewRef.current.scrollTo({
				y: -1 * gestureState.dy,
				animated: true,
			});
		}
	}

	handlePanResponderEnd = () => {
		const {
			refreshAnimationHeight,
			onRefresh,
			isRefreshing
		} = this.props;

		const {
			refreshHeight,
			scrollY
		} = this.state;

		if (!isRefreshing) {
			if (refreshHeight._value >= refreshAnimationHeight) {
				this.setState({
					refreshingIsOpen: true
				});

				this.runRefreshingAnimation(refreshAnimationHeight);

				onRefresh();
			} else {
				this.runRefreshingAnimation(0);
			}
		}

		this.setState({
			scrollIsEnabled: true
		});

		// this.setState({
		// 	spinnerPullPercentage: 0
		// });
	}

	handleScrollToTop = () => {
		const {
			scrollY,
			scrollIsEnabled
		} = this.state;

		if (scrollY._value === 0 && scrollIsEnabled) {
			this.setState({
				scrollIsEnabled: false
			});
		}
	}

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
		}).start();

		// Animated.timing(refreshHeight, {
		// 	toValue,
		// 	duration: 500,
		// 	// easing: Easing.elastic(2),
		// 	easing: Easing.bezier(0.86, -0.36, 0.97, 0.66),
		// 	useNativeDriver: true
		// }).start();
	}

	handleScroll = (event) => {
		const {
			scrollY
		} = this.state;

		scrollY.setValue(event.nativeEvent.contentOffset.y);
	}

	render () {
		const {
			contentView,
			refreshAnimationHeight,
			isRefreshing
		} = this.props;

		const {
			refreshHeight,
			spinnerPullPercentage,
			scrollIsEnabled
		} = this.state;

		// scrollEnabled={scrollIsEnabled && !isRefreshing}
		return (
			<Wrapper
				{
				...this._panResponder.panHandlers
				}
			>
				<RefreshAnimationContainer
					refreshAnimationHeight={refreshAnimationHeight}
				>
					<Spinner
						isLoading={isRefreshing}
						percentage={spinnerPullPercentage}
					/>
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
					<ScrollView
						onScroll={this.handleScroll}
						scrollEnabled={false}
						showsVerticalScrollIndicator={false}
						onTouchEnd={() => {
							this.handleScrollToTop();
						}}
						onScrollEndDrag={() => {
							this.handleScrollToTop();
						}}
						ref={this.scrollViewRef}
					>
						{
							React.cloneElement(contentView, {
								scrollEnabled: false
							})
						}
					</ScrollView>
				</Container>
			</Wrapper>
		);
	}
}

PullRefreshComponent.defaultProps = {
	contentView: null,
	refreshAnimationHeight: 60,
	isRefreshing: false,
	onRefresh: () => {}
};

PullRefreshComponent.propTypes = {
	contentView: PropTypes.node,
	refreshAnimationHeight: PropTypes.number,
	isRefreshing: PropTypes.bool,
	onRefresh: PropTypes.func
};
