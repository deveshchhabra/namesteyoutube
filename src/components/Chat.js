import React from 'react'

const ChatMessage = ({name,message}) => {
    return(
        <div className='flex item-center shadow-sm'>
          <img className="h-8 rounded-full" alt="user"src="https://yt3.ggpht.com/ytc/AIf8zZRr-XxwSuOW9kwN9wXTxhmT-I3A1dhcYKmiBz4h9g=s48-c-k-c0x00ffffff-no-rj"/> 
       <span className='font-bold px-2'>{name}</span>
       <span>{message}</span>

        </div>
    )
}

export default ChatMessage