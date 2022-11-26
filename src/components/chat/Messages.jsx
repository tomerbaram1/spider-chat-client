import React, { useRef } from "react";
import { useEffect } from "react";
import "./chat.css";
import { useSelector } from "react-redux";
import moment from "moment";

export default function Messages({ chat,message }) {
  const { user } = useSelector((state) => state.auth);
  const messageEl = useRef(null);
  useEffect(() => {
    messageEl.current?.lastElementChild?.scrollIntoView({
      behavior: "smooth"
    });
  }, [chat]);
  // useEffect(() => {
  //   if(chat && messageEl ){
  //     messageEl.current?.scrollIntoView({
  //       bottom: messageEl.current.scrollHeight,
  //       behavior: "smooth",
  //     });
  //   }

  // }, [chat]);

  return (
    <div>
    <div  className="messages" ref={messageEl}>
      {chat.map((message, index) => {
        return (
          
            <li
              key={index}
              className={`msg ${
                message.message === user.name ? "userMsg" : "diffMsg"
              }`}>
              <div className="message">
                <span className="name">{message.message}</span>

                <h2 className="text">{message.name}</h2>
                  <p className="timestamp">
                    {moment(message.createdAt).format(
                      "hh:mm:ss, A"
                    )}
                  </p>
             
               
                
              </div>
            </li>
          
        );
      })}
    </div >
</div>
  );
}
