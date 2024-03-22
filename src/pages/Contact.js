import React, { useState } from "react";
import "../styles/contact.scss";
import { SlLocationPin } from "react-icons/sl";
import { getDatabase, ref, push, set } from "firebase/database";
import { app } from "../Firebase";
import { notification } from "antd";
import { FiSmartphone } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { Helmet } from 'react-helmet';

function Contact(props) {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const onHandleSubmit = (e) => {
    e.preventDefault();
    const db = getDatabase(app);
    const contactRef = ref(db, "car");
    const newcontactRef = push(contactRef);
    set(newcontactRef, {
      Client_Fname: fname,
      Client_Lname: lname,
      Client_Phone: phone,
      Client_Email: email,
      Client_Message: msg,
    });

    setFname("");
    setLname("");
    setPhone("");
    setEmail("");
    setMsg("");
  };

  return (
    <>
      <Helmet>
        <title>Contact Page</title>
        <meta name="keywords" content="" />
        <meta name="description" content="" />
        <link rel="canonical" href="https://sambhajipatilnilangekar.in/about" />
      </Helmet>

      {props.data.map((data, index) => (
        <div className="parent contact2" key={index}>
          <div className="contact2-container cont">
            <div className="contact2-cont-top">
              <h2>{data.Contact_heading}</h2>
              <p>{data.Contact_para}</p>
            </div>
            <div className="contact2-cont-bottom">
              <div className="contact2-cont-bottom-left">
                <form action="#" onSubmit={onHandleSubmit}>
                  <div className="input-div">
                    <input
                      type="text"
                      placeholder={data.Contact_first_name}
                      value={fname}
                      onChange={(e) => setFname(e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder={data.Contact_last_name}
                      value={lname}
                      onChange={(e) => setLname(e.target.value)}
                    />
                  </div>
                  <div className="input-div">
                    <input
                      type="tel"
                      placeholder={data.Contact_phone}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                    <input
                      type="email"
                      placeholder={data.Contact_email}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    placeholder={data.Conatct_msg}
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                  ></textarea>

                  <button type="submit" className="btn">
                    {data.Contact_send}
                  </button>
                </form>
              </div>
              <div className="contact2-cont-bottom-right">
                <div className="contacts-list">
                  <div className="contact-item">
                    <div className="icons">
                      <SlLocationPin />
                    </div>
                    <div className="item-details">
                      <h4>{data.Contact_add}</h4>
                      <p>{data.Contact_para_add}</p>
                    </div>
                  </div>
                  <div className="contact-item">
                    <div className="icons">
                      <FiSmartphone />
                    </div>
                    <div className="item-details">
                      <h4>{data.Contact_phone}</h4>
                      <p>(+91) 8482936866</p>
                    </div>
                  </div>
                  <div className="contact-item">
                    <div className="icons">
                      <AiOutlineMail />
                    </div>
                    <div className="item-details">
                      <h4>{data.Contact_email}</h4>
                      <p>info@saidigitek.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Contact;
