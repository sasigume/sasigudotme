import React, { useCallback } from 'react'
import Footer from './footer'
import Meta from './meta'
import Nav from './nav'

import cn from 'classnames'
import { CONST_MYNAME } from '../../options/constants'

import { useSpring, animated, interpolate } from 'react-spring'

type LayoutProps = {
  preview: Boolean,
  children: React.ReactNode,
  page: string
}

export default function Layout({ preview, children, page}:LayoutProps) {
  // https://codesandbox.io/embed/r5x34869vq
  // https://codesandbox.io/embed/r5x34869vq
  const [props, set] = useSpring<{ x: number, y: number, xy: number[] }>(() => ({ xy: [0, 0], x: 0, y: 0, config: { mass: 10, tension: 550, friction: 140 } }))
  const onMove = useCallback(({ clientX: x, clientY: y }) => set({ xy: [x - window.innerWidth / 2, y - window.innerHeight / 2] }), [])
  const trans1 = interpolate(props.xy, (x, y) => `translate3d(${x / 70}px, ${y / 65}px, 0)`)
  const trans2 = interpolate(props.xy, (x, y) => `translate3d(${x / 50}px, ${y / 45}px, 0)`)
  const trans3 = interpolate(props.xy, (x, y) => `translate3d(${x / 30}px, ${y / 25}px, 0)`)
  return (
    <>
      <Meta />
      <div id="#" onMouseMove={onMove} className={cn('overflow-hidden w-screen h-screen flex items-center ')}>
        <Nav page={page} />
        <animated.div style={{ transform: trans1 }} className="will-change-transform">
          <animated.div style={{ transform: trans2 }} className="will-change-transform">
            <animated.div style={{ transform: trans3 }} className="px-10 mx-auto will-change-transform">
              {children}
            </animated.div>
          </animated.div>
        </animated.div>
        <Footer />
      </div>
    </>
  )
}
