import React from "react";
import { Meta, Story } from "@storybook/react";
import { SproutingPotato, SproutingPotatoProps } from "./index";

export default {
  title: "react-spring/Sprouting Potato",
  component: SproutingPotato,
} as Meta;

const Template: Story<SproutingPotatoProps> = args => (
  <SproutingPotato {...args} />
);

export const Default = Template.bind({});

export const Slow = Template.bind({});
Slow.args = {
  duration: 2000,
};

export const Fast = Template.bind({});
Fast.args = {
  duration: 500,
};
