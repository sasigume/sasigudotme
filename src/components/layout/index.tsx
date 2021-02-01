import React, { useCallback } from 'react'
import Footer from './footer'
import Meta from './meta'
import Link from 'next/link'
import cn from 'classnames'
import { CONST_MYNAME, CONST_MESSAGE } from '../../options/constants'
import Container from 'components/container'

import { useSpring, animated, interpolate } from 'react-spring'

export default function Layout({ preview, children }) {
  // https://codesandbox.io/embed/r5x34869vq
  // https://codesandbox.io/embed/r5x34869vq
  const [props, set] = useSpring<{ x: number, y: number , xy:number[]}>(() => ({ xy:[0,0], x: 0, y: 0, config: { mass: 10, tension: 550, friction: 140 } }))
  const onMove = useCallback(({ clientX: x, clientY: y }) => set({ xy: [x - window.innerWidth / 2, y - window.innerHeight / 2]}), [])
  const trans1 = interpolate(props.xy, (x,y) => `translate3d(${x / 30}px, ${y / 20}px, 0)`)
  const trans2 = interpolate(props.xy, (x,y) => `translate3d(${x / 12.5}px, ${y / 10}px, 0)`)
  const trans3 = interpolate(props.xy, (x,y) => `translate3d(${x / 7}px, ${y / 5}px, 0)`)
  return (
    <>
      <Meta />
      <div id="#" onMouseMove={onMove} className={cn('bg-gray-200 overflow-hidden w-screen h-screen')}>
        <animated.div style={{ transform: trans1 }} className="will-change-transform flex items-center flex-grow">
          <animated.div style={{ transform: trans2 }} className="bg-blue-100 will-change-transform lg:mx-40 lg:mt-20 w-full h-full flex items-center">
            <div className="m-3 text-gray-600">&copy; 2020 {CONST_MYNAME}</div>
            <animated.div style={{ transform: trans3 }} className="will-change-transform">
              <section className="flex justify-center items-center text-center flex-col mb-8">
                <Link href="/">
                  <a>
                    <div className="w-20 mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 275 294"><path fill="#007ca8" d="M149.76 118.3l-48.32-45.06L24.32 0l.2 92.09 76.92 70.48 101.44 92.93" /><path fill="#00f598" d="M148.46 205.08L170.09 92.2V0l-68.65 73.24V294" /><path fill="#ff8300" d="M148.46 205.08L275 92.09l-104.91.11-68.65 70.37L0 255.5" /></svg>
                    </div>
                  </a>
                </Link>
                <Link href="/">
                  <a>
                    <h1 className="text-4xl uppercase tracking-widest">{CONST_MYNAME}</h1>
                    <div className="mt-2 text-2xl">{CONST_MESSAGE}</div>
                  </a>
                </Link>
              </section>
              <div>
                {children}
              </div>
            </animated.div>
            <Footer />
          </animated.div>
        </animated.div>
      </div>
    </>
  )
}
