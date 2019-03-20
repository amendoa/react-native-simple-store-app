import {
	Catalog,
	ProductDetails
} from 'src/scenes';

import {
	Animated,
	Easing
} from 'react-native';

import {
	createStackNavigator,
	createAppContainer
} from 'react-navigation';

const CollapseExpand = (index, position) => {
	const inputRange = [
		index - 1,
		index,
		index + 1
	];

	const opacity = position.interpolate({
		inputRange,
		outputRange: [
			0,
			1,
			1
		]
	});

	const scaleY = position.interpolate({
		inputRange,
		outputRange: ([
			0,
			1,
			1
		])
	});

	return {
		opacity,
		transform: [
			{
				scaleY
			}
		]
	};
};

const SlideFromRight = (index, position, width) => {
	const translateX = position.interpolate({
		inputRange: [
			index - 1,
			index,
			index + 1
		],
		outputRange: [
			width,
			0,
			0
		]
	});

	const slideFromRight = {
		transform: [{
			translateX
		}]
	};
	return slideFromRight;
};

const TransitionConfiguration = () => ({
	transitionSpec: {
		duration: 500,
		easing: Easing.out(Easing.poly(4)),
		timing: Animated.timing,
		useNativeDriver: true,
	},
	screenInterpolator: (sceneProps) => {
		const {
			layout,
			position,
			scene
		} = sceneProps;

		const width = layout.initWidth;

		const {
			index,
			route
		} = scene;

		const params = route.params || {};
		const transition = params.transition || 'default';

		return {
			collapseExpand: CollapseExpand(index, position),
			default: SlideFromRight(index, position, width),
		}[transition];
	},
});

const AppNavigator = createStackNavigator({
	catalog: {
		screen: Catalog,
		navigationOptions: () => ({
			header: null
		})
	},
	productDetails: {
		screen: ProductDetails,
		navigationOptions: () => ({
			header: null
		})
	}
}, {
	transitionConfig: TransitionConfiguration
});

export default createAppContainer(AppNavigator);
