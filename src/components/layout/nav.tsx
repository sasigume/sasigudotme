import moment from 'moment'
import cn from 'classnames'
import { CONST_MYNAME, CONST_BIRTHDAY } from '../../options/constants'

import Logo from './logo'
import { Tooltip, Link, Flex, Spacer, useColorMode, Box, Stack, VStack, Drawer } from '@chakra-ui/react'
import LinkChakra from 'components/link-chakra'


function NavLink({ label, href, targetPage, page }) {
  const { colorMode } = useColorMode()

  return (
    <LinkChakra href={href}>
      <VStack justifyContent="flex-end" h={{base:12,md:24}} >
        <div className="mx-5">{label}</div>
        <>{(page == targetPage) ? (<Box h={1} bg={colorMode == "light" ? "black" : "white"} w="full" />) : (<Box h={1} bg={colorMode == "light" ? "white" : "black"} w="full" />)}</>
      </VStack>
    </LinkChakra>
  )
}

const NavLinkList = [
  {
    label: "About",
    targetPage: "index",
    desc: "トップページです",
    href: "/"
  },
  {
    label: "Weapons",
    targetPage: "weapons",
    desc: "今勉強中のスキルです",
    href: "weapons"
  },
  {
    label: "Inventory",
    targetPage: "inventory",
    desc: "全スキルです",
    href: "inventory"
  },
]

type NavProps = {
  page: string
}

export default function Nav({ page }: NavProps) {

  const { colorMode, toggleColorMode } = useColorMode()

  const age = moment().diff(moment(CONST_BIRTHDAY, 'YYYYMMDD'), 'years')
  const bdThisYear = moment().year() + '-' + moment(CONST_BIRTHDAY).format('MM-DD')
  const diff = moment().diff(moment(bdThisYear, 'YYYYMMDD'), 'days')
  let exp: number
  diff < 0 ? exp = 365 + diff : exp = diff

  return (
    <Flex direction={{ base: "column", md: "row" }} bg={colorMode === "light" ? "white" : "black"} position="fixed" alignItems="center" top={0} left={0} area-label="メニュー" style={{ zIndex: 5, width: "100vw" }} px={3}>
      <Flex mt={4} mb={{ base: 4, md: -8 }}>
        <LinkChakra href="/">
          <a className="block w-16 md:w-24 mr-4 p-2">
            <Logo />
          </a>
        </LinkChakra>
        <div className="">
          <div>
            <h1 className="text-3xl font-bold">
              {CONST_MYNAME}
            </h1>
            <div className="tracking-widest text-lg">
              {`//`} LEVEL {age}
            </div>
          </div>

          <Tooltip label={exp + "/365日(誕生日からの経過日数)"}>
            <Box mt={{base:2,md:4}} className="bg-gray-200 border w-40 md:w-64 h-3 border-gray-400">
              <div className="h-full bg-green-600" style={{ width: `${exp / 365 * 100}%` }}></div>
            </Box>
          </Tooltip >
        </div>
      </Flex>
      <Spacer />
      <Stack h={{base:12,md:24}} spacing={8} direction="row">
        {NavLinkList.map((link) => (
          <NavLink
            key={link.label}
            label={link.label}
            href={link.href}
            targetPage={link.targetPage}
            page={page}
          />))}
      </Stack>
    </Flex>
  )
}