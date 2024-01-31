import Slider from "react-slick";
const settings = {
  dots: false,
  infinite: true,
  speed: 1000,
  autoplay: true,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "90px",
  vertical: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        centerPadding: "90px",
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "90px",
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        centerPadding: "90px",
      },
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      },
    },
  ],
};

const Counter2 = () => {
  return (
    <section className="counter-area-two pt-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="counter-wrap">
              <div className="row g-0">
                <div className="col-lg-8">
                  <div
                    className="counter-item-wrap"
                    data-background="assets/img/images/h2_counter_shape.png"
                  >
                    <h6 className="title">
                      The #4 rated AI video creation platform
                    </h6>
                    <div className="row">
                      <div className="col-md-4">
                        <div className="counter-item-two">
                          <h2 className="count">200K</h2>
                          <p>Customers</p>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="counter-item-two st1">
                          <h2 className="count">24M</h2>
                          <p>Videos Created</p>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="counter-item-two st2">
                          <h2 className="count">#4</h2>
                          <p>Rated on G2</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="certificate-wrap">
                    <Slider {...settings} className="certificate-active">
                      <div className="certificate-item">
                        <img
                          src="/assets/img/images/certificate01.png"
                          alt=""
                        />
                      </div>
                      <div className="certificate-item">
                        <img
                          src="/assets/img/images/certificate02.png"
                          alt=""
                        />
                      </div>
                      <div className="certificate-item">
                        <img
                          src="/assets/img/images/certificate03.png"
                          alt=""
                        />
                      </div>
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="counter-shape">
        <img
          src="/assets/img/images/counter_shape.png"
          alt=""
          data-aos="fade-left"
          data-aos-delay={300}
        />
      </div>
    </section>
  );
};
export default Counter2;
