import transporteReducer from './reducers/transporte';
import applyRoutes from './config';

const applyConfig = (config) => {
  config.addonReducers = {
    ...(config.addonReducers || {}),
    transporte: transporteReducer,
  };

  return applyRoutes(config);
};

export default applyConfig;