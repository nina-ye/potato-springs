import React from "react";
import { Meta, Story } from "@storybook/react";
import { DeckOfPotatoes } from "./index";

export default {
  title: "Framer Motion/Deck of Potatoes",
  component: DeckOfPotatoes,
  decorators: [
    Story => (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: Story = args => <DeckOfPotatoes {...args} />;

export const Default = Template.bind({});
