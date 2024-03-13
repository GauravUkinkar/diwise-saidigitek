import React from 'react'
import "../styles/notfound.scss";
import { Link } from "react-router-dom";

function Notfound(props) {
  return (
    <>
     {props.data.map((data, index) => {
        return (
          <>
            

            <div className="pagenot parent">
              <div className="pagenot-container container-small">
                <div className="oops"></div>
                <Link className="btn error-btn" to="/">
                  {data.page_not_button}
                </Link>
              </div>
            </div>
          </>
        );
      })}


    
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default Notfound