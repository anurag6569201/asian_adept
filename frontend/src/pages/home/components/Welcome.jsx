import "bootstrap/dist/css/bootstrap.min.css";
import "../css/welcome.css";
import Testimonials from "./Testimonials";
function WelcomeApp() {
    return (
        <>
        <div className="welcome-app">
            <main>
                <div className="content container">
                    <div className="row" style={{minHeight:'80vh'}}>
                        <div className="col-md-5"  style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                            <div className="tiles">
                                <div style={{ "--r": "45deg" }} className="tile"></div>
                                <div style={{ "--r": "275deg" }} className="tile"></div>
                                <div style={{ "--r": "190deg" }} className="tile"></div>
                                <div style={{ "--r": "45deg" }} className="tile"></div>
                            </div>
                        </div>
                        <div className="col-md-7"  style={{display:'flex',alignItems:'center'}}>
                            <section className="section--one">
                                <article>
                                    <div className="title-wrap">
                                        <h2>Welcome to Asian Adept Events.</h2>
                                    </div>
                                    <hr />
                                    <div className="content-wrap hover-target" style={{zIndex:'12'}}>
                                        <p>
                                            Asian Adept is a premier event management company and wedding planner based in Bhubaneswar, Odisha. With services extending to cities like Rourkela, Jharsuguda, Angul, and Talcher, as well as other states across India, we specialize in creating unforgettable events. For over 14 years, we have been delivering top-tier event planning services, ensuring excellence and customer satisfaction. Our motto is simple: "Customer satisfaction is our best achievement."
                                        </p>
                                    </div>
                                </article>
                                <article>
                                    <div className="title-wrap">
                                        <h2>Comprehensive Event Management Services</h2>
                                    </div>
                                    <hr />
                                    <div className="content-wrap hover-target" style={{zIndex:'12'}}>
                                        <p>
                                            At Asian Adept, we curate and execute a wide range of events tailored to our clients' unique needs. Our services include:
                                            <li>Wedding Planning & Decoration (including Destination Weddings)</li>
                                            <li>Private Celebrations (Bachelor Parties, Birthday Parties, Anniversary Parties)</li>
                                            <li>Corporate Events (Meetings, Conferences, Brand Promotions, Inaugurations)</li>
                                            <li>Entertainment & Special Events (Musical Parties, Star Nights, Cultural Programs)</li>
                                            No matter the occasion, we bring creativity, professionalism, and flawless execution to every event.
                                        </p>
                                    </div>
                                </article>
                                <article>
                                    <div className="title-wrap">
                                        <h2>Commitment to Excellence & Customer Satisfaction.</h2>
                                    </div>
                                    <hr />
                                    <div className="content-wrap hover-target" style={{zIndex:'12'}}>
                                        <p>
                                            Asian Adept takes pride in delivering successful events that leave lasting impressions. With a track record of grand and memorable occasions, we ensure that every event we manage is a seamless experience. Our dedication to customer satisfaction, attention to detail, and personalized service makes us the preferred choice for event planning.
                                        </p>
                                    </div>
                                </article>
                                <article>
                                    <div className="title-wrap">
                                        <h2>Trusted by Clients, Growing Through Excellence.</h2>
                                    </div>
                                    <hr />
                                    <div className="content-wrap hover-target" style={{zIndex:'12'}}>
                                        <p>
                                            With years of expertise in wedding and event management, we have earned numerous accolades and positive feedback from our clients. Many of our customers come through word-of-mouth recommendations, as our patrons consider us more than just event planners—they see us as a trusted part of their celebrations. Our growing client base is a testament to our commitment to excellence and the strong relationships we build with every event we organize.
                                        </p>
                                    </div>
                                </article>
                            </section>
                        </div>
                    </div>
                </div>
                <section className="section--two"></section>
                <section className="section--three"></section>
                <section className="section--four"></section>
                <section className="section--five" style={{zIndex:'10'}}>
                    <Testimonials/>
                </section>
            </main>
        </div>
        </>
    );
}

export default WelcomeApp;
