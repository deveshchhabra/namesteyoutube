import React,{useEffect,useState} from "react"
import { YoutubeApi } from "../utils/contants";
import ViedoCard from "./ViedoCard";
import { Link } from "react-router-dom";
import { AdViedoCard } from "./ViedoCard";

const ViedoContainer=()=>{
    const [viedos,setViedos]=useState([]);
    useEffect(()=>{
        getViedos();
    },[])
    const getViedos=async()=>{
        const data=await fetch(YoutubeApi);
        const json=await data.json()
        // console.log(json)
        setViedos(json.items)
    }
    return(<div className="flex flex-wrap">
       {viedos[0] && <AdViedoCard key={"12"}info={viedos[0]}/>}
        {viedos.map((viedo)=>{
            return(
            <Link key={viedo.id} to={"/watch?v="+viedo.id}>
                <ViedoCard info={viedo}/>
            </Link>
)})}
    </div>

)};
export default ViedoContainer
