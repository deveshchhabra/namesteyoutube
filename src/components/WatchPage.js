import React from 'react'
import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { closeMenue } from '../utils/1appSlice'
import CommentsContainer from './commentContainer'
import Live from './Live'
const WatchPage = () => {
  const [searchParms] = useSearchParams()
  console.log()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(closeMenue())
  }, [])


return (
  <div className="flex flex-col w-full">
    <div className="px-5 flex w-full">
      <div className="">
        <iframe
          width="1200"
          height="600"
          src={"https://www.youtube.com/embed/" + searchParms.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div className="w-full">
        <Live />
      </div>
    </div>
    <CommentsContainer />
  </div>
);
};

// export default WatchPage;
export default WatchPage
