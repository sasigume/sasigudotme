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
  const [props, set] = useSpring<{ amount: number, xy: number[] }>(() => ({ amount: 0, xy: [0, 0], config: {} }))
  const onMove = useCallback(({ clientX: x, clientY: y }) => set({ xy: [x - window.innerWidth / 2, y - window.innerHeight / 2] }), [])
  const trans1 = interpolate(props.xy, (x, y) => `translate3d(${-x / 30}px, ${-y / 20}px, 0)`)
  const trans2 = interpolate(props.xy, (x, y) => `translate3d(${-x / 50}px, ${-y / 40}px, 0)`)
  const trans3 = interpolate(props.xy, (x, y) => `rotate(45deg) translate3d(${-x / 70}px, ${-y / 60}px, 0)`)
  const trans4 = interpolate(props.xy, (x, y) => `translate3d(${-x / 90}px, ${-y / 80}px, 0)`)
  const trans5 = interpolate(props.xy, (x, y) => `rotate(45deg) translate3d(${-x / 110}px, ${-y / 100}px, 0)`)

  const bgParallaxClass = "opacity-10 hidden lg:block absolute top-0 bottom-0 left-0 right-0 m-auto border border-gray-200 will-change-transform"
  return (
    <>
      <Meta />
      <div id="#" onMouseMove={onMove} className={cn('bg-gradient-to-b from-gray-500 to-gray-700 overflow-hidden lg:w-screen lg:h-screen max-w-screen min-h-screen flex flex-col items-center')}>
        <Nav page={page} />
        {/* Only move when bigger than TWCSS's 'lg' size */}
        <animated.div style={winSize.width > 1023 ? { transform: trans1 } : {}} className="z-30 flex-grow py-10 lg:py-0 w-full flex-col justify-center flex will-change-transform">
          {children}
        </animated.div>
        <div className="z-0">
          <animated.div style={winSize.width > 1023 ? { width: '26em', height: '26em', transform: trans2 } : {}} className={bgParallaxClass + ' bg-gray-200'}></animated.div>
          <animated.div style={winSize.width > 1023 ? { width: '30em', height: '30em', transform: trans3 } : {}} className={bgParallaxClass + ' bg-gray-400'}></animated.div>
          <animated.div style={winSize.width > 1023 ? { width: '34em', height: '34em', transform: trans4 } : {}} className={bgParallaxClass}></animated.div>
          <animated.div style={winSize.width > 1023 ? { width: '38em', height: '38em', transform: trans5 } : {}} className={bgParallaxClass}></animated.div>
        </div>
        <Footer />
      </div>
    </>
  )
}
