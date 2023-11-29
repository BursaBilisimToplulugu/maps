import Switch from '@/app/common/components/Switch';
import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

const meta = {
  title: 'Components/Switch',
  component: Switch,
  args: {},
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default = (args: Story['args']) => {
  const [isActive, setisActive] = useState(false);
  return <Switch {...args} isActive={isActive} onClick={setisActive} />;
};

export const FormSimulation = (args: Story['args']) => {
  const [isActive, setisActive] = useState(false);
  return (
    <div className="flex flex-col">
      <p>Kullanim kosullarini kabul ediyor musun ?</p>
      <span>Kabul edilme durumu: {isActive ? 'evet' : 'hayir'}</span>
      <Switch {...args} isActive={isActive} onClick={setisActive} />
    </div>
  );
};
