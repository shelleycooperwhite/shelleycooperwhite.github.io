import React from "react"
import { Heading, Link, Stack, Text } from "@chakra-ui/core"
import { Page } from "../components/Page"
import { ContactIconLink } from "../components/ContactIconLink"

import MdMail from 'react-ionicons/lib/MdMail'
import LogoGithub from 'react-ionicons/lib/LogoGithub'
import LogoLinkedIn from 'react-ionicons/lib/LogoLinkedIn'
import LogoTwitter from 'react-ionicons/lib/LogoTwitter'

export default function Home() {
  return (
    <Page>
      <Stack spacing={10}>
        <Heading as="h1" size="xl" color="blue.900" py={2} fontFamily="karma" whiteSpace="nowrap">
          Hey, I'm Shelley. 👋
        </Heading>
        <Stack spacing={5}>
          <Text>
            Full-stack software engineer with a love for big messy product teams.
            I'm all about interface polish, stellar test suites, and continuous learning.
          </Text>
          <Text>
            Years ago I found my calling in enterprise product teams, and I haven't looked back.
            I've done everything: from obscenely complex billing libraries to making swishy clicky buttons suitably swishy and clicky.
            Nothing beats good ol' on-the-ground experience.
          </Text>
          <Text>
            I care about <em>how</em> we do things &ndash; is this the best solution?
            How can we be better?
            Are my people learning, growing, and well-rested?
            Give me a team that cares deeply about delivering the goods (and doesn't take themselves too seriously).
          </Text>
          <Text>
            Let's chat.
          </Text>
        </Stack>
        <Stack color="blue.900" isInline={true}>
          <ContactIconLink Icon={MdMail} text="hello@shelley.io" URL="mailto:hello@shelley.io"/>
          <ContactIconLink Icon={LogoTwitter} text="@_shellco" URL="https://twitter.com/_shellco"/>
          <ContactIconLink Icon={LogoGithub} text="@shelleycooperwhite" URL="https://github.com/shelleycooperwhite/"/>
          <ContactIconLink Icon={LogoLinkedIn} text="Shelley Cooper-White" URL="https://www.linkedin.com/in/shelley-c/"/>
        </Stack>
      </Stack>
    </Page>
  )
}
