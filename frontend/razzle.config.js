const path = require('path');

let voltoConfig;

try {
  voltoConfig = require('@plone/volto/razzle.config');
} catch (error) {
  throw new Error(
    'Não foi possível carregar "@plone/volto/razzle.config". ' +
    'Verifique se o pacote @plone/volto foi instalado na raiz do frontend.'
  );
}
  voltoConfig.options = {
    ...(voltoConfig.options || {}),
    disableWebpackbar: true,
  };


const modifyWebpackConfig = voltoConfig.modifyWebpackConfig;

voltoConfig.modifyWebpackConfig = (options) => {
  const config = modifyWebpackConfig(options);

  if (process.platform === 'win32') {
    config.resolve.plugins = config.resolve.plugins.filter(
      (plugin) => plugin.constructor.name !== 'RelativeResolverPlugin',
    );

    const lessRule = config.module.rules.find(
      (rule) =>
        rule.test instanceof RegExp &&
        rule.test.test('.less') &&
        rule.use?.some((loader) => loader.loader?.includes('less-loader')),
    );
    const voltoThemePath = path.resolve(
      path.dirname(require.resolve('@plone/volto')),
      '..',
      'theme',
    );
    const semanticUILessPath = path.dirname(
      require.resolve('semantic-ui-less/package.json'),
    );

    if (lessRule && Array.isArray(lessRule.include)) {
      lessRule.include.push(voltoThemePath, semanticUILessPath);
    }
  }

  config.resolve.alias['react-virtualized$'] = require.resolve('react-virtualized');

  return config;
};

module.exports = voltoConfig;