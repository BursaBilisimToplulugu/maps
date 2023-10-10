import Input from '@/app/common/components/Input';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Input',
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;
type Story<T> = StoryObj<T>;

export const Single: Story<(typeof Input)['Single']> = (args: any) => (
  <Input.Single {...args} />
);
Single.args = {};

export const Simple: Story<typeof Input> = (args: any) => <Input {...args} />;
Simple.args = {
  label: 'Name',
  placeholder: 'Enter your name',
};
