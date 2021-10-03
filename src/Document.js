import React, {useCallback, useState} from "react";
import './Document.css'

export default function Document(props) {

    const [isRead, setisRead] = useState(false)

    const handleScroll = () => {

        let content = document.getElementsByClassName('content')[0];

            if ((content.scrollTop + content.offsetHeight) >= content.scrollHeight) {
                setisRead(true)     
            }
    }

    return <div>
                <div className="title">{props.title}</div>
                <div className="content" onScroll={handleScroll}>{props.content}</div>   
                    
                {isRead ?  <button className="allowed" >I agree</button> :
                <button  className="notAllowed" >I agree</button> }
                              
            </div>
}







  