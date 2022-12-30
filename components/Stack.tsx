import React from "react";
import Box from "./Box";

interface Props {
  direction?: "row" | "col";
  spacing?: `${"space"}-${"x" | "y"}-${string}`;
  className?: string;
  children: React.ReactNode;
}

export default function Stack({
  direction = "row",
  spacing,
  className,
  children,
}: Props): React.ReactElement {
  return (
    <Box
      className={`flex ${
        direction === "row" ? "flex-row" : "flex-col"
      } ${spacing} ${className ? className : ""}`}
    >
      {children}
    </Box>
  );
}
