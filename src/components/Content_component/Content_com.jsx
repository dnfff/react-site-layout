import React from 'react'
import { useSpring, animated } from '@react-spring/web'

import "../../App.css"

export default function MyComponent() {
  const [springs, api] = useSpring(() => ({
    from: { x: 0 , y: -240}
  }))
  const [springs2, api2] = useSpring(() => ({
    from: { x: 0 , y: -0},
  }))
  const [springs3, api3] = useSpring(() => ({
    from: { x: 0 , y: -0},
  }))

  const handleClick = () => {
    api.start({
      from: {
        y: -240,
      },
      to: {
        y: -240,
      },
    })
  }
  const handleClick2 = () => {
    api2.start({
      from: {
        y: -100,
      },
      to: {
        y: 250,
      },
    })
  }

  const handleClick3 = () => {
    api3.start({
      from: {
        y: -100,
      },
      to: {
        y: 190,
      },
    })
  }

  return (
<>
    <animated.div
      onClick={handleClick}
      style={{
        width: 500,
        height: 200,
        background: '#ff7b00',
        color: "#000",
        borderRadius: 8,
        margin: 0,
        position: "relative",
        ...springs,
      }}
    >
            <animated.div
                onClick={handleClick2}
                style={{
                width: 500,
                height: 200,
                background: '#ff7b00',
                borderRadius: 8,
                ...springs2,
                }}
            > <h4 className='' style={{padding: "20px"}} >Or this</h4>
                            <animated.div
                                onClick={handleClick3}
                                style={{
                                width: 500,
                                height: 200,
                                background: '#ff7b00',
                                borderRadius: 8,
                                ...springs3,
                                }}
                            >
                                <div className='text_content'>
                                    <h1 className=''>Content</h1>
                                    <p className=''>Click this!</p>
                                </div>
                            </animated.div>
            </animated.div>

    </animated.div>

</>
  )
}