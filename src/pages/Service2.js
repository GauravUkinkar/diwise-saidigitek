import React from "react";
import "../styles/services.scss";
import TwoColSec from "../Comp/TwoColSec";
import List from "../component/List";
import { CiCircleCheck } from "react-icons/ci";
import BeforeFooter from "../component/BeforeFooter";
import datas from "../Img/data-support/Data-Collection-2.webp"
import analy from "../Img/data-support/Data-Analysis.webp"
import candidate from "../Img/data-support/choose-the-right-one.webp"
import victory from "../Img/data-support/PLAN-FOR-VICTORY.webp"
import because from "../Img/data-support/Because-Knowledge-Is-Power.webp"


function Service2(props) {

  return (
    
    <>
         {props.data.map((data) =>{
        return(
<>
    <div>
      <div className="nav-gap" id="service1"></div>
      <div className="service-parent parent">
        <div className="service-container container">
          <TwoColSec
           row=""
           secind={data.Data_support_secind}
           bg={because}
           background=""
           subheading={data.Data_support_subheading}
           subdescription={data.Data_support_subdescription}
           btn=""
          ></TwoColSec>
          <TwoColSec
            bg={datas}
            row="row-reverse"
            background="#f6f6f6"
            subheading={data.Data_support_collection_subheading}
            subdescription={data.Data_support_collection_subdescription}
            btn=""
            secind={data.Data_support_collection_secind}
          >
            <div className="service-list-two">
            <div className="service-list1">
            <List
              title={data.Data_support_ul1_title1}
              li1={data.Data_support_ul1_li1}
              li2={data.Data_support_ul1_li2}
              li3={data.Data_support_ul1_li3}
              li4={data.Data_support_ul1_li4}
              li5={data.Data_support_ul1_li5}
              li6={data.Data_support_ul1_li6}
              li7={data.Data_support_ul1_li7}
            />
            </div>
            <div className="service-list2">
            <List
              title={data.Data_support_ul2_title2}
              li1={data.Data_support_ul2_li1}
              li2={data.Data_support_ul2_li2}
              li3={data.Data_support_ul2_li3}
              li4={data.Data_support_ul2_li4}
              li5={data.Data_support_ul2_li5}
              li6={data.Data_support_ul2_li6}
              li7={data.Data_support_ul2_li7}
            />
            </div>
            </div>
            
          </TwoColSec>
          <TwoColSec
            bg={analy}
            row=""
            background=""
            subheading={data.Data_analysis_subheading}
            subdescription={data.Data_analysis_subdescription}
            btn=""
            secind={data.Data_analysis_secind}
          >
            <List
              li1={data.Data_analysis_ul3_li1}
              li2={data.Data_analysis_ul3_li2}
              li3={data.Data_analysis_ul3_li3}
              li4={data.Data_analysis_ul3_li4}
              li5={data.Data_analysis_ul3_li5}
              li6={data.Data_analysis_ul3_li6}
              li7={data.Data_analysis_ul3_li7}
            />
          </TwoColSec>
          <TwoColSec
            bg={candidate}
            row="row-reverse"
            background="#f6f6f6"
            subheading={data. Data_candidate_survey_subheading}
            subdescription={data. Data_candidate_survey_subdescription}
            btn=""
            secind={data.Data_candidate_survey_secind}
          >
            <List
              li1={data.Data_candidate_survey_ul4_li1}
              li2={data.Data_candidate_survey_ul4_li2}
              li3={data.Data_candidate_survey_ul4_li3}
              li4={data.Data_candidate_survey_ul4_li4}
              li5={data.Data_candidate_survey_ul4_li5}
              li6=""
              li7=""
            />
          </TwoColSec>
          <TwoColSec
            bg={victory}
            row=""
            background=""
            subheading={data. Data_strategy_planning_subheading}
            subdescription={data. Data_strategy_planning_subdescription}
            btn=""
            secind={data.Data_strategy_planning_secind}
          >
            <List
              li1={data.Data_strategy_planning_ul5_li1}
              li2={data.Data_strategy_planning_ul5_li2}
              li3={data.Data_strategy_planning_ul5_li3}
              li4={data.Data_strategy_planning_ul5_li4}
              li5={data.Data_strategy_planning_ul5_li5}
              li6={data.Data_strategy_planning_ul5_li6}
              li7={data.Data_strategy_planning_ul5_li7}
              li8={data.Data_strategy_planning_ul5_li8}
            />
          </TwoColSec>
      

          <BeforeFooter
     para1={data.Home_beforefooter_para}
     para2={data.Home_beforefooter_para2}
     button={data.Home_beforefooter_button}
     bg=""
     
     
     />
        </div>
      </div>
    </div>

    </>
              );
            })}

    </>
  );
}

export default Service2;
