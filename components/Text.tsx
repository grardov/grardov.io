import React from "react";
import Box from "./Box";

interface Props {
  size?: `text-${"sm" | "md" | "lg" | "xl"}`;
  weight?: `font-${"light" | "medium" | "normal" | "semibold" | "bold"}`;
  span?: boolean;
  light?: boolean;
  uppercase?: boolean;
  className?: string;
  children: React.ReactNode;
}

export default function Text({
  size,
  weight,
  span = false,
  light = false,
  uppercase = false,
  className,
  children,
}: Props): React.ReactElement {
  if (span) {
    return (
      <Box
        as="span"
        className={`${size ? size : "text-md"} ${
          weight ? weight : "font-normal"
        } ${light ?? "font-light"} ${uppercase ?? "uppercase"} ${
          light ? "text-gray-500" : "text-gray-800"
        } ${className ? className : ""}`}
      >
        {children}
      </Box>
    );
  }

  return (
    <Box
      as="p"
      className={`${size ? size : "text-md"} ${
        weight ? weight : "font-normal"
      } ${uppercase ?? "uppercase"} text-gray-${light ? "500" : "800"} ${
        className ? className : ""
      }`}
    >
      {children}
    </Box>
  );
}
