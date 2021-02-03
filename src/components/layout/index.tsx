import React, { useCallback } from 'react'
import useWindowSize from '../useWindowSize'
import Footer from './footer'
import Meta from './meta'
import Nav from './nav'

import cn from 'classnames'

import { useSpring, animated, interpolate } from 'react-spring'

type LayoutProps = {
  preview: Boolean,
  children: React.ReactNode,
  page: string
}

export default function Layout({ preview, children, page }: LayoutProps) {
  const winSize = useWindowSize();

  // https://codesandbox.io/embed/r5x34869vq
  // https://codesandbox.io/embed/r5x34869vq
  const [props, set] = useSpring<{ xy: number[] }>(() => ({ xy: [0, 0], config: {} }))
  const onMove = useCallback(({ clientX: x, clientY: y }) => set({ xy: [x - window.innerWidth / 2, y - window.innerHeight / 2] }), [])
  const trans = interpolate(props.xy, (x, y) => `translate3d(${-x / 30}px, ${-y / 25}px, 0)`)
  return (
    <>
      <Meta />
      <div id="#" onMouseMove={onMove} className={cn('bg-gradient-to-b from-gray-500 to-gray-700 overflow-hidden lg:w-screen lg:h-screen max-w-screen min-h-screen flex flex-col items-center')}>
        <Nav page={page} />
        {/* Only move when bigger than TWCSS's 'lg' size */}
        <animated.div style={winSize.width > 1023 ? { transform: trans } : {}} className="lg:h-full flex-grow py-10 lg:py-0 px-10 mx-auto flex-col justify-center flex will-change-transform">
          {children}
        </animated.div>
        <Footer />
      </div>
    </>
  )
}
