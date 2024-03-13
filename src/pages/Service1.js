import React from 'react'
import '../styles/services.scss'
import TwoColSec from '../Comp/TwoColSec'
import List from '../component/List'
import BeforeFooter from '../component/BeforeFooter'
import Card_section from '../component/Card_section'
import social from "../Img/social-media/Social-Media-Support.webp"
import medium from "../Img/social-media/A-medium-to-reach-young-minds.webp"
import mainstream from "../Img/social-media/mainstream-card3.webp"
import personal from "../Img/social-media/Creating-personal-connection.webp"



function Service1(props) {
  return (
    <>
    {props.data.map((data) =>{
   return(

    <>
      <div className="nav-gap"></div>
      <TwoColSec
            bg={social}
            row=""
            background="#f6f6f6"
            subheading={data.Social_media_support_subheading}
            subdescription={data. Social_media_support_subdescription}
            btn=""
            secind={data.Social_media_secind}
          >
            <List
              title={data.Social_media_support_ul_title}
              li1={data.Social_media_support_ul_li1}
              li2={data.Social_media_support_ul_li2}
              li3={data.Social_media_support_ul_li3}
              li4={data.Social_media_support_ul_li4}
              li5={data.Social_media_support_ul_li5}
              li6={data.Social_media_support_ul_li6}
              li7={data.Social_media_support_ul_li7}
              li8={data.Social_media_support_ul_li8}
            />
          </TwoColSec>

          {/* card section */}

          <Card_section 
      height="540px"    
      titles={data.Social_media_effect}
      heading={data.Social_media_heading}
      para={data.Social_media_para}
      card1={data.Social_media_support_card1}
      card1para={data.Social_media_support_card1para}
      card2={data.Social_media_support_card2}
      card2para={data.Social_media_support_card2para}
      card3={data.Social_media_support_card3}
      card3para={data.Social_media_support_card3para}
      btntext=""  
      bg="#f6f6f6" 
      
      mainbg="#ffffff" 
      img={medium}
      img1={personal}
      img2={mainstream}
      />

         
        
    <BeforeFooter
     para1={data.Home_beforefooter_para}
     para2={data.Home_beforefooter_para2}
     button={data.Home_beforefooter_button}
     bg=""
     
     
     />
     </>
              );
            })}
    </>
  )
}

export default Service1
