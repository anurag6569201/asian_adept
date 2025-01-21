import "bootstrap/dist/css/bootstrap.min.css";
import "../css/welcome.css";

function WelcomeApp() {
    return (
        <div className="welcome-app">
            <header>
                <h1>The Details<span>A CSS Cookbook</span></h1>
            </header>
            <main>
                <div className="content">
                    <div className="tiles">
                        <div style={{ "--r": "45deg" }} className="tile"></div>
                        <div style={{ "--r": "275deg" }} className="tile"></div>
                        <div style={{ "--r": "190deg" }} className="tile"></div>
                        <div style={{ "--r": "45deg" }} className="tile"></div>
                    </div>
                    <section className="section--one">
                        <article>
                            <div className="title-wrap">
                                <h2>Level Up Your CSS.</h2>
                            </div>
                            <hr />
                            <div className="content-wrap">
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab
                                    vel rem dicta. Aut quidem, sed fugiat officiis inventore
                                    nostrum. Nam placeat porro, ea distinctio animi eius rerum,
                                    consequatur vero beatae.
                                </p>
                            </div>
                        </article>
                        <article>
                            <div className="title-wrap">
                                <h2>Dissect Problems.</h2>
                            </div>
                            <hr />
                            <div className="content-wrap">
                                <p>
                                    Obcaecati nam doloremque fugiat cum corporis eveniet atque,
                                    molestias molestiae quaerat nihil sint nostrum cumque itaque
                                    commodi similique suscipit eos autem saepe velit enim voluptas
                                    eum quisquam, facilis ipsum. Et!
                                </p>
                            </div>
                        </article>
                        <article>
                            <div className="title-wrap">
                                <h2>Learn New Techniques.</h2>
                            </div>
                            <hr />
                            <div className="content-wrap">
                                <p>
                                    Nulla atque voluptatum, a natus, ut illum voluptas incidunt
                                    ipsam reprehenderit illo perferendis. Possimus dolorem tempora
                                    minima a mollitia aperiam aliquid voluptatibus fugiat aspernatur
                                    dignissimos, ullam libero odit molestias eveniet?
                                </p>
                            </div>
                        </article>
                        <article>
                            <div className="title-wrap">
                                <h2>Profit.</h2>
                            </div>
                            <hr />
                            <div className="content-wrap">
                                <p>
                                    Similique expedita nihil beatae sunt adipisci deserunt culpa,
                                    nostrum, amet quis veritatis aperiam, ducimus repellat,
                                    assumenda atque quia dicta excepturi sint accusantium voluptas
                                    architecto. Tempore incidunt possimus aspernatur quidem, quasi!
                                </p>
                            </div>
                        </article>
                    </section>
                </div>
                <section className="section--two"></section>
                <section className="section--three"></section>
                <section className="section--four"></section>
                <section className="section--five centered">
                    <h2>fin.</h2>
                </section>
            </main>
        </div>
    );
}

export default WelcomeApp;
