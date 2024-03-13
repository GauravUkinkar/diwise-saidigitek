import React from "react";
import "../styles/beforefooter.scss";

function BeforeFooter(props) {
  return (
    <>
        
    <>
      <div className="before-footer-parent parent" style={{background:`${props.bg}`}}>
        <div className="before-footer-container cont">
          <h3 className="bfooter-text">
            {props.para1}<br/>{props.para2}
          </h3>
          <button className="btn">{props.button}</button>
        </div>
      </div>
      </>
           
    </>

  );
}

export default BeforeFooter;
