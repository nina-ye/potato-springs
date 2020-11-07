import React from "react";
import { Meta, Story } from "@storybook/react";
import { CreepyPotato } from "./index";

export default {
  title: "react-spring/Creepy Potato",
  component: CreepyPotato,
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
      </div>
    ),
  ],
} as Meta;

const Template: Story = args => <CreepyPotato {...args} />;

export const Default = Template.bind({});
