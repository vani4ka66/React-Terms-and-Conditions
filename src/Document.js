import App from "./App";
import './Document.css'
import React, {useEffect, useState} from "react";

function Document(props) {

    const [isRead, setIsRead] = useState(false)

    useEffect(() => {
        let content = document.getElementsByClassName('content')[0];

        content.onscroll = function(ev) {
            if ((window.innerHeight + window.scrollY) >= content.offsetHeight) {
                setIsRead(true)
            }
            else{
                setIsRead(false)
            }
        };
      });

    return <div>
                <div className="title">{props.title}</div>
                <div className="content container">{props.content}</div>
                 
        
                {isRead ?  <button className="allowed" >I agree</button> :
                           <button  className="notAllowed" >I agree</button> }
                  
           </div>
  }
  
  export default Document;







  