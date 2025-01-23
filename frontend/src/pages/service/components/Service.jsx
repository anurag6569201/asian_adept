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
        { label: "Photography", icon: "bi-camera" },
        { label: "Birthday Ceremony", icon: "bi-balloon" },
        { label: "Meeting and Conference", icon: "bi-people-fill" },
    ];

    const eventDetails = [
        {
            title: "Corporate Events",
            text: "At Asian Adept, we specialize in crafting seamless and unforgettable corporate events tailored to your business needs. From high-profile conferences and product launches to team-building retreats and gala dinners, our expertise ensures that every event is executed with precision and creativity.",
            expertise: [
                "Corporate Conferences & Seminars – End-to-end planning with advanced logistics, engaging speaker lineups, and state-of-the-art audiovisuals.",
                "Product Launches & Brand Activations – Innovative concepts that maximize brand impact and audience engagement.",
                "Annual General Meetings & Networking Events – Professional execution to foster collaboration and corporate networking.",
                "Award Ceremonies & Gala Dinners – Elegant and prestigious gatherings that celebrate achievements in style.",
                "Team-Building & Employee Engagement Programs – Unique and interactive experiences designed to boost team morale and productivity."
            ],
            whyChooseUs: [
                "Strategic Planning & Execution – We handle everything from venue selection to post-event analytics.",
                "Creative & Custom Solutions – Every event is tailored to reflect your company’s identity and objectives.",
                "End-to-End Event Management – We manage vendors, guest experiences, and technical setups, ensuring a flawless event.",
                "Technology & Innovation – We incorporate the latest trends, including virtual and hybrid event solutions, to enhance audience interaction."
            ],
            contact: "Let Asian Adept turn your corporate vision into a reality. Partner with us for an exceptional event experience that leaves a lasting impression!",
            callToAction: "📩 Get in touch today!",
            image_list:[
                "https://picsum.photos/id/1028/300/300",
                "https://picsum.photos/id/15/300/300",
                "https://picsum.photos/id/1040/300/300",
                "https://picsum.photos/id/1040/300/300",
                "https://picsum.photos/id/1040/300/300",
                "https://picsum.photos/id/1040/300/300"
            ]
        },
        {
            title: "Wedding Ceremony",
            text: "Make your special day unforgettable with our wedding planning services. We take care of everything, from venue selection and decor to catering and entertainment.",
            expertise: [
                "Venue Selection – Find the perfect venue that matches your theme and guest count.",
                "Custom Decor – Beautiful and personalized decorations for a dreamy wedding.",
                "Entertainment & Music – Live bands, DJs, and performances to create a magical atmosphere.",
                "Catering Services – Delicious and customized menu options for your guests.",
                "Photography & Videography – Capture every moment of your big day."
            ],
            whyChooseUs: [
                "Tailored Wedding Planning – We make your dream wedding a reality.",
                "Seamless Coordination – From start to finish, we handle everything.",
                "Trusted Vendors – We work with the best decorators, caterers, and photographers.",
                "Stress-Free Experience – Enjoy your special day without any worries."
            ],
            contact: "Let Asian Adept craft the perfect wedding experience for you and your loved ones.",
            callToAction: "💍 Contact us today to plan your dream wedding!",
            image_list:[
                "https://picsum.photos/id/1028/300/300",
                "https://picsum.photos/id/15/300/300",
                "https://picsum.photos/id/1040/300/300",
                "https://picsum.photos/id/1040/300/300",
                "https://picsum.photos/id/1040/300/300",
                "https://picsum.photos/id/1040/300/300"
            ]
        },
        {
            title: "Pre Wedding Ceremony",
            text: "Capture the magic before your big day with a beautifully planned pre-wedding ceremony, including photoshoots, engagements, and parties.",
            expertise: [
                "Engagement Party Planning – A perfect celebration for your engagement.",
                "Pre-Wedding Shoots – Beautifully themed photoshoots in stunning locations.",
                "Mehendi & Sangeet Night – A fun-filled celebration with music and dance.",
                "Guest Arrangements – Accommodation and hospitality for your guests."
            ],
            whyChooseUs: [
                "Creative Planning – Unique themes and ideas for your pre-wedding events.",
                "High-Quality Photography – Capture memories that last a lifetime.",
                "Complete Event Management – From decorations to music, we handle everything."
            ],
            contact: "Let us make your pre-wedding celebrations memorable and magical.",
            callToAction: "📸 Book your pre-wedding event with us today!",
            image_list:[
                "https://picsum.photos/id/1028/300/300",
                "https://picsum.photos/id/15/300/300",
                "https://picsum.photos/id/1040/300/300",
                "https://picsum.photos/id/1040/300/300",
                "https://picsum.photos/id/1040/300/300",
                "https://picsum.photos/id/1040/300/300"
            ]
        },
        {
            title: "Band and Musical Event",
            text: "Whether it's a concert, live band performance, or a musical night, we provide the perfect setup and arrangements to make it an electrifying experience.",
            expertise: [
                "Concert Planning – Complete stage, sound, and lighting setup for a great show.",
                "Live Band Arrangements – Hire top musicians and performers for your event.",
                "DJ & Sound Systems – High-quality sound and lighting for an immersive experience.",
                "Audience Management – Ensure a smooth and enjoyable experience for your guests."
            ],
            whyChooseUs: [
                "Professional Setup – We provide the best audio and visual experience.",
                "Top-Notch Artists – Get access to the best performers and musicians.",
                "Hassle-Free Execution – We manage everything from logistics to live streaming."
            ],
            contact: "Let’s create an unforgettable musical experience for your audience.",
            callToAction: "🎶 Contact us today to book your musical event!",
            image_list:[
                "https://picsum.photos/id/1028/300/300",
                "https://picsum.photos/id/15/300/300",
                "https://picsum.photos/id/1040/300/300",
                "https://picsum.photos/id/1040/300/300",
                "https://picsum.photos/id/1040/300/300",
                "https://picsum.photos/id/1040/300/300"
            ]
        },
        {
            title: "Catering and Reception",
            text: "Delicious food and seamless service are the keys to a great event. Our catering and reception services ensure a delightful experience for your guests.",
            expertise: [
                "Custom Menus – Choose from a variety of cuisines and meal options.",
                "Buffet & Plated Service – From formal dinners to buffet spreads.",
                "Live Food Stations – Interactive food stalls for a unique experience.",
                "Beverage & Bar Services – Cocktails, mocktails, and soft drinks."
            ],
            whyChooseUs: [
                "Quality Ingredients – We use only the freshest ingredients for every dish.",
                "Experienced Chefs – Our chefs bring the best flavors to your table.",
                "Perfect Hospitality – Our team ensures a seamless dining experience."
            ],
            contact: "Make your event a culinary delight with our expert catering services.",
            callToAction: "🍽️ Book our catering services today!",
            image_list:[
                "https://picsum.photos/id/1028/300/300",
                "https://picsum.photos/id/15/300/300",
                "https://picsum.photos/id/1040/300/300",
                "https://picsum.photos/id/1040/300/300",
                "https://picsum.photos/id/1040/300/300",
                "https://picsum.photos/id/1040/300/300"
            ]
        },
        {
            title: "Photography",
            text: "Capture the essence of your special moments with our professional photography and videography services.",
            expertise: [
                "Wedding Photography – Stunning wedding albums and cinematic videos.",
                "Corporate Photography – High-quality event and brand photography.",
                "Birthday & Anniversary Shoots – Capture memories for your special occasions.",
                "Product Shoots – Professional photos to enhance your brand’s visibility."
            ],
            whyChooseUs: [
                "High-Quality Equipment – We use the latest cameras and technology.",
                "Creative Photographers – Our photographers bring a unique perspective.",
                "Affordable Packages – Choose a package that suits your budget."
            ],
            contact: "Preserve your memories with our professional photography services.",
            callToAction: "📷 Book a photoshoot today!",
            image_list:[
                "https://picsum.photos/id/1028/300/300",
                "https://picsum.photos/id/15/300/300",
                "https://picsum.photos/id/1040/300/300",
                "https://picsum.photos/id/1040/300/300",
                "https://picsum.photos/id/1040/300/300",
                "https://picsum.photos/id/1040/300/300"
            ]
        },
        {
            title: "Birthday Ceremony",
            text: "From kids' birthdays to grand celebrations, we create fun, engaging, and memorable birthday parties tailored to your needs.",
            expertise: [
                "Theme Parties – Choose from a wide range of exciting themes.",
                "Balloon & Venue Decor – Bright and beautiful setups for any venue.",
                "Game & Entertainment – Fun-filled activities and games for all ages.",
                "Cake & Catering – Delicious cakes and food for a delightful celebration."
            ],
            whyChooseUs: [
                "Personalized Planning – Every party is unique and special.",
                "Budget-Friendly Packages – We offer solutions for all budgets.",
                "Hassle-Free Execution – Enjoy the party while we handle everything."
            ],
            contact: "Let’s make your birthday celebrations unforgettable!",
            callToAction: "🎂 Contact us to plan your birthday party!",
            image_list:[
                "https://picsum.photos/id/1028/300/300",
                "https://picsum.photos/id/15/300/300",
                "https://picsum.photos/id/1040/300/300",
                "https://picsum.photos/id/1040/300/300",
                "https://picsum.photos/id/1040/300/300",
                "https://picsum.photos/id/1040/300/300"
            ]
        },
        {
            title: "Meeting and Conference",
            text: "Host successful meetings and conferences with our professional event planning services, complete with tech support, catering, and logistics.",
            expertise: [
                "Venue Booking – Find the perfect space for your meeting.",
                "Audiovisual Setup – High-quality sound and presentation systems.",
                "Corporate Catering – Refreshments and meals for attendees.",
                "Virtual & Hybrid Events – Seamless online event management."
            ],
            whyChooseUs: [
                "Professional Execution – We ensure smooth and well-organized events.",
                "Advanced Technology – Cutting-edge tools for hybrid meetings.",
                "Time & Cost Efficiency – Get the best services at competitive prices."
            ],
            contact: "Let us manage your corporate meetings and conferences seamlessly.",
            callToAction: "📊 Contact us for your next corporate event!",
            image_list:[
                "https://picsum.photos/id/1028/300/300",
                "https://picsum.photos/id/15/300/300",
                "https://picsum.photos/id/1040/300/300",
                "https://picsum.photos/id/1040/300/300",
                "https://picsum.photos/id/1040/300/300",
                "https://picsum.photos/id/1040/300/300"
            ]
        }
    ];


    return (
        <div className="container-fluid" style={{ overflowX: 'clip' }}>
            <div className="row" style={{ justifyContent: 'center' }}>
                <div className="services_header">
                    <h1>Services</h1>
                    <p>No matter what size or type of meeting or event you desire, including where, we can help you create one that transforms your participants’ experience, behaviors, and actions.</p>
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
                        {eventDetails.map((event, index) => {
                            const id = index + 1;
                            return (
                                <div key={id} className={`card ${currentId === id ? "card--current" : "hidden"}`}>
                                    <div className="row" style={{flexWrap: 'wrap'}}>
                                        <div className="col-md-12">
                                        <h1>{event.title}</h1>
                                        <p>{event.text}</p>
                                        <hr />
                                        </div>
                                        <div className="col-md-6">
                                            <div className="gallery_container">
                                                <ServiceGallery images={event.image_list}/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                        <div className="expertise">
                                        <h2>Our Expertise</h2>
                                        <ul>
                                            {event.expertise.map((point, i) => (
                                                <li style={{listStyle:'disk'}} key={i}>{point}</li>
                                            ))}
                                        </ul>
                                    </div>
                                        </div>
                                    </div>
                                    {/* Why Choose Us Section */}
                                    <br />
                                    <div className="why-choose-us">
                                        <h2>Why Choose Us?</h2>
                                        <ul>
                                            {event.whyChooseUs.map((point, i) => (
                                                <li style={{listStyle:'disk'}} key={i}>{point}</li>
                                            ))}
                                        </ul>
                                    </div>


                                    {/* Contact and Call to Action */}
                                    <p><strong>📞 {event.contact}</strong></p>
                                    <button className="cta-button">{event.callToAction}</button>
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
