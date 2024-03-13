import React from "react";
import "../styles/beforefooter.scss";
import {Link} from 'react-router-dom';

function BeforeFooter(props) {
  return (
    <>
        
    <>
      <div className="before-footer-parent parent" style={{background:`${props.bg}`}}>
        <div className="before-footer-container cont">
          <h3 className="bfooter-text">
            {props.para1}<br/>{props.para2}
          </h3>
          <Link to='/contact' className="btn">{props.button}</Link>
        </div>
      </div>
      </>
           
    </>

  );
}

export default BeforeFooter;
