import Rating from '@/app/common/components/Rating';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Rating',
  component: Rating,
  args: {},
} satisfies Meta<typeof Rating>;

export default meta;
type Story = StoryObj<typeof Rating>;

export const Default = (args: Story['args']) => {
  return <Rating ratingCount={200} score={4.6} />;
};
