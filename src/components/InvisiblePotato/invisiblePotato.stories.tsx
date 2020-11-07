import React from "react";
import { Meta, Story } from "@storybook/react";
import { InvisiblePotato } from "./index";

export default {
  title: "react-spring/Invisible Potato",
  component: InvisiblePotato,
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

const Template: Story = args => <InvisiblePotato {...args} />;

export const Default = Template.bind({});
