import React from "react";
import { Link } from "react-router-dom";
import "../styles/footer.scss";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer(props) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return (
   
    <>
    {props.data.map((data) =>{
   return(
    <>
      <div className="footer-parent parent">
        <div className="footer-container cont">
          <div className="footer-content-box">
            <div className="footer-pages">
              <p>{data.Footer_quick}</p>
              <Link  to="/"  >{data. Footer_home}</Link>
              <Link  to="/about"  >{data. Footer_about}</Link>
              <Link  to="/gallery"  >{data. Footer_gallery}</Link>
              <Link  to="/contact"  >{data. Footer_contact}</Link>
              <span className=".span"></span>
            </div>
            <div className="footer-services">
              <p>{data.Footer_services}</p>
              <Link to="/data_support" >{data.Footer_data}</Link>
              <Link to="/social_media_support" >{data.Footer_social_media}</Link>
              <Link to="/election_campaign_support" >{data. Footer_election_campaign}</Link>
              <span className=".span"></span>
            </div>
            <div className="footer-legal">
              <p>{data.Footer_Legal}</p>
              <Link to="/privacy_policy"  >{data.Footer_privacy}</Link>
              <Link to="/cookies_policy"  >{data.Footer_cookies}</Link>
              <span className=".span"></span>
            </div>

            <div className="footer-contact">
              <div className="footer-phone">
                <span className="footer-icon-glass">
                  <FaPhone />
                </span>
                <span className="footer-icon">
                  <a href="tel:+918482936866" target="_blank">
                    (+91)8482936866
                  </a>
                </span>
              </div>

              <div className="footer-mail">
                <span className="footer-icon-glass">
                  <IoMdMail />
                </span>
                <span className="footer-icon">
                  <a href="mailto:info@saidigitek.com" target="_blank">
                    info@saidigitek.com
                  </a>
                </span>
              </div>

              <div className="footer-add">
                
                <span className="footer-icon-glass">
                  <FaLocationDot />
                </span>
                <span className="footer-icon">
                  <a
                    href="https://maps.app.goo.gl/jf2eUYVm9uDzL7Sy6"
                    target="_blank"
                  >
                   {data.Footer_address}
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom-content-box parent">
        <div className="footer-bottom-content-box-container cont">
          <div className="footer-social-icons ">
            <span>
              <a href="https://www.facebook.com/saidigitek/" target="_blank">
                <FaFacebookF />
              </a>
            </span>

            <span>
              <a href="https://twitter.com/SaiDigitek" target="_blank">
                <FaXTwitter />
              </a>
            </span>
            <span>
              <a
                href="https://www.linkedin.com/company/saidigitek/"
                target="_blank"
              >
                <FaLinkedinIn />
              </a>
            </span>
            <span>
              <a href="https://www.instagram.com/saidigitek/" target="_blank">
                <FaInstagram />
              </a>
            </span>
          </div>
          <div className="footer-copyright">
            <p>
              Copyright©2024.All Rights Reserved | Saidigitek | Designed &
              Developed by{" "}
              <Link to="https://diwise.uk/" target="_blank">
                Diwise
              </Link>
            </p>
          </div>
        </div>
      </div>
      </>
              );
            })}
    </>
  );
}

export default Footer;
