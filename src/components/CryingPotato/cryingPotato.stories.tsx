import React from "react";
import { Meta, Story } from "@storybook/react";
import { CryingPotato } from "./index";

export default {
  title: "Potato Spring Animations/Crying Potato",
  component: CryingPotato,
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
        <p>Click me!</p>
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: Story = args => <CryingPotato {...args} />;

export const Default = Template.bind({});
Default.args = {};
