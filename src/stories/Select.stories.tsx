import Select from '@/app/common/components/Select';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Select',
  component: Select,
  args: {},
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof Select>;

export const Default = (args: Story['args']) => {
  return <Select placeholder="3D Design" />;
};
