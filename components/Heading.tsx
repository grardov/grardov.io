import React from "react";
import Box from "./Box";

interface Props {
  children: React.ReactNode;
  size?: "h1" | "h2" | "h3";
}

export default function Heading({
  size = "h1",
  children,
}: Props): React.ReactElement | null {
  if (size === "h1") {
    return (
      <Box as="h1" className="text-3xl text-gray-800">
        {children}
      </Box>
    );
  }

  if (size === "h2") {
    return (
      <Box as="h2" className="text-2xl text-gray-800">
        {children}
      </Box>
    );
  }

  if (size === "h3") {
    return (
      <Box as="h3" className="text-lg text-gray-800">
        {children}
      </Box>
    );
  }

  if (size === "h4") {
    return (
      <Box as="h4" className="font-medium text-gray-800">
        {children}
      </Box>
    );
  }

  return null;
}
