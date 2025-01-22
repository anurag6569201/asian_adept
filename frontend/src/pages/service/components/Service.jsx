import "../css/curtain.css";
import React, { useEffect, useState } from "react";
import ServiceBlobs from "./ServiceBlobs";

function Service() {
    const [currentId, setCurrentId] = useState(1);

    const handleTabClick = (newId) => {
        if (newId === currentId) return;
        setCurrentId(newId);
    };

    const tabs = [
        { label: "Corporate Events", icon: "bi-building" },
        { label: "Wedding Ceremony", icon: "bi-heart-fill" },
        { label: "Pre Wedding Ceremony", icon: "bi-gem" },
        { label: "Band and Musical Event", icon: "bi-music-note-beamed" },
        { label: "Catering and Reception", icon: "bi-egg-fried" },
        { label: "Thread Ceremony", icon: "bi-person-check" },
        { label: "Theme and Floral Decoration", icon: "bi-flower1" },
        { label: "Photography", icon: "bi-camera" },
        { label: "Marriage Anniversary", icon: "bi-calendar-heart" },
        { label: "Birthday Ceremony", icon: "bi-balloon" },
        { label: "Party and Celebration", icon: "bi-emoji-smile" },
        { label: "Meeting and Conference", icon: "bi-people-fill" },
    ];

    return (
        <div className="container-fluid">
            <div className="row" style={{justifyContent:'center'}}>
                <div className="services_header">
                    <h1>Services</h1>
                    <p>No matter what size or type of meeting or event you desire, including where, Encore can help you create one that transforms your participants’ experience, behaviors and actions.</p>
                </div>
                <ServiceBlobs/>
            </div>
            <div className="row services_row">
                {/* Tab Controls */}
                <div className="col-md-3">
                    <ul className="tabs-controls">
                        {tabs.map((tab, index) => {
                            const id = index + 1;
                            return (
                                <li key={id} className="tabs-controls__item">
                                    <button
                                        className={`tabs-controls__link ${currentId === id ? "tabs-controls__link--active" : ""}`}
                                        onClick={() => handleTabClick(id)}
                                    >
                                        <i className={`bi ${tab.icon} me-2`}></i> {tab.label}
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                {/* Cards */}
                <div className="col-md-9">
                    <div className="cards-container">
                        {[
                            { title: "Corporate Events. Lorem ipsum dolor sit amet", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." },
                            { title: "Wedding Ceremony. Elit, sed do eiusmod", text: "Elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
                            { title: "Pre Wedding Ceremony. Consectetur adipisicing elit", text: "Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
                            { title: "Band and Musical Event. Sed do eiusmod", text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
                            { title: "Catering and Reception. Ut enim ad minim veniam", text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
                            { title: "Thread Ceremony. Labore et dolore magna aliqua", text: "Labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
                        ].map((card, index) => {
                            const id = index + 1;
                            return (
                                <div key={id} className={`card ${currentId === id ? "card--current" : "hidden"}`}>
                                    <h1>{card.title}</h1>
                                    <p>{card.text}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Service;
