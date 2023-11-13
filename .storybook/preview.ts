import type { Preview } from '@storybook/react';
import '../src/app/common/assets/styles/globals.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    globalTypes: {
      darkMode: {
        defaultValue: true,
      },
      className: {
        defaultValue: 'dark',
      },
    },
    themes: {
      clearable: false,
      list: [
        {
          name: 'Light',
          class: [],
          color: '#ffffff',
          default: true,
        },
        {
          name: 'Dark',
          class: ['dark'],
          color: '#000000',
        },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
