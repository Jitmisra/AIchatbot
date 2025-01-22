 /* eslint-disable no-unused-vars */

import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'
import { useContext } from 'react'

export const Main = () => {

    const {onSent,recentPrompt,showResult,resultData,loading,setInput,input}=useContext(Context)
  return (
    <div className='main'>
        <div className="nav">
            <p>20° C</p>
            <img src={assets.user_icon}/>

        </div>
        <div className="main-container">
            {!showResult?
            <>
            <div className="greet">
                <p><span>Hello, Agnik</span></p>
                {/* <p>How Can I help you Today?</p> */}
            </div>
            <div className="cards">
                <div className="card">
                    <p>Suggest beautiful place to see 🙂 </p>
                    
                    <img className='card-circle' src={assets.compass_icon}/>
                </div>
                <div className="card">
                    <p>Suggest some tips 💡</p>
                    <img className='card-circle' src={assets.bulb_icon}/>
                </div>
                <div className="card">
                    <p>Learn new language📝 </p>
                    <img className='card-circle' src={assets.message_icon}/>
                </div>
                <div className="card">
                    <p>Solve Coding problems🧑🏻‍💻 </p>
                    <img className='card-circle' src={assets.code_icon}/>
                </div>
            </div>

            </>
            :<div className='result'>

                <div className="result-title">
                    <img src={assets.user_icon}/>
                    <p>{recentPrompt}</p>
                </div>
                <div className="result-data">
                    <img src={assets.gemini_icon}/>
                    {loading
                    ?<div className='loader'>
                        <hr/>
                        <hr/>
                        <hr/>

                    </div>
                    :
                    <p dangerouslySetInnerHTML={{__html: resultData}}></p>

                    }
                    
                </div>
            </div>
            }
            
            <div className="main-bottom">
            <div className="search-box2">
                <div className="search-box">
                    <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='🧠 Whats on your mind...'/>
                    

                </div>
                <div className="Submit" onClick={()=>onSent()}>
                             <p>Submit</p>
                        </div>
            </div>
                <p className='bottom-info'>CritiAI may display inappropriate info.</p>
                
            </div>
        </div>
    </div>
  )
}
