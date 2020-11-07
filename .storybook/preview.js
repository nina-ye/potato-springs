import React from "react";
import "!style-loader!css-loader!sass-loader!../src/index.scss";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

export const decorators = [
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
];
