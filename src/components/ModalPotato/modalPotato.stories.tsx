import React, { useState } from "react";
import { Meta, Story } from "@storybook/react";
import { ModalPotato } from "./index";

const ModalPotatoDemo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <ModalPotato
        isModalOpen={isModalOpen}
        onCloseModal={() => setIsModalOpen(false)}
      />
      <button
        onClick={() => {
          setIsModalOpen(!isModalOpen);
        }}
      >
        Click Me!
      </button>
    </>
  );
};

export default {
  title: "Framer Motion/Modal Potato",
  component: ModalPotato,
  decorators: [
    Story => (
      <div
        style={{
          width: "100vw",
          height: "50vw",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: Story = args => <ModalPotatoDemo {...args} />;

export const Default = Template.bind({});
