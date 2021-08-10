///////// Hook -- UseEffect

import { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [windowWidth, setwindowWidth] = useState(window.innerWidth);

 const handleResize = () => {
  setwindowWidth(window.innerWidth)
 }

  useEffect(() => {
    window.addEventListener('resize', handleResize)


    // this will clean up the code  
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])



  return (
    <>
<div> {windowWidth }
</div>
    </>
  );
}
