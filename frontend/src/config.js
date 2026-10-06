import { defineMessages } from 'react-intl';

const messages = defineMessages({
  siteTitle: {
    id: 'site.title',
    defaultMessage: 'Transporte Porto do Recife',
  },
});

export default function applyConfig(config) {
  config.settings = {
    ...config.settings,
    siteTitle: messages.siteTitle.defaultMessage,
  };
  return config;
}