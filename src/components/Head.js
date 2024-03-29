import React, { useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { toggleMenue } from '../utils/1appSlice'
import { cacheResults } from '../utils/searchSlice'
const Head = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [suggestion, setSuggestion] = useState([])
  const [showsuggestion, setshowsuggestion] = useState(false)
  const searchCache=useSelector((store)=>store.search);
  const dispatch = useDispatch()
  /*
  *
  * {
   "iphone":["iphone11","iphone14","iphonepro"]
   }
*
*
*/
  useEffect(() => {
    const timer = setTimeout(() => {
      if(searchCache[searchQuery]) {
        setSuggestion(searchCache[searchQuery])
        
      } else {
        getSearchSugsestions()
      }
    }, 200)
    return () => {
      clearTimeout(timer)
    }
  }, [searchQuery])

  const getSearchSugsestions = async () => {
    console.log('API CALL-' + searchQuery)
    const data = await fetch(
      'http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=' +
        searchQuery
    )
    const json = await data.json()
    // console.log;
    setSuggestion(json[1])
    dispatch(cacheResults({
      [searchQuery]:json[1],
    }))
  }
  const toggleMenueHandler = () => {
    dispatch(toggleMenue())
  }
  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
      <div className='flex col-span-1'>
        <img
          onClick={() => toggleMenueHandler()}
          className='h-8 cursor-pointer'
          alt='menue'
          src='https://www.svgrepo.com/show/312300/hamburger-menu.svg'
        />
        <a href='/'>
          <img
            className='h-8 mx-2'
            alt='logo'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNGVngIhOf1IXwwMnbIl0SEB3PWHYAQ2rPYg&usqp=CAU'
          />
        </a>
      </div>

      <div className='  col-span-10 px-10'>
        <div>
          <input
            className='px-5 w-1/2 border border-gray-400 p-2 rounded-l-full'
            type='text'
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            onFocus={() => setshowsuggestion(true)}
            onScroll={() => setshowsuggestion(true)}
            onBlurCapture={() => setshowsuggestion(false)}
          />

          <button className='border px-5 py-2 rounded-r-full bg-gray-100'>
            🔍
          </button>
          {showsuggestion && (
            <div className='s fixed  bg-white px-5 py-2 w-[37rem] shadow-lg rounded-lg '>
              <ul>
                {suggestion.map(s => (
                  <li key={s} className='py-2 px-2 shadow-sm hover:bg-slate-50'>
                    {' '}
                    🔍 {s}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className='col-span-1'>
        <img
          className='h-8'
          alt='user'
          src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png'
        />
      </div>
    </div>
  )
}
export default Head
