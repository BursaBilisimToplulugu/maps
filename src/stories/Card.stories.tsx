import Card from '@/app/common/components/Card';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Card',
  component: Card,
  args: {},
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof Card>;

export const Default = (args: Story['args']) => {
  return <Card />;
};
