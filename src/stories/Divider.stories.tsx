import Divider from "@/app/common/components/Divider";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Componenets/Divider",
  component: Divider,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ["vertical", "horizontal"],
      control: { type: "radio" },
    },
    size: {
      options: ["normal", "thick"],
      control: { type: "radio" },
    },
  },
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof Divider>;

// Vertical Divider with Normal Size
export const VerticalNormal: Story = (args: any) => <Divider {...args} />;
VerticalNormal.args = {
  variant: "vertical",
  size: "normal",
};

// Vertical Divider with Thick Size
export const VerticalThick: Story = (args: any) => <Divider {...args} />;
VerticalThick.args = {
  variant: "vertical",
  size: "thick",
};

// Horizontal Divider with Normal Size
export const HorizontalNormal: Story = (args: any) => <Divider {...args} />;
HorizontalNormal.args = {
  variant: "horizontal",
  size: "normal",
};

// Horizontal Divider with Thick Size
export const HorizontalThick: Story = (args: any) => <Divider {...args} />;
HorizontalThick.args = {
  variant: "horizontal",
  size: "thick",
};
