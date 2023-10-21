import React from "react";
import { classMaker } from "./classMaker";

export function Links () {

   return (
      <>
         <a href="/" className={classMaker("/")}>Home</a>
         <a href="/videos" className={classMaker("/videos")}>Vidéos</a>
         <a href="/react-api" className={classMaker("/react-api")}>React</a>
   </>
   )

}
