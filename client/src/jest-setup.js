import Animated from 'react-native';


jest.mock('react-native-gesture-handler', () => ({
	PanGestureHandler: 'View',
	State: {},
	ScrollView: 'View'
}));

jest.mock('react-navigation', () => ({
	withNavigation: component => component,
	SafeAreaView: 'View'
}));

// Animated.loop = () => ({
// 	start: () => {}
// });

jest.mock('Animated', Animated);

console.warn = () => {};
