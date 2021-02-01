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
  const [props, set] = useSpring<{ x: number, y: number }>(() => ({ x: 0, y: 0, config: { mass: 10, tension: 550, friction: 140 } }))
  const onMove = useCallback(({ clientX: x, clientY: y }) => set({ x: x - window.innerWidth / 2, y: y - window.innerHeight / 2 }), [])
  const transX1 = (x) => `translateX(${x / 15}px)`
  const transY1 = (y) => `translateY(${y / 10}px)`
  return (
    <>
      <Meta />
      <div id="#" onMouseMove={onMove} className={cn('overflow-hidden max-w-screen overflow-y-scroll min-h-screen')}>
        <animated.div style={{ transform: props.x.interpolate(transX1) }} className="spring_trans flex items-center flex-grow">
          <animated.div style={{ transform: props.y.interpolate(transY1)}} className="spring_trans lg:mx-40 lg:mt-20 lg:rounded-8 flex flex-grow items-center">
            <Container>
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
            </Container>
          </animated.div>
        </animated.div>
        <Footer />
      </div>
    </>
  )
}
