import {
	createStackNavigator,
	createAppContainer
} from 'react-navigation';

import {
	Catalog
} from 'src/scenes';


const AppNavigator = createStackNavigator({
	Catalog: {
		screen: Catalog
	}
});

export default createAppContainer(AppNavigator);
