import React from "react";
import { Meta, Story } from "@storybook/react";
import { StaringPotato, StaringPotatoProps } from "./index";

export default {
  title: "react-spring/Staring Potato",
  component: StaringPotato,
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
        <p style={{ marginTop: "-10px" }}>Hover over me!</p>
      </div>
    ),
  ],
} as Meta;

const Template: Story<StaringPotatoProps> = args => <StaringPotato {...args} />;

export const Default = Template.bind({});
Default.args = {
  configType: "default",
};

export const Gentle = Template.bind({});
Gentle.args = {
  configType: "gentle",
};

export const Wobbly = Template.bind({});
Wobbly.args = {
  configType: "wobbly",
};

export const Stiff = Template.bind({});
Stiff.args = {
  configType: "stiff",
};

export const Slow = Template.bind({});
Slow.args = {
  configType: "slow",
};

export const Molasses = Template.bind({});
Molasses.args = {
  configType: "molasses",
};
