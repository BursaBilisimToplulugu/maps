import type { Preview } from '@storybook/react';
import '../src/app/common/assets/styles/globals.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    globalTypes: {
      darkMode: {
        stylePreview: true,
        darkClass: 'dark',
        lightClass: 'light',
      },
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
