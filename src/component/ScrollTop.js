import React from 'react'
import { TbArrowBigUpLinesFilled } from "react-icons/tb";
import "../styles/scrolltop.scss"

function ScrollTop() {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth' // Smoothly scrolls to the top
        });
      };
  return (
    <>
    <div className="scroll-btn">
        <button onClick={scrollToTop}>
            <div className="icon"><TbArrowBigUpLinesFilled /></div>
        </button>
    </div>
    
    
    
    
    
    </>
  )
}

export default ScrollTop