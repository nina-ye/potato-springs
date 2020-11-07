import React, { useState } from "react";
import { Meta, Story } from "@storybook/react";
import { SpinningModalPotato } from "./index";

const SpinningModalPotatoDemo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <SpinningModalPotato
        isModalOpen={isModalOpen}
        onCloseModal={() => setIsModalOpen(false)}
      />
      <button
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        Click Me!
      </button>
    </>
  );
};

export default {
  title: "Framer Motion/Spinning Modal Potato",
  component: SpinningModalPotato,
  decorators: [
    Story => (
      <div
        style={{
          width: "100vw",
          height: "50vw",
          justifyContent: "center",
        }}
      >
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: Story = args => <SpinningModalPotatoDemo {...args} />;

export const Default = Template.bind({});
