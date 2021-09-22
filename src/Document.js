import App from "./App";
import './Document.css'
import React, {useEffect, useState} from "react";

function Document(props) {

    const [isRead, setIsRead] = useState(false)

    useEffect(() => {
        let content = document.getElementsByClassName('content')[0];

        content.onscroll = function(ev) {

            // console.log('-' + window.innerHeight + window.scrollY)
            console.log(window.innerHeight)
            console.log(content.offsetHeight)

            if ((window.innerHeight + window.scrollY) >= content.offsetHeight) {
                setIsRead(true)
                console.log('read')
            }
            else{
                setIsRead(false)

                console.log('not')
            }
        };
      });


    function scrollFunc(){
        // let isRead;

        let aaa = document.getElementsByClassName('content')[0];

        aaa.onscroll = function(ev) {
            if ((aaa.innerHeight + aaa.scrollY) >= document.body.offsetHeight) {
              
                setIsRead(true)
                console.log(isRead)
                // return isRead = true
                alert('dsjhfdfh')
            }
            else{
                setIsRead(false)

                console.log(isRead)
                alert('dsjhfcsdfsfdfdfh')

                // return isRead = false
            }
        };

    }


    return <div>
                <div className="title">{props.title}</div>
                <div className="content container">{props.content}</div>
                 
        
                {isRead ?  <button className="allowed" onClick={scrollFunc}>I agree</button> :
                           <button  className="notAllowed" onClick={scrollFunc}>I agree</button> }
                  
           </div>
  }
  
  export default Document;







  