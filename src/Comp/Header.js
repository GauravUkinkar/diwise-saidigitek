import React, { useState } from "react";
import "../styles/Header.scss";
import { Link } from "react-router-dom";
import logo from "../Img/logo.png";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoCloseCircleOutline } from "react-icons/io5";
import { Menu, Dropdown } from "antd";
import { RiArrowDropDownLine } from "react-icons/ri";
import "../styles/accordian.scss"

function Header(props) {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const [navopen, setNavOpen] = useState(false);

  const [accordian ,setaccordian]=useState(false)

  const handleMenuClick = () => {
    setNavOpen(false);
  };

  const menu = (
    <>


      {props.data.map((data) =>{
     return(
      <>

    
    <Menu className="dropdown" onClick={handleMenuClick}>
      <Menu.Item key="1">
        <Link  to="/data_support">{data.Header_data}</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link  to="/social_media_support">{data. Header_social_media}</Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link  to="/election_campaign_support">{data. Header_election_campaign}</Link>
      </Menu.Item>
    </Menu>

    </>
              );
            })}
    
    

    </>
  );

  return (
    <>
    {props.data.map((data) =>{
   return(
    <>
      <div className="parent header">
        <div className="header-cont cont">
          <Link  to="/" className="logo">
            <img src={logo} alt="logo" />
          </Link>

          <div className="links">
            <Link  to="/">{data.Header_home}</Link>
            <Link  to="/about">{data.Header_about}</Link>
            <Dropdown  overlay={menu} placement="bottomCenter">
              <span  className="ant-dropdown-link"  onClick={scrollToTop}>
               {data.Header_services} <span className="header-arrow"><RiArrowDropDownLine /></span>
              </span>
            </Dropdown>
            <Link  to="/gallery">{data.Header_gallery}</Link>
            <Link  to="/contact" className="btn">
             {data.Header_contact}
            </Link>
          </div>

          <div className="menu" onClick={() => setNavOpen(true)}>
            <HiMenuAlt3 />
          </div>
        </div>
      </div>
      <div className={navopen ? "mob-nav navopen" : "mob-nav "}>
        <div className="close" onClick={() => {setNavOpen(false);setaccordian(false);}}>
          <IoCloseCircleOutline />
        </div>
        <div className="moblinks">
          <Link to="/" onClick={() => {{setNavOpen(false)};scrollToTop()}}>
           {data.Header_home}
          </Link>
          <Link to="/about" onClick={() => {{setNavOpen(false)};scrollToTop()}}>
          {data.Header_about}
          </Link>

          <div className="toprow" onClick={()=>{setaccordian(!accordian);scrollToTop()}}>
      <Link> {data.Header_services}+</Link>  
    </div>

          {accordian &&
    <div className="dropdown-mob">
   
        <Link to="/data_support" onClick={() => {setNavOpen(false);{setaccordian(false)}}}>{data.Header_data}</Link>

        <Link to="/social_media_support" onClick={() => {setNavOpen(false);{setaccordian(false)}}}>{data. Header_social_media}</Link>

        <Link to="/election_campaign_support" onClick={() => {setNavOpen(false);{setaccordian(false)}}}>{data. Header_election_campaign}</Link>
        
    </div>

}

          {/* <Dropdown className="header-dropdown" overlay={menu} placement="bottomCenter" >
            <Link className="arrow-mob" >
            {data.Header_services}<span className="header-arrow1"><RiArrowDropDownLine /></span>
            </Link>
          </Dropdown> */}
          <Link to="/gallery" onClick={() => {{setNavOpen(false)};scrollToTop()}}>
           {data.Header_gallery}
          </Link>
          <Link to="/contact" onClick={() => {{setNavOpen(false)};scrollToTop()}}>
           {data.Header_contact}
          </Link>
        </div>
      </div>
      </>
              );
            })}
    </>
  );
}

export default Header;
