import { CONST_RESUME_URL, CONST_REPO_URL, CONST_BLOG_URL, CONST_YOUTUBE_URL } from '../../options/constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Box, Center, Flex, Stack, useColorMode } from '@chakra-ui/react'

function FooterLink({ label, href, iconStyle, iconName }) {
  return (
    <Box mr={3}>
      <a href={href} className="my-1 md:my-0 flex items-center md:flex-row hover:underline">
        <FontAwesomeIcon className="w-4 mr-2 inline" icon={[iconStyle, iconName]} />{label}
      </a>
    </Box>
  )
}

const FooterLinkList = [
  {
    label: "GitHub",
    href: CONST_REPO_URL,
    iconStyle: "fab",
    iconName: "github"
  },
  {
    label: "YouTube",
    href: CONST_YOUTUBE_URL,
    iconStyle: "fab",
    iconName: "youtube"
  },
  {
    label: "Hatena Blog",
    href: CONST_BLOG_URL,
    iconStyle: "fas",
    iconName: "pen"
  },
  {
    label: "Resume",
    href: CONST_RESUME_URL,
    iconStyle: "fas",
    iconName: "code"
  }
]

export default function Footer() {

  const { colorMode } = useColorMode()

  return (
    <Box px={6} bg={colorMode === "light" ? "white" : "black"} bottom={0} style={{ zIndex: 5, width: "100vw" }} position="fixed" pt={4} pb={12}>
      <Center>
        <Flex alignItems="center" direction={{ base: "column", md: "row" }}>{
          FooterLinkList.map((link) => (
            <FooterLink
              key={link.label}
              label={link.label}
              href={link.href}
              iconStyle={link.iconStyle}
              iconName={link.iconName}
            />
          ))
        }</Flex>
      </Center>
    </Box>
  )
}
