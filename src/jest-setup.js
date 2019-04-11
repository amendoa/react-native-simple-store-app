import * as RN from 'react-native';

jest.mock('react-native-gesture-handler', () => ({
	PanGestureHandler: 'View',
	State: {},
	ScrollView: 'View'
}));

jest.mock('react-navigation', () => ({
	withNavigation: component => component,
	SafeAreaView: 'View'
}));

RN.Animated.loop = () => ({
	start: () => jest.fn(),
	reset: () => jest.fn()
});

console.warn = () => {};
