import React from "react";
import { Meta, Story } from "@storybook/react";
import { InvisiblePotato } from "./index";

export default {
  title: "Potato Spring Animations/Invisible Potato",
  component: InvisiblePotato,
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

const Template: Story = args => <InvisiblePotato {...args} />;

export const Default = Template.bind({});
