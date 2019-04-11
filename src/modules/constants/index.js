import {
	isDevelopmentEnv
} from 'src/modules/utils';

const devConfig = require('src/configs/dev.json');
const prodConfig = require('src/configs/prod.json');

export default isDevelopmentEnv() ? devConfig : prodConfig;
