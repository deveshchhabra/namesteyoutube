import React from "react";
import {useSelector} from "react-redux"
import { Link } from "react-router-dom";
const SideBar=()=>{
    const isMenueOpen=useSelector((store)=>store.app.isMenueOpen);
    if(!isMenueOpen) return null;
    return(
        <div className="p-5 shadow-lg w-40">
            <h1 className="font-bold py-5"></h1>
            <ul>
               <Link to="/"> <li>Home</li></Link>
               <Link to="/Demo"> <li>Demo</li></Link>

                <li>Shorts</li>
                <li>Viedos</li>
                <li>Live</li>

            </ul>
            <h1 className="font-bold py-5">Watch Later</h1>
            <ul>
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movie</li>

            </ul>
            <h1 className="font-bold py-5">  </h1>
            <ul>
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movie</li>

            </ul>
        </div>
    )
}
export default SideBar;