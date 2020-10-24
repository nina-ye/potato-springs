import React from "react";
import { Meta, Story } from "@storybook/react";
import { SpringyPotato } from "./index";

export default {
  title: "Potato Spring Animations/Springy Potato",
  component: SpringyPotato,
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
        <p style={{ marginTop: "-10px" }}>Pinch me!</p>
      </div>
    ),
  ],
} as Meta;

const Template: Story = args => <SpringyPotato {...args} />;

export const Default = Template.bind({});
