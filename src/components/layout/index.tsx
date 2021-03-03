import React, { useCallback } from 'react'
import useWindowSize from '../useWindowSize'
import Footer from './footer'
import Meta from './meta'
import Nav from './nav'

import cn from 'classnames'

import { useSpring, animated, interpolate } from 'react-spring'
import { Box, Button, Center, useColorMode } from '@chakra-ui/react'

type LayoutProps = {
  preview: Boolean,
  children: React.ReactNode,
  page: string
}

export default function Layout({ preview, children, page }: LayoutProps) {
  const winSize = useWindowSize();

  const {colorMode, toggleColorMode} = useColorMode()

  // https://codesandbox.io/embed/r5x34869vq
  // https://codesandbox.io/embed/r5x34869vq
  const [props, set] = useSpring<{ amount: number, xy: number[] }>(() => ({ amount: 0, xy: [0, 0], config: {} }))
  const onMove = useCallback(({ clientX: x, clientY: y }) => set({ xy: [x - window.innerWidth / 2, y - window.innerHeight / 2] }), [])
  const trans1 = interpolate(props.xy, (x, y) => `translate3d(${-x / 10}px, ${-y / 10}px, 0)`)
  const trans2 = interpolate(props.xy, (x, y) => `translate3d(${-x / 20 - 300}px, ${-y / 20}px, 0)`)
  const trans3 = interpolate(props.xy, (x, y) => `translate3d(${-x / 40 + 100}px, ${-y / 40 + 200}px, 0)`)
  const trans4 = interpolate(props.xy, (x, y) => `translate3d(${-x / 80 + 300}px, ${-y / 48 - 100}px, 0)`)

  const rotateBox = "shadow-xl transform rotate-45 w-full h-full opacity-60"
  const bgParallaxClass = "opacity-20 absolute top-0 bottom-0 left-0 right-0 m-auto will-change-transform"

  return (
    <>
      <Meta />
      <Button style={{zIndex:10}} position="fixed" bottom={5} right={5} colorScheme={colorMode === "light" ? "purple" : "cyan"} onClick={toggleColorMode}>
        {colorMode === "light" ? "DARK MODE" : "LIGHT MODE"}
      </Button>
      <Center id="#" onMouseMove={onMove} bg={colorMode == "light" ? "yellow.400" : "yellow.800"} className={cn('overflow-hidden w-full min-h-screen lg:h-screen')}>
        <Nav page={page} />
        {/* Only move when bigger than TWCSS's 'lg' size */}
        <animated.div style={winSize.width > 1023 ? { transform: trans1, zIndex: 2 } : { zIndex: 2 }} className="flex-grow py-10 lg:py-0 w-full flex-col justify-center flex will-change-transform">
          {children}
        </animated.div>
        <Center style={{ zIndex: 1 }} position="absolute" className="w-screen h-screen overflow-hidden z-0">
          <Box as={animated.div} style={{ width: '20vw', height: '20vw', transform: trans2 }} className={bgParallaxClass}>
            <Box bg={colorMode == "light" ? "yellow.300" : "gray.500"} className={rotateBox} />
          </Box>
          <Box as={animated.div} style={{ width: '30vw', height: '30vw', transform: trans3 }} className={bgParallaxClass}>
            <Box bg={colorMode == "light" ? "yellow.200" : "gray.600"} className={rotateBox} />
          </Box>
          <Box as={animated.div} style={{ width: '60vw', height: '60vw', transform: trans4 }} className={bgParallaxClass}>
            <Box bg={colorMode == "light" ? "yellow.100" : "gray.700"} className={rotateBox} />
          </Box>

        </Center>
        <Footer />
      </Center>
    </>
  )
}
