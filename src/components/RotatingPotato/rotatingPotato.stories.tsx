import React from "react";
import { Meta, Story } from "@storybook/react";
import { RotatingPotato } from "./index";

export default {
  title: "react-spring/Rotating Potato",
  component: RotatingPotato,
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

const Template: Story = args => <RotatingPotato {...args} />;

export const Default = Template.bind({});
