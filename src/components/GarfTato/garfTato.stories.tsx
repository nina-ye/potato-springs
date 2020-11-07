import React from "react";
import { Meta, Story } from "@storybook/react";
import { GarfPotato } from "./index";

export default {
  title: "react-spring/Garfield Potato",
  component: GarfPotato,
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
        <p style={{ marginTop: "-10px" }}>Drag me!</p>
      </div>
    ),
  ],
} as Meta;

const Template: Story = args => <GarfPotato {...args} />;

export const Default = Template.bind({});
