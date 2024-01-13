import React from "react"

const ViedoCard=({info})=>{
    const {snippet,statistics}=info;
    const {channelTitle,title,thumbnails}=snippet;
    return (<div className="p-2 m-2 w-80 shadow-lg">
        <img alt="thumbnail" src={thumbnails.medium.url} />
        <ul>
            <li className="font-bold py-2">{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount}</li>

        </ul>
    </div>
)
};


export default ViedoCard;