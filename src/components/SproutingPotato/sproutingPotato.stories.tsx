import React from "react";
import { Meta, Story } from "@storybook/react";
import { SproutingPotato, SproutingPotatoProps } from "./index";

export default {
  title: "react-spring/Sprouting Potato",
  component: SproutingPotato,
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
      </div>
    ),
  ],
} as Meta;

const Template: Story<SproutingPotatoProps> = args => <SproutingPotato {...args} />;

export const Default = Template.bind({});

export const Slow = Template.bind({});
Slow.args = {
  duration: 2000,
};

export const Fast = Template.bind({});
Fast.args = {
  duration: 500,
};
