import React from "react";
import { Meta, Story } from "@storybook/react";
import { DancingPotato, DancingPotatoProps } from "./index";

export default {
  title: "Potato Spring Animations/Dancing Potato",
  component: DancingPotato,
  decorators: [
    Story => (
      <div
        style={{
          width: "100vw",
          height: "50vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
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
