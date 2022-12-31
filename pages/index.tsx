import Image from "next/image";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";

import MetaTags from "../components/MetaTags";
import Container from "../components/Container";
import Heading from "../components/Heading";
import Text from "../components/Text";
import Box from "../components/Box";
import Stack from "../components/Stack";
import ColorBar from "../components/ColorBar";
import WorkExperience from "../components/WorkExperience";

export default function Home() {
  return (
    <>
      <MetaTags />
      <Box as="main">
        <ColorBar />
        <Container className="my-8">
          <Stack direction="col" spacing="space-y-6">
            <Stack className="flex-col md:flex-row items-center space-x-0 md:space-x-4">
              <Box className="w-[80px] md:w-[176px] relative mb-4 md:mb-0 mr-auto">
                <Image
                  className="rounded-full"
                  height={176}
                  width={176}
                  src="/jpg/profile.jpg"
                  sizes="30vw"
                  priority
                  alt="Gerardo Valencia"
                />
              </Box>
              <Stack direction="col" spacing="space-y-2">
                <Box>
                  <Heading>Gerardo Valencia Rivero</Heading>
                  <Text>Software Engineer</Text>
                </Box>
                <Text size="text-sm" weight="font-light" light>
                  I&apos;m a software engineer passionate of create products
                  that help people around the world using web technologies.
                </Text>
              </Stack>
            </Stack>
            <Box className="relative">
              <div className="hidden md:block md:absolute -top-3 left-10 w-0 h-0 border-l-[12px] border-l-transparent border-b-[15px] border-b-slate-100 border-r-[12px] border-r-transparent" />
              <Stack
                direction="col"
                spacing="space-y-2"
                className="p-6 rounded-3xl bg-slate-100"
              >
                <Heading size="h3">About</Heading>
                <Text className="leading-6" size="text-sm" weight="font-light">
                  Hi 👋, my name is Gerardo but everybody calls me Gerry. I’m a
                  software engineer based in Mérida Yucatan.
                </Text>
                <Text className="leading-6" size="text-sm" weight="font-light">
                  I have more than 4 years of experience creating digital
                  products using web technologies. Communication between API
                  services and web clients. Experience integrating third-party
                  services and low-code tools.
                </Text>
              </Stack>
            </Box>
            <Stack
              direction="col"
              spacing="space-y-8"
              className="space-between"
            >
              <Heading size="h3">Work experience</Heading>
              <WorkExperience
                from="2021"
                util="Present"
                title="Software Engineer at Perfekto"
                location=" Mexico City, MX (Remotely)"
                externalLink="https://perfekto.mx"
              >
                <Text weight="font-light">
                  Founder member and part of the YC community. Develop the an
                  web app MVP using Next.js as Javascript framework. Improve the
                  internal process for the delivery service using low-code and
                  automation tools such as Airtable and Make.
                </Text>
                <Text weight="font-light">
                  Customer notification automation connecting delivery software
                  provider to notify to the customers about their orders.
                </Text>
                <Text weight="font-light">
                  Design a payment orchestrator to process automatic payments
                  for the customers and create flexibility to apply coupons,
                  delay payments, and add extra products to the subscription
                  using Stripe as the payment processor.
                </Text>
                <Text weight="font-light">
                  Design a payment orchestrator to process automatic payments
                  for the customers and create flexibility to apply coupons,
                  delay payments, and add extra products to the subscription
                  using Stripe as the payment processor.
                </Text>
              </WorkExperience>
              <WorkExperience
                from="2020"
                util="2021"
                title="Software Engineer at SV Academy"
                location="San Francisco, CA (Remotely)"
                externalLink="https://sv.academy"
              >
                <Text weight="font-light">
                  Website development uses Next.js as React framework to create
                  landing pages and application forms.
                </Text>
                <Text weight="font-light">
                  Back-end development using Python and FastAPI that connects to
                  Salesforce to send applicants data, and automation process
                  using low-code tools such as Make.
                </Text>
              </WorkExperience>
              <WorkExperience
                from="2019"
                util="2020"
                title="Front-end Engineer at Loft"
                location="Mexico City, MX (Remotely)"
                externalLink="https://truehome.com.mx"
              >
                <Text weight="font-light">
                  Develop a credit simulator based on the property that the
                  customer is watching.
                </Text>
                <Text weight="font-light">
                  Maintain a real statement website that&apos;s fixing bugs and
                  implementing new features in the detail properties page using
                  technologies such as Next.js.
                </Text>
              </WorkExperience>
              <WorkExperience
                from="2018"
                util="2021"
                title="Software Engineer at Yellowme"
                location="Mérida, Yucatán, MX"
                externalLink="https://yellowme.mx"
              >
                <Text weight="font-light">
                  Front-end developer working with different clients in México
                  and United States for creating web applications using React.
                </Text>
                <Text weight="font-light">
                  Working on internal projects and tools for improving the work
                  of the teammates.
                </Text>
              </WorkExperience>
              <WorkExperience
                from="2017"
                util="2018"
                title="Webmaster at SIF Language School"
                location="Veracruz, Veracruz, MX (Remotely)"
                externalLink="https://siflanguageschool.com"
              >
                <Text weight="font-light">
                  Webmaster working on the company website doing maintenance
                  making bug fixes and adding features to the website.
                </Text>
                <Text weight="font-light">Working with Wordpress and PHP.</Text>
              </WorkExperience>
            </Stack>
            <Stack direction="col" spacing="space-y-4">
              <Heading size="h3">Contact</Heading>
              <Stack spacing="space-x-2">
                <Text
                  className="min-w-[100px] text-gray-400"
                  size="text-sm"
                  weight="font-light"
                >
                  Email
                </Text>
                <a
                  href="mailto:grdvalencia.r@gmail.com"
                  className="hover:underline"
                >
                  <Text
                    className="flex items-center"
                    size="text-sm"
                    weight="font-light"
                  >
                    grdvalencia.r@gmail.com
                  </Text>
                </a>
              </Stack>
              <Stack spacing="space-x-2">
                <Text
                  className="min-w-[100px] text-gray-400"
                  size="text-sm"
                  weight="font-light"
                >
                  Github
                </Text>
                <a
                  href="https://github.com/grardov"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  <Text
                    className="flex items-center"
                    size="text-sm"
                    weight="font-light"
                  >
                    grardov{" "}
                    <ArrowTopRightOnSquareIcon className="h-3 w-3 ml-2" />
                  </Text>
                </a>
              </Stack>
              <Stack spacing="space-x-2">
                <Text
                  className="min-w-[100px] text-gray-400"
                  size="text-sm"
                  weight="font-light"
                >
                  Twitter
                </Text>
                <a
                  href="https://twitter.com/soygerrybee"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  <Text
                    className="flex items-center"
                    size="text-sm"
                    weight="font-light"
                  >
                    @soygerrybee{" "}
                    <ArrowTopRightOnSquareIcon className="h-3 w-3 ml-2" />
                  </Text>
                </a>
              </Stack>
            </Stack>
          </Stack>
        </Container>
        <footer>
          <Container className="mt-24 mb-6">
            <Stack className="flex-col md:flex-row w-full justify-between">
              <Text size="text-sm" weight="font-light">
                Not playing — Spotify
              </Text>
              <Text size="text-sm" weight="font-light">
                Gerardo Valencia Rivero {new Date().getFullYear()}
              </Text>
            </Stack>
          </Container>
          <ColorBar />
        </footer>
      </Box>
    </>
  );
}
