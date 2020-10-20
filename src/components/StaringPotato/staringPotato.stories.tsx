import React from "react";
import { Meta, Story } from "@storybook/react";
import { StaringPotato } from "./index";

export default {
  title: "Potato Spring Animations/Staring Potato",
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

const Template: Story = args => <StaringPotato {...args} />;

export const Default = Template.bind({});
Default.args = {};
