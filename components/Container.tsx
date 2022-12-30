import React from "react";
import Box from "./Box";

interface Props {
  className?: string;
  children: React.ReactNode;
}

export default function Container({
  className,
  children,
}: Props): React.ReactElement {
  return (
    <Box className={`max-w-xl mx-auto px-6 ${className ? className : ""}`}>
      {children}
    </Box>
  );
}
