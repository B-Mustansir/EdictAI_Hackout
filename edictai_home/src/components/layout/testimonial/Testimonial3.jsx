import { Link } from "react-router-dom";

import Slider from "react-slick";
const settings = {
  dots: false,
  infinite: true,
  speed: 1000,
  autoplay: true,
  arrows: false,
  slidesToShow: 2,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "0",
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        centerPadding: "0",
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        centerPadding: "170px",
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "40px",
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        centerPadding: "20px",
      },
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        centerPadding: "0px",
      },
    },
  ],
};

const Testimonial3 = () => {
  return (
    <section className="testimonial-area-three">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8 col-md-9">
            <div
              className="section-title-three text-center mb-70 title-animation wow fadeInUp"
              data-wow-delay=".2s"
            >
              <h2 className="title">
                What Our Happy Users <span>say about us</span>
              </h2>
            </div>
          </div>
        </div>
        <Slider {...settings} className="row testimonial-active-three">
          <div className="col-lg-6">
            <div className="testimonial-item-three">
              <div className="testimonial-top">
                <div className="testimonial-avatar">
                  <div className="testi-avatar-img">
                    <img
                      src="/assets/img/images/h3_testi_avatar01.png"
                      alt=""
                    />
                  </div>
                  <div className="testi-avatar-info">
                    <h2 className="title">Emily Johnson</h2>
                    <span>@emilyjohnson</span>
                  </div>
                </div>
                <div className="testimonial-rating">
                  <span>4.5</span>
                  <img src="/assets/img/icon/star.svg" alt="" />
                </div>
              </div>
              <div className="testimonial-tag">
                <ul className="list-wrap">
                  <li>
                    <Link to="/help">Awesome</Link>
                  </li>
                  <li>
                    <Link to="/help">Fast respond</Link>
                  </li>
                </ul>
              </div>
              <div className="testimonial-content-three">
                <p>
                  "I've tried other text to speech programs before, but this one
                  is by far the best. The voice sounds natural and the
                  customization do the same”
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="testimonial-item-three">
              <div className="testimonial-top">
                <div className="testimonial-avatar">
                  <div className="testi-avatar-img">
                    <img
                      src="/assets/img/images/h3_testi_avatar02.png"
                      alt=""
                    />
                  </div>
                  <div className="testi-avatar-info">
                    <h2 className="title">Sean Rose</h2>
                    <span>@seanrose</span>
                  </div>
                </div>
                <div className="testimonial-rating">
                  <span>4.5</span>
                  <img src="/assets/img/icon/star.svg" alt="" />
                </div>
              </div>
              <div className="testimonial-tag">
                <ul className="list-wrap">
                  <li>
                    <Link to="/help">Awesome</Link>
                  </li>
                  <li>
                    <Link to="/help">Fast respond</Link>
                  </li>
                </ul>
              </div>
              <div className="testimonial-content-three">
                <p>
                  "This text to speech software has been a real lifesaver for
                  me. As someone who struggles with reading due to dyslexia, I
                  can now listen to articles and documents with ease. The
                  natural-sounding voice and customization options make it a joy
                  to use. Whether I'm driving, working out, or just need a
                  break!"
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="testimonial-item-three">
              <div className="testimonial-top">
                <div className="testimonial-avatar">
                  <div className="testi-avatar-img">
                    <img
                      src="/assets/img/images/h3_testi_avatar03.png"
                      alt=""
                    />
                  </div>
                  <div className="testi-avatar-info">
                    <h2 className="title">Jeremy McPeak</h2>
                    <span>@jwmcpeak</span>
                  </div>
                </div>
                <div className="testimonial-rating">
                  <span>4.5</span>
                  <img src="/assets/img/icon/star.svg" alt="" />
                </div>
              </div>
              <div className="testimonial-tag">
                <ul className="list-wrap">
                  <li>
                    <Link to="/help">Awesome</Link>
                  </li>
                  <li>
                    <Link to="/help">Fast respond</Link>
                  </li>
                </ul>
              </div>
              <div className="testimonial-content-three">
                <p>
                  "As a busy professional, I'm always on the go. Thanks to this
                  text to speech software, I can stay productive no matter where
                  I am. It's fast, easy to use."
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="testimonial-item-three">
              <div className="testimonial-top">
                <div className="testimonial-avatar">
                  <div className="testi-avatar-img">
                    <img
                      src="/assets/img/images/h3_testi_avatar04.png"
                      alt=""
                    />
                  </div>
                  <div className="testi-avatar-info">
                    <h2 className="title">Sam Jenkins</h2>
                    <span>@samjenkins1980</span>
                  </div>
                </div>
                <div className="testimonial-rating">
                  <span>4.5</span>
                  <img src="/assets/img/icon/star.svg" alt="" />
                </div>
              </div>
              <div className="testimonial-tag">
                <ul className="list-wrap">
                  <li>
                    <Link to="#">Awesome</Link>
                  </li>
                  <li>
                    <Link to="#">Fast respond</Link>
                  </li>
                </ul>
              </div>
              <div className="testimonial-content-three">
                <p>
                  "I was hesitant to try text to speech at first, but I'm so
                  glad I did. It's made reading so much easier for me and has
                  even helped me improve my omprehension. I recommend this
                  software to anyone who struggles with reading or just wants a
                  more efficient way to consume written content."
                </p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};
export default Testimonial3;
