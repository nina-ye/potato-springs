import React from "react";
import { Meta, Story } from "@storybook/react";
import { DancingPotato } from "./index";

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

const Template: Story = args => <DancingPotato {...args} />;

export const Default = Template.bind({});
