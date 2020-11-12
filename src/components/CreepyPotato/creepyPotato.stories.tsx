import React from "react";
import { Meta, Story } from "@storybook/react";
import { CreepyPotato } from "./index";

export default {
  title: "react-spring/Creepy Potato",
  component: CreepyPotato,
} as Meta;

const Template: Story = args => <CreepyPotato {...args} />;

export const Default = Template.bind({});
