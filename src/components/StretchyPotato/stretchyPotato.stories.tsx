import React from "react";
import { Meta, Story } from "@storybook/react";
import { StretchyPotato, StretchyPotatoProps } from "./index";

export default {
  title: "react-spring/Stretchy Potato",
  component: StretchyPotato,
  decorators: [
    Story => (
      <div
        style={{
          width: "100vw",
          height: "50vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Story />
        <p style={{ position: "absolute", marginTop: "500px", zIndex: 1 }}>
          Pinch me!
        </p>
      </div>
    ),
  ],
  argTypes: {
    mass: {
      control: { type: "range", min: 1, max: 500, step: 1 },
    },
    tension: {
      control: { type: "range", min: 1, max: 500, step: 1 },
    },
    friction: {
      control: { type: "range", min: 1, max: 500, step: 1 },
    },
  },
} as Meta;

const Template: Story<StretchyPotatoProps> = args => (
  <StretchyPotato {...args} />
);

export const Default = Template.bind({});
Default.args = {
  mass: 1,
  tension: 70,
  friction: 26,
};

export const Jiggly = Template.bind({});
Jiggly.args = {
  mass: 1,
  tension: 100,
  friction: 5,
};

export const Heavy = Template.bind({});
Heavy.args = {
  mass: 15,
  tension: 25,
  friction: 20,
};
