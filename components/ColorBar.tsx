import React from "react";
import Box from "./Box";

export default function ColorBar(): React.ReactElement {
  return (
    <Box className="w-full h-2 bg-gradient-to-r from-cyan-500 to-blue-500" />
  );
}
