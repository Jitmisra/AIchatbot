/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const Sidebar = () => {
    const { prevPrompts, onSent, newChat, setRecentPrompt } = useContext(Context);

    const loadPrompt = (prompt) => {
        setRecentPrompt(prompt);
        onSent(prompt); // Will use the cached response if available
    };

    return (
        <div className="sidebar">
            <div className="top">
                <div className="CritiAI">
                   <p>Criti<span>AI</span></p>
                </div>
                
                <div className="new-chat" onClick={newChat}>
                    <img src={assets.plus_icon} alt="New Chat Icon" />
                    <p>New Chat</p>
                </div>
                <div className="recent">
                    <p className="recent-title">Recent</p>
                    {prevPrompts.map((item, index) => (
                        <div
                            key={index}
                            className="recent-entry"
                            onClick={() => loadPrompt(item)}
                        >
                            <img src={assets.message_icon} alt="Message Icon" />
                            <p>{item.length > 18 ? `${item.slice(0, 18)}...` : item}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="bottom">
                <div className="bottom-item recent-entry">
                    <img src={assets.question_icon} alt="Help Icon" />
                    <p>Help</p>
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.history_icon} alt="History Icon" />
                    <p>Activity</p>
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.setting_icon} alt="Settings Icon" />
                    <p>Settings</p>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;