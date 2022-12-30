import React from "react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";

import Text from "./Text";
import Stack from "./Stack";

interface Props {
  from: string;
  util: string;
  title: string;
  location: string;
  description: string;
  externalLink: string;
}

export default function WorkExperience({
  from,
  util,
  title,
  location,
  description,
  externalLink,
}: Props): React.ReactElement {
  return (
    <Stack spacing="space-x-2">
      <Text className="w-96" size="text-sm" weight="font-light">
        {from} — {util}
      </Text>
      <Stack direction="col" spacing="space-y-1" className="items-start">
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
          className="text-gray-500 leading-6"
          size="text-sm"
          weight="font-light"
          span
        >
          📍 {location}
        </Text>
        <Text className="leading-6" size="text-sm" weight="font-light">
          {description}
        </Text>
      </Stack>
    </Stack>
  );
}
