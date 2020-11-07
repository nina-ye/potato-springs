import React from "react";
import { Meta, Story } from "@storybook/react";
import { SadPotato, SadPotatoProps } from "./index";

export default {
  title: "react-spring/Sad Potato",
  component: SadPotato,
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

const Template: Story<SadPotatoProps> = args => <SadPotato {...args} />;

export const Default = Template.bind({});

export const Slow = Template.bind({});
Slow.args = {
  duration: 2000,
};

export const Fast = Template.bind({});
Fast.args = {
  duration: 500,
};
