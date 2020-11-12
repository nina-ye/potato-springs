import React, { useState } from "react";
import { Meta, Story } from "@storybook/react";
import { SpinningModalPotato } from "./index";
import SproutImg from "../../assets/cute-potato-sprout.png";

const SpinningModalPotatoDemo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <SpinningModalPotato
        isModalOpen={isModalOpen}
        onCloseModal={() => setIsModalOpen(false)}
      />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <img
          style={{
            position: "absolute",
            marginTop: "-38px",
            width: "200px",
            zIndex: -1,
          }}
          alt="sprout"
          src={SproutImg}
        />
        <button
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          Click Me!
        </button>
      </div>
    </>
  );
};

export default {
  title: "Framer Motion/Spinning Modal Potato",
  component: SpinningModalPotato,
} as Meta;

const Template: Story = args => <SpinningModalPotatoDemo {...args} />;

export const Default = Template.bind({});
