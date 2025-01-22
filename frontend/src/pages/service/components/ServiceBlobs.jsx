import '../css/serviceblobs.css'

function ServiceBlobs() {
    return (
        <>
            <div class="square linkedin">
                <span></span>
                <span></span>
                <span></span>
                <div class="content">
                    <h2>
                        Corporate Events
                    </h2>
                    <p>We specialize in organizing high-profile corporate events, including business meetings, product launches, and networking sessions that leave a lasting impact.</p>
                    <a className='service_svg_main' target="_blank"><i class="bi bi-building-check"></i></a>
                </div>
            </div>

            <div class="square twitter">
                <span></span>
                <span></span>
                <span></span>
                <div class="content">
                    <h2>
                        Social Events
                    </h2>
                    <p>From casual get-togethers to grand celebrations, we craft unforgettable social events, ensuring every moment is filled with joy and meaningful interactions.</p>
                    <a className='service_svg_main' target="_blank"><i class="bi bi-person-raised-hand"></i></a>
                </div>
            </div>

            <div class="square github">
                <span></span>
                <span></span>
                <span></span>
                <div class="content">
                    <h2>
                        Exhibitions
                    </h2>
                    <p>We manage large-scale exhibitions, trade fairs, and conferences, providing a platform for businesses and creatives to showcase their work and ideas.</p>
                    <a className='service_svg_main' target="_blank"><i class="bi bi-box"></i></a>
                </div>
            </div>
        </>
    )
}

export default ServiceBlobs;