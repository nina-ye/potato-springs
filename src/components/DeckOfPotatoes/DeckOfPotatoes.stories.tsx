import React, { useState } from "react";
import { Meta, Story } from "@storybook/react";
import { DeckOfPotatoes } from "./index";

const DeckOfPotatoesDemo = () => {
  const [reset, toggleReset] = useState(0);

  return (
    <>
      <DeckOfPotatoes reset={reset} />
      <p style={{ position: "absolute", marginTop: "-300px" }}>Fling me!</p>
      <button
        style={{ position: "absolute", marginTop: "160px" }}
        onClick={() => toggleReset(reset + 1)}
      >
        Reset!
      </button>
    </>
  );
};

export default {
  title: "Framer Motion/Deck of Potatoes",
  component: DeckOfPotatoes,
} as Meta;

const Template: Story = args => <DeckOfPotatoesDemo {...args} />;

export const Default = Template.bind({});
