import React from "react";
import ReactPlayer from "react-player";
import { NavLink } from "react-router-dom";

export function CardPlayer ({video}) {

   return (
         <div className={'container-card-player'}>
            <h2><NavLink to={`/react-api/${video.id}`}>{video.title}</NavLink></h2>

            <p>{video.description}</p>

            <ReactPlayer style={{margin: "20px"}} controls width={'310px'} url={video.url} />
         </div>
   )

}