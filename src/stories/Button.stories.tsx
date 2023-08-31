import Button from '@/app/common/components/Button';
import Icon from '@/app/common/components/Icon';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'white',
      values: [
        {
          name: 'white',
          value: '#FFFFFF',
        },
        {
          name: 'black',
          value: '#000000',
        },
      ],
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['neutral', 'light', 'dark'],
      control: { type: 'radio' },
    },
    size: {
      options: ['small', 'medium'],
      control: { type: 'radio' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

// Variants
export const Neutral: Story = {
  args: {
    variant: 'neutral',
    size: 'medium',
    disabled: false,
  },
  render: ({ ...rest }) => <Button {...rest}>Neutral</Button>,
};

export const Light: Story = {
  args: {
    variant: 'light',
    size: 'medium',
    disabled: false,
  },
  render: ({ ...rest }) => <Button {...rest}>Light</Button>,
};

export const Dark: Story = {
  args: {
    variant: 'dark',
    size: 'medium',
    disabled: false,
  },
  parameters: {
    backgrounds: {
      default: 'black',
      values: [
        {
          name: 'white',
          value: '#FFFFFF',
        },
        {
          name: 'black',
          value: '#000000',
        },
      ],
    },
  },
  render: ({ ...rest }) => <Button {...rest}>Dark</Button>,
};

// Sizes
export const Small: Story = {
  args: {
    variant: 'neutral',
    size: 'small',
    disabled: false,
  },
  render: ({ ...rest }) => <Button {...rest}>Small</Button>,
};

export const Medium: Story = {
  args: {
    variant: 'neutral',
    size: 'medium',
    disabled: false,
  },
  render: ({ ...rest }) => <Button {...rest}>Medium</Button>,
};

// Disabled
export const Disabled: Story = {
  args: {
    variant: 'neutral',
    size: 'medium',
    disabled: true,
  },
  render: ({ ...rest }) => <Button {...rest}>Disabled</Button>,
};

// Left Icon
export const LeftIcon: Story = {
  args: {
    variant: 'neutral',
    size: 'medium',
    disabled: false,
  },
  render: ({ ...rest }) => (
    <Button {...rest}>
      <Icon.Star />
      Button
    </Button>
  ),
};

// Right Icon
export const RightIcon: Story = {
  args: {
    variant: 'light',
    size: 'medium',
    disabled: false,
  },
  render: ({ ...rest }) => (
    <Button {...rest}>
      Button
      <Icon.Star />
    </Button>
  ),
};
