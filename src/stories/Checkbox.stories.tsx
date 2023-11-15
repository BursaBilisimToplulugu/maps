import Checkbox from '@/app/common/components/Checkbox';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Componenets/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: { type: 'radio' },
    },
    onChange: {
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const CheckboxDefault: Story = (args: any) => <Checkbox {...args} />;
CheckboxDefault.args = {
  label: 'Örnek bir checkbox label',
  onChange: () => {},
};

export const CheckboxDefaultCheckMark: Story = (args: any) => (
  <Checkbox {...args} />
);
CheckboxDefaultCheckMark.args = {
  label: 'Örnek bir checkbox label',
  onChange: () => {},
};
