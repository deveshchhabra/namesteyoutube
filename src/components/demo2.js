import React, { useEffect, useRef, useState } from 'react'

const Demo2 = () => {
  let i={
    current:null,
  }
  useEffect(() => {
    i = setInterval(() => {
      console.log('Nameste React', Math.random())
    }, 1000)
    // return () => clearInterval(i)
  }, [])
  const [y, setY] = useState(0)
  let ref = useRef(0) //y
  let x = 0
  return (
    <div className='m-4 p-2 bg-slate-50 border border-black h-96 w-96'>
      <div>
        <button
          className='bg-green-100 p-2 m-4'
          onClick={() => {
            x = x + 1
            console.log({ x })
          }}
        >
          Increase x
        </button>
        <span className='font-bold text-xl'>Let {x}</span>
      </div>
      <div>
        <button
          className='bg-green-100 p-2 m-4'
          onClick={() => {
            setY(y + 1)
          }}
        >
          Increase y
        </button>
        <span className='font-bold text-xl'>state {y}</span>
      </div>
      <div>
        <button
          className='bg-green-100 p-2 m-4'
          onClick={() => {
            ref.current = ref.current + 1
            console.log(ref.current)
          }}
        >
          Increase z
        </button>
        <span className='font-bold text-xl'>Ref {ref.current}</span>
      </div>
      <button
        className='bg-red-900 p-2 text-white rounded-lg'
        onClick={() => {
          clearInterval(i)
        }}
      >
        Stop Printing
      </button>
    </div>
  )
}

export default Demo2
