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
  const trans1 = interpolate(props.xy, (x, y) => `translate3d(${-x / 10}px, ${-y / 10}px, 0)`)
  const trans2 = interpolate(props.xy, (x, y) => `translate3d(${-x / 20 - 300}px, ${-y / 20}px, 0)`)
  const trans3 = interpolate(props.xy, (x, y) => `translate3d(${-x / 40 + 100}px, ${-y / 40 + 200}px, 0)`)
  const trans4 = interpolate(props.xy, (x, y) => `translate3d(${-x / 80 + 300 }px, ${-y / 48 - 100}px, 0)`)

  const rotateBox = "shadow-xl transform rotate-45 w-full h-full bg-yellow-400 opacity-60"
  const bgParallaxClass = "opacity-20 absolute top-0 bottom-0 left-0 right-0 m-auto will-change-transform"

  return (
    <>
      <Meta />
      <div id="#" onMouseMove={onMove} className={cn('bg-gradient-to-b from-yellow-50 to-yellow-200 overflow-hidden w-full min-h-screen lg:h-screen flex flex-col items-center')}>
        <Nav page={page}/>
        {/* Only move when bigger than TWCSS's 'lg' size */}
        <animated.div style={winSize.width > 1023 ? { transform: trans1 } : {}} className="z-10 flex-grow py-10 lg:py-0 w-full flex-col justify-center flex will-change-transform">
          {children}
        </animated.div>
        <div className="absolute top-0 left-0 w-screen h-screen overflow-hidden z-0">
          <animated.div style={{ width: '20vw', height: '20vw', transform: trans2 }} className={bgParallaxClass}>
            <div className={rotateBox} />
          </animated.div>
          <animated.div style={{ width: '30vw', height: '30vw', transform: trans3 }} className={bgParallaxClass}>
          <div className={rotateBox} />
          </animated.div>
          <animated.div style={{ width: '60vw', height: '60vw', transform: trans4 }} className={bgParallaxClass }>
          <div className={rotateBox} />
          </animated.div>

        </div>
        <Footer />
      </div>
    </>
  )
}
