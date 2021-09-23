import './Document.css'
import React from "react";
import { Component } from 'react';

export default class Document extends Component {
    constructor(props){
        super(props)

        this.state = { isRead : false }
        this._handleScroll = this._handleScroll.bind(this)
        
    }

    // updateState = () => {
    //     let content = document.getElementsByClassName('content')[0];

    //     content.onscroll = function(ev) {
    //         if ((window.innerHeight + window.scrollY) >= content.offsetHeight) {

    //             this.setState({ isRead : true })
    //             return this.state
                
    //         }
    //         else{
    //             this.setState({ isRead : false })
    //             return this.state
              
    //         }
    //     };
    // }

    // shouldComponentUpdate() {
    //     return this.state.isRead
    // }

    _handleScroll = () => {
       
        this.setState({
            isRead: true
          })

           console.log(this.state.isRead)
    }

    render(){
        const {isRead} = this.state

        return <div>
            <div>{this.isRead}</div>
                <div className="title">{this.props.title}</div>
                <div className="content container" onScroll={this._handleScroll}>{this.props.content}</div>
                        
                
                {isRead ?  <button className="allowed" >I agree</button> :
                    <button  className="notAllowed" >I agree</button> }
                          
            </div>
    }
}







  