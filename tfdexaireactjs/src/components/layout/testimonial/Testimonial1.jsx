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
const Testimonial1 = () => {
  return (
    <section className="testimonial-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="section-title text-center mb-70">
              <h2
                className="title title-animation wow fadeInUp"
                data-wow-delay=".2s"
              >
                <span>6,000,000+</span> <br /> Professionals & teams choose us
              </h2>
            </div>
          </div>
        </div>
        <div className="testimonial-item-wrap">
          <Slider {...settings} className="row testimonial-active">
            <div className="col">
              <div className="testimonial-item">
                <div className="testimonial-shape">
                  <svg
                    viewBox="0 0 561 274"
                    fill="none"
                    x="0px"
                    y="0px"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M97.8407 0H531C547.569 0 561 13.4315 561 30V244C561 260.569 547.569 274 531 274H127.841C111.272 274 97.8407 260.569 97.8407 244V78.4298C97.8407 66.4626 90.7283 55.6401 79.7433 50.8921L6.37287 19.1792C-3.59343 14.8715 -0.516972 0 10.3404 0H97.8407Z"
                      fill="currentcolor"
                    />
                  </svg>
                </div>
                <div className="testimonial-thumb">
                  <img src="/assets/img/images/testi_avatar01.png" alt="" />
                </div>
                <div className="testimonial-content">
                  <div className="rating">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <p>
                    "As a content writer, I was initially skeptical about using
                    an AI tool. But after trying it out, I have to say that I'm
                    blown away by the results.
                  </p>
                  <div className="testimonial-bottom">
                    <h5 className="title">Emily Johnson</h5>
                    <span>Podcast Host</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="testimonial-item">
                <div className="testimonial-shape">
                  <svg
                    viewBox="0 0 561 274"
                    fill="none"
                    x="0px"
                    y="0px"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M97.8407 0H531C547.569 0 561 13.4315 561 30V244C561 260.569 547.569 274 531 274H127.841C111.272 274 97.8407 260.569 97.8407 244V78.4298C97.8407 66.4626 90.7283 55.6401 79.7433 50.8921L6.37287 19.1792C-3.59343 14.8715 -0.516972 0 10.3404 0H97.8407Z"
                      fill="currentcolor"
                    />
                  </svg>
                </div>
                <div className="testimonial-thumb">
                  <img src="/assets/img/images/testi_avatar02.png" alt="" />
                </div>
                <div className="testimonial-content">
                  <div className="rating">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <p>
                    “I cant imagine my life without Goco.It has changed the game
                    for me. I can put in a sentence or two of a generic idea and
                    Goco. takes it in and in 30 seconds.
                  </p>
                  <div className="testimonial-bottom">
                    <h5 className="title">les alexander</h5>
                    <span>Entrepreneur</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="testimonial-item">
                <div className="testimonial-shape">
                  <svg
                    viewBox="0 0 561 274"
                    fill="none"
                    x="0px"
                    y="0px"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M97.8407 0H531C547.569 0 561 13.4315 561 30V244C561 260.569 547.569 274 531 274H127.841C111.272 274 97.8407 260.569 97.8407 244V78.4298C97.8407 66.4626 90.7283 55.6401 79.7433 50.8921L6.37287 19.1792C-3.59343 14.8715 -0.516972 0 10.3404 0H97.8407Z"
                      fill="currentcolor"
                    />
                  </svg>
                </div>
                <div className="testimonial-thumb">
                  <img src="/assets/img/images/testi_avatar03.png" alt="" />
                </div>
                <div className="testimonial-content">
                  <div className="rating">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <p>
                    "I've been using the AI writing tool for a few months now,
                    and it's completely transformed my workflow. Not only has it
                    saved me time and energy."
                  </p>
                  <div className="testimonial-bottom">
                    <h5 className="title">Michael Davis</h5>
                    <span>Content Writer</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="testimonial-item">
                <div className="testimonial-shape">
                  <svg
                    viewBox="0 0 561 274"
                    fill="none"
                    x="0px"
                    y="0px"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M97.8407 0H531C547.569 0 561 13.4315 561 30V244C561 260.569 547.569 274 531 274H127.841C111.272 274 97.8407 260.569 97.8407 244V78.4298C97.8407 66.4626 90.7283 55.6401 79.7433 50.8921L6.37287 19.1792C-3.59343 14.8715 -0.516972 0 10.3404 0H97.8407Z"
                      fill="currentcolor"
                    />
                  </svg>
                </div>
                <div className="testimonial-thumb">
                  <img src="/assets/img/images/testi_avatar04.png" alt="" />
                </div>
                <div className="testimonial-content">
                  <div className="rating">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <p>
                    "I was hesitant to invest in an AI writing tool, but after
                    seeing the results it produced, I have no regrets. The tool
                    has helped
                  </p>
                  <div className="testimonial-bottom">
                    <h5 className="title">Jennifer Taylor</h5>
                    <span>Blogger</span>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};
export default Testimonial1;
