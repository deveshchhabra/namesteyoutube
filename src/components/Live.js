import { useEffect, useState } from 'react'
import Chat from './Chat'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice'
import { generateRandomName, makeRandomMessage } from '../utils/helper'
const Live = () => {
  const [LiveMessage, setLiveMessage] = useState('')
  const dispatch = useDispatch()
  const chatMessages = useSelector(store => store.chat.message)
  useEffect(() => {
    const i = setInterval(() => {
      // console.log('API POLLING')
      dispatch(
        addMessage({
          name:generateRandomName(),
          message: "jai shree ram",
        })
      )
    }, 10000)
    return () => clearInterval(i)
  }, [])

  return (
    <>
      <div className='ml-2 h-[600px] w-full p-2 border border-black overflow-y-hidden overflow-y-scroll flex flex-col-reverse'>
        <div>
          {chatMessages.map((c, i) => (
            <Chat key={i} name={c.name} message={c.message} />
          ))}
        </div>
      </div>
      <form className='w-full p-2 ml-2 border border-black' onSubmit={(e)=>{
        e.preventDefault();
        console.log("On CLICK",LiveMessage)
        dispatch(
          addMessage({
            name:"AK",
            message: LiveMessage
          })
        );
      }}>
        <input
          className='px- 2w-96'
          type='text'
          value={LiveMessage}
          onChange={e => setLiveMessage(e.target.value)}
        />
        <button className='px-2 mx-2 bg-green-100'>Send</button>
      </form>
    </>
  )
}

export default Live
