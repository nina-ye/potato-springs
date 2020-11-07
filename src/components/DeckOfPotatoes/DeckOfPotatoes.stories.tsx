import React from "react";
import { Meta, Story } from "@storybook/react";
import { DeckOfPotatoes } from "./index";

export default {
  title: "Framer Motion/Deck of Potatoes",
  component: DeckOfPotatoes,
} as Meta;

const Template: Story = args => <DeckOfPotatoes {...args} />;

export const Default = Template.bind({});
