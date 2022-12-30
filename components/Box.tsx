import React, { createElement } from "react";
import classNames from "classnames";

interface Props {
  as?:
    | "div"
    | "main"
    | "aside"
    | "nav"
    | "article"
    | "p"
    | "span"
    | "h1"
    | "h2"
    | "h3"
    | "h4";
  className?: string;
  children?: React.ReactNode | null;
}

export default function Box({
  as = "div",
  className,
  children,
}: Props): React.ReactElement {
  return createElement(as, { className: classNames(className) }, children);
}
