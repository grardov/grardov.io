import React from "react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";

import Text from "./Text";
import Stack from "./Stack";
import Box from "./Box";

interface Props {
  from: string;
  util: string;
  title: string;
  location: string;
  children: React.ReactNode;
  externalLink: string;
}

export default function WorkExperience({
  from,
  util,
  title,
  location,
  children,
  externalLink,
}: Props): React.ReactElement {
  return (
    <Stack>
      <Box className="hidden md:block min-w-[100px] mr-3">
        <Text size="text-sm" weight="font-light">
          {from} — {util}
        </Text>
      </Box>
      <Stack direction="col" spacing="space-y-2">
        <a
          href={externalLink}
          target="_blank"
          rel="noreferrer"
          className="hover:underline"
        >
          <Text className="flex items-center" size="text-lg">
            {title} <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
          </Text>
        </a>
        <Text
          className="block md:hidden w-96"
          size="text-sm"
          weight="font-light"
        >
          {from} — {util}
        </Text>
        <Text
          className="text-gray-500 leading-6"
          size="text-sm"
          weight="font-light"
          span
        >
          📍 {location}
        </Text>
        <Stack
          direction="col"
          spacing="space-y-3"
          className="leading-6 text-sm"
        >
          {children}
        </Stack>
      </Stack>
    </Stack>
  );
}
