import "../css/curtain.css";
import React, { useEffect, useState } from "react";
import ServiceBlobs from "./ServiceBlobs";
import ServiceGallery from "./ServiceGallery";

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

    const eventDetails = [
        { title: "Corporate Events", text: "We organize professional corporate events that leave a lasting impact. From conferences to team-building activities, we've got you covered." },
        { title: "Wedding Ceremony", text: "Make your special day unforgettable with our wedding planning services. We take care of everything, from venue to decor and catering." },
        { title: "Pre Wedding Ceremony", text: "Capture the magic before your big day with a beautifully planned pre-wedding ceremony, including photoshoots, engagements, and parties." },
        { title: "Band and Musical Event", text: "Whether it's a concert, live band performance, or a musical night, we provide the perfect setup and arrangements to make it an electrifying experience." },
        { title: "Catering and Reception", text: "Delicious food and seamless service are the keys to a great event. Our catering and reception services ensure a delightful experience for your guests." },
        { title: "Thread Ceremony", text: "Celebrate this sacred tradition with grandeur. We take care of the rituals, venue, and arrangements to make the occasion meaningful." },
        { title: "Theme and Floral Decoration", text: "Transform your venue with stunning floral decorations and thematic designs that match the mood and essence of your event." },
        { title: "Photography", text: "Capture the essence of your special moments with our professional photography and videography services." },
        { title: "Marriage Anniversary", text: "Celebrate years of togetherness with a beautifully planned anniversary event, including themes, music, and a delightful experience." },
        { title: "Birthday Ceremony", text: "From kids' birthdays to grand celebrations, we create fun, engaging, and memorable birthday parties tailored to your needs." },
        { title: "Party and Celebration", text: "Be it a private party or a grand celebration, we bring energy, fun, and excitement to make your event a hit." },
        { title: "Meeting and Conference", text: "Host successful meetings and conferences with our professional event planning services, complete with tech support, catering, and logistics." },
    ];

    return (
        <div className="container-fluid" style={{overflowX:'clip'}}>
            <div className="row" style={{ justifyContent: 'center' }}>
                <div className="services_header">
                    <h1>Services</h1>
                    <p>No matter what size or type of meeting or event you desire, including where, we can help you create one that transforms your participants’ experience, behaviors, and actions.</p>
                </div>
                <ServiceBlobs />
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
                        {eventDetails.map((event, index) => {
                            const id = index + 1;
                            return (
                                <div key={id} className={`card ${currentId === id ? "card--current" : "hidden"}`}>
                                    <h1>{event.title}</h1>
                                    <p>{event.text}</p>
                                    <div className="gallery_container">
                                        <ServiceGallery />
                                    </div>
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
