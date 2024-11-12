import React from "react";
import "./Join.css";
import emailjs from '@emailjs/browser';
import { useRef } from "react";
const Join = () => {
    const form=useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_rh7svca', 'template_f2m7v0b', form.current, {
            publicKey: 'Ykf1rWDoAznfZBd9v',
          })
          .then(
            (result) => {
              console.log('SUCCESS!',result.text);
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      }; 

    return (
        <div className="join" id="join-us">
            <div className="left-j">
                <hr/>
                <div>
                    <span className="stroke-text">READY TO </span>
                    <span>LEVEL UP</span>
                </div>
                <div>
                    <span>YOUR BODY </span>
                    <span className="stroke-text">WITH US</span>
                </div>
            </div>



            <div className="right-j">
                <form ref={form} action="" className="email-container" onSubmit={sendEmail} >
                    <input type="email" name="user_email" placeholder="Enter your email address" />
                    <button className="btn btn-j" >Join Now</button>
                </form>
            </div>
    </div>
    );
};

export default Join;
