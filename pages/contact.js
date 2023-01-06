import React from "react";
import Head from "next/head";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Next JS | Contact</title>
        <meta name="keywords" content="Umar Ashraf" />
      </Head>
      <div className="indexbody">
        <h1>Contact Us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
      </div>
      <div className="containercon contactbody">
        <div className="content">
          <div className="left-side">
            <div className="address details">
              <div className="topic">Address</div>
              <div className="text-one">ABCD, EF12</div>
              <div className="text-two">XYZ 01</div>
            </div>
            <div className="phone details">
              <div className="topic">Phone</div>
              <div className="text-one">+012 3456 789</div>
              <div className="text-two">+098 7654 321</div>
            </div>
            <div className="email details">
              <div className="topic">Email</div>
              <div className="text-one">hello@example.com</div>
              <div className="text-two">info.hello@example.com</div>
            </div>
          </div>
          <div className="right-side">
            <div className="topic-text">Send us a message</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <form action="#">
              <div className="input-box">
                <input type="text" placeholder="Enter your name" />
              </div>
              <div className="input-box">
                <input type="text" placeholder="Enter your email" />
              </div>
              <div className="input-box message-box">
                <input type="text" placeholder="Enter your Message" />
              </div>
              <div className="button">
                <input type="button" value="Send Now" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
