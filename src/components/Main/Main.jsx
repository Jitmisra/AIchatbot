/* eslint-disable no-unused-vars */

import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'

export const Main = () => {
  return (
    <div className='main'>
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon}/>

        </div>
        <div className="main-container">
            <div className="greet">
                <p><span>Hello, Agnik</span></p>
                <p>How Can I help you Today?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Suggest beautiful place to see </p>
                    <img src={assets.compass_icon}/>
                </div>
                <div className="card">
                    <p>Suggest beautiful place to see </p>
                    <img src={assets.bulb_icon}/>
                </div>
                <div className="card">
                    <p>Suggest beautiful place to see </p>
                    <img src={assets.message_icon}/>
                </div>
                <div className="card">
                    <p>Suggest beautiful place to see </p>
                    <img src={assets.code_icon}/>
                </div>
            </div>
            <div className="main-bottom">
                <div className="search-box">
                    <input type="text" placeholder='Enter a propmpt here'/>
                    <div>
                        <img src={assets.gallery_icon} alt=""/>
                        <img src={assets.mic_icon} alt=""/>

                        <img src={assets.send_icon} alt=""/>

                    </div>

                </div>
                <p className='bottom-info'>Gemini may display inappropriate info.</p>
                
            </div>
        </div>
    </div>
  )
}
