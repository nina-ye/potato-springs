import React from "react";
import { Meta, Story } from "@storybook/react";
import { DancingPotato, DancingPotatoProps } from "./index";

export default {
  title: "react-spring/Dancing Potato",
  component: DancingPotato,
  decorators: [
    Story => (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Story />
        <p style={{ marginTop: "-10px" }}>Click me!</p>
      </div>
    ),
  ],
} as Meta;

const Template: Story<DancingPotatoProps> = args => <DancingPotato {...args} />;

export const Default = Template.bind({});

export const SideBounce = Template.bind({});
SideBounce.args = {
  friction: 10,
};

export const Glide = Template.bind({});
Glide.args = {
  friction: 100,
};
