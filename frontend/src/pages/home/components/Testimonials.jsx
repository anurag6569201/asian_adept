import React, { useEffect, useRef } from "react";
import "../css/testimonials.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
import * as bootstrap from "bootstrap";

function Testimonials() {
  const carouselRef = useRef(null);

  useEffect(() => {
    if (carouselRef.current) {
      new bootstrap.Carousel(carouselRef.current, {
        interval: 3000,
        ride: "carousel",
      });
    }
  }, []);

  return (
    <div ref={carouselRef} id="myCarousel" className="carousel slide" data-bs-ride="carousel">
      <ol className="carousel-indicators">
        <li data-bs-target="#myCarousel" data-bs-slide-to="0" className="active"></li>
        <li data-bs-target="#myCarousel" data-bs-slide-to="1"></li>
        <li data-bs-target="#myCarousel" data-bs-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="img-box">
            <img src="https://ntrepidcorp.com/wp-content/uploads/2016/06/team-1-400x400.jpg" alt="Client" />
          </div>
          <p className="testimonial">
            Phasellus vitae suscipit justo. Mauris pharetra feugiat ante id lacinia...
          </p>
          <p className="overview">
            <b>Michael Holz</b> Seo Analyst at <a href="#">OsCorp Tech.</a>
          </p>
          <div className="star-rating">
            <ul className="list-inline">
              <li className="list-inline-item"><i className="bi bi-star-fill"></i></li>
              <li className="list-inline-item"><i className="bi bi-star-fill"></i></li>
              <li className="list-inline-item"><i className="bi bi-star-fill"></i></li>
              <li className="list-inline-item"><i className="bi bi-star-fill"></i></li>
              <li className="list-inline-item"><i className="bi bi-star-half"></i></li>
            </ul>
          </div>
        </div>

        <div className="carousel-item">
          <div className="img-box">
            <img src="https://static.vecteezy.com/system/resources/previews/041/469/104/non_2x/ai-generated-business-man-with-glasses-smiling-free-png.png" alt="Client" />
          </div>
          <p className="testimonial">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </p>
          <p className="overview">
            <b>Paula Wilson</b> Media Analyst at <a href="#">SkyNet Inc.</a>
          </p>
          <div className="star-rating">
            <ul className="list-inline">
              <li className="list-inline-item"><i className="bi bi-star-fill"></i></li>
              <li className="list-inline-item"><i className="bi bi-star-fill"></i></li>
              <li className="list-inline-item"><i className="bi bi-star-fill"></i></li>
              <li className="list-inline-item"><i className="bi bi-star-fill"></i></li>
              <li className="list-inline-item"><i className="bi bi-star-half"></i></li>
            </ul>
          </div>
        </div>

        <div className="carousel-item">
          <div className="img-box">
            <img src="https://th.bing.com/th/id/OIP.qg8WcvA3q7cXStP3n0rq5gHaHa?w=980&h=980&rs=1&pid=ImgDetMain" alt="Client" />
          </div>
          <p className="testimonial">
            Vestibulum quis quam ut magna consequat faucibus...
          </p>
          <p className="overview">
            <b>Antonio Moreno</b> Web Developer at <a href="#">Circle Ltd.</a>
          </p>
          <div className="star-rating">
            <ul className="list-inline">
              <li className="list-inline-item"><i className="bi bi-star-fill"></i></li>
              <li className="list-inline-item"><i className="bi bi-star-fill"></i></li>
              <li className="list-inline-item"><i className="bi bi-star-fill"></i></li>
              <li className="list-inline-item"><i className="bi bi-star-fill"></i></li>
              <li className="list-inline-item"><i className="bi bi-star-half"></i></li>
            </ul>
          </div>
        </div>
      </div>

      <a className="carousel-control-prev" href="#myCarousel" role="button" data-bs-slide="prev">
        <i className="bi bi-arrow-left-short"></i>
      </a>
      <a className="carousel-control-next" href="#myCarousel" role="button" data-bs-slide="next">
        <i className="bi bi-arrow-right-short"></i>
      </a>
    </div>
  );
}

export default Testimonials;
