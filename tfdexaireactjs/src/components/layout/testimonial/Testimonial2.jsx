import Slider from "react-slick";
const settings = {
  dots: false,
  infinite: true,
  speed: 1000,
  autoplay: true,
  arrows: false,
  slidesToShow: 3,
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

const Testimonial2 = () => {
  return (
    <section
      className="testimonial-area-two testimonial-bg"
      data-background="assets/img/bg/testimonial_bg.png"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-7">
            <div className="section-title-two text-center mb-70">
              <h2 className="title wow fadeInUp" data-wow-delay=".2s">
                See why people like you &nbsp;
                <span>
                  <strong>
                    Choose&nbsp;
                    <svg
                      viewBox="0 0 345 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M344.366 0.00527191C231.51 16.2892 117.803 18.0623 5.82257 7.9456C3.59842 7.74418 0.292572 9.4891 0.0174561 12.1809C-0.260559 14.9221 2.83823 17.0748 5.06818 17.301C117.89 28.79 231.159 22.6085 344.545 1.4609C345.266 1.32606 345.074 -0.0971813 344.366 0.00527191Z"
                        fill="url(#testimonial_title)"
                      />
                      <defs>
                        <linearGradient
                          id="testimonial_title"
                          x1="376.061"
                          y1="0.000463246"
                          x2="10.2776"
                          y2="101.79"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0.0361276" stopColor="#FAEC60" />
                          <stop offset="0.159651" stopColor="#E5A34B" />
                          <stop offset="0.269837" stopColor="#EE6E4D" />
                          <stop offset="0.42316" stopColor="#F44380" />
                          <stop offset="0.55979" stopColor="#BE3DB3" />
                          <stop offset="0.745252" stopColor="#7746E6" />
                          <stop offset="0.888441" stopColor="#5A71F1" />
                          <stop offset={1} stopColor="#439EFF" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </strong>
                  edict.ai
                </span>
              </h2>
            </div>
          </div>
        </div>
        <div className="testimonial-item-wrap-two">
          <Slider {...settings} className="row testimonial-active-two">
            <div className="col-lg-4">
              <div className="testimonial-item-two">
                <div className="testimonial-shape-two">
                  <svg
                    viewBox="0 0 371 375"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M371 0H0V109.153C0.651939 109.052 1.31987 109 2 109C8.14716 109 13.2978 113.267 14.6521 119H20.163V122H15C15 129.18 9.1797 135 2 135C1.31987 135 0.651939 134.948 0 134.847V375H371V134.847C370.348 134.948 369.68 135 369 135C361.82 135 356 129.18 356 122H350.837V119H356.348C357.702 113.267 362.853 109 369 109C369.68 109 370.348 109.052 371 109.153V0ZM28.2283 122H36.2935V119H28.2283V122ZM44.3587 122H52.4239V119H44.3587V122ZM60.4891 122H68.5543V119H60.4891V122ZM76.6196 122H84.6848V119H76.6196V122ZM92.75 122H100.815V119H92.75V122ZM108.88 122H116.946V119H108.88V122ZM125.011 122H133.076V119H125.011V122ZM141.141 122H149.207V119H141.141V122ZM157.272 122H165.337V119H157.272V122ZM173.402 122H181.467V119H173.402V122ZM189.533 122H197.598V119H189.533V122ZM205.663 122H213.728V119H205.663V122ZM221.793 122H229.859V119H221.793V122ZM237.924 122H245.989V119H237.924V122ZM254.054 122H262.12V119H254.054V122ZM270.185 122H278.25V119H270.185V122ZM286.315 122H294.38V119H286.315V122ZM302.446 122H310.511V119H302.446V122ZM318.576 122H326.641V119H318.576V122ZM334.706 122H342.772V119H334.706V122Z"
                      fill="currentcolor"
                    />
                  </svg>
                </div>
                <div className="testimonial-avatar">
                  <div className="testi-avatar-img">
                    <img src="/assets/img/images/testi_avatar01.png" alt="" />
                  </div>
                  <div className="testi-avatar-info">
                    <h5 className="title">Emily Johnson</h5>
                    <span>Podcast Host</span>
                  </div>
                </div>
                <div className="testimonial-content-two">
                  <p>
                    "This AI text to video converter has saved me so effort when
                    creating my business. With just a few clicks, I am able to
                    create engaging videos that effectively convey my message.
                  </p>
                  <div className="rating">
                    <img src="/assets/img/icon/star.svg" alt="" />
                    <img src="/assets/img/icon/star.svg" alt="" />
                    <img src="/assets/img/icon/star.svg" alt="" />
                    <img src="/assets/img/icon/star.svg" alt="" />
                    <img src="/assets/img/icon/star.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="testimonial-item-two">
                <div className="testimonial-shape-two">
                  <svg
                    viewBox="0 0 371 375"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M371 0H0V109.153C0.651939 109.052 1.31987 109 2 109C8.14716 109 13.2978 113.267 14.6521 119H20.163V122H15C15 129.18 9.1797 135 2 135C1.31987 135 0.651939 134.948 0 134.847V375H371V134.847C370.348 134.948 369.68 135 369 135C361.82 135 356 129.18 356 122H350.837V119H356.348C357.702 113.267 362.853 109 369 109C369.68 109 370.348 109.052 371 109.153V0ZM28.2283 122H36.2935V119H28.2283V122ZM44.3587 122H52.4239V119H44.3587V122ZM60.4891 122H68.5543V119H60.4891V122ZM76.6196 122H84.6848V119H76.6196V122ZM92.75 122H100.815V119H92.75V122ZM108.88 122H116.946V119H108.88V122ZM125.011 122H133.076V119H125.011V122ZM141.141 122H149.207V119H141.141V122ZM157.272 122H165.337V119H157.272V122ZM173.402 122H181.467V119H173.402V122ZM189.533 122H197.598V119H189.533V122ZM205.663 122H213.728V119H205.663V122ZM221.793 122H229.859V119H221.793V122ZM237.924 122H245.989V119H237.924V122ZM254.054 122H262.12V119H254.054V122ZM270.185 122H278.25V119H270.185V122ZM286.315 122H294.38V119H286.315V122ZM302.446 122H310.511V119H302.446V122ZM318.576 122H326.641V119H318.576V122ZM334.706 122H342.772V119H334.706V122Z"
                      fill="currentcolor"
                    />
                  </svg>
                </div>
                <div className="testimonial-avatar">
                  <div className="testi-avatar-img">
                    <img src="/assets/img/images/testi_avatar02.png" alt="" />
                  </div>
                  <div className="testi-avatar-info">
                    <h5 className="title">Charles Henry</h5>
                    <span>Project Manager</span>
                  </div>
                </div>
                <div className="testimonial-content-two">
                  <p>
                    We're using DEX.AI to create explainer videos. It's just
                    easier, faster, and more cost-effective to use DEX.AI than
                    to record an actual person doing the explanation.
                  </p>
                  <div className="rating">
                    <img src="/assets/img/icon/star.svg" alt="" />
                    <img src="/assets/img/icon/star.svg" alt="" />
                    <img src="/assets/img/icon/star.svg" alt="" />
                    <img src="/assets/img/icon/star.svg" alt="" />
                    <img src="/assets/img/icon/star.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="testimonial-item-two">
                <div className="testimonial-shape-two">
                  <svg
                    viewBox="0 0 371 375"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M371 0H0V109.153C0.651939 109.052 1.31987 109 2 109C8.14716 109 13.2978 113.267 14.6521 119H20.163V122H15C15 129.18 9.1797 135 2 135C1.31987 135 0.651939 134.948 0 134.847V375H371V134.847C370.348 134.948 369.68 135 369 135C361.82 135 356 129.18 356 122H350.837V119H356.348C357.702 113.267 362.853 109 369 109C369.68 109 370.348 109.052 371 109.153V0ZM28.2283 122H36.2935V119H28.2283V122ZM44.3587 122H52.4239V119H44.3587V122ZM60.4891 122H68.5543V119H60.4891V122ZM76.6196 122H84.6848V119H76.6196V122ZM92.75 122H100.815V119H92.75V122ZM108.88 122H116.946V119H108.88V122ZM125.011 122H133.076V119H125.011V122ZM141.141 122H149.207V119H141.141V122ZM157.272 122H165.337V119H157.272V122ZM173.402 122H181.467V119H173.402V122ZM189.533 122H197.598V119H189.533V122ZM205.663 122H213.728V119H205.663V122ZM221.793 122H229.859V119H221.793V122ZM237.924 122H245.989V119H237.924V122ZM254.054 122H262.12V119H254.054V122ZM270.185 122H278.25V119H270.185V122ZM286.315 122H294.38V119H286.315V122ZM302.446 122H310.511V119H302.446V122ZM318.576 122H326.641V119H318.576V122ZM334.706 122H342.772V119H334.706V122Z"
                      fill="currentcolor"
                    />
                  </svg>
                </div>
                <div className="testimonial-avatar">
                  <div className="testi-avatar-img">
                    <img src="/assets/img/images/testi_avatar03.png" alt="" />
                  </div>
                  <div className="testi-avatar-info">
                    <h5 className="title">Paul Gent</h5>
                    <span>Content Writer</span>
                  </div>
                </div>
                <div className="testimonial-content-two">
                  <p>
                    "I have been using this AI text to video converter for
                    several months now, and I am continually impressed by the
                    quality of the videos I am able to produce. The platform is
                    user-friendly and intuitive.
                  </p>
                  <div className="rating">
                    <img src="/assets/img/icon/star.svg" alt="" />
                    <img src="/assets/img/icon/star.svg" alt="" />
                    <img src="/assets/img/icon/star.svg" alt="" />
                    <img src="/assets/img/icon/star.svg" alt="" />
                    <img src="/assets/img/icon/star.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="testimonial-item-two">
                <div className="testimonial-shape-two">
                  <svg
                    viewBox="0 0 371 375"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M371 0H0V109.153C0.651939 109.052 1.31987 109 2 109C8.14716 109 13.2978 113.267 14.6521 119H20.163V122H15C15 129.18 9.1797 135 2 135C1.31987 135 0.651939 134.948 0 134.847V375H371V134.847C370.348 134.948 369.68 135 369 135C361.82 135 356 129.18 356 122H350.837V119H356.348C357.702 113.267 362.853 109 369 109C369.68 109 370.348 109.052 371 109.153V0ZM28.2283 122H36.2935V119H28.2283V122ZM44.3587 122H52.4239V119H44.3587V122ZM60.4891 122H68.5543V119H60.4891V122ZM76.6196 122H84.6848V119H76.6196V122ZM92.75 122H100.815V119H92.75V122ZM108.88 122H116.946V119H108.88V122ZM125.011 122H133.076V119H125.011V122ZM141.141 122H149.207V119H141.141V122ZM157.272 122H165.337V119H157.272V122ZM173.402 122H181.467V119H173.402V122ZM189.533 122H197.598V119H189.533V122ZM205.663 122H213.728V119H205.663V122ZM221.793 122H229.859V119H221.793V122ZM237.924 122H245.989V119H237.924V122ZM254.054 122H262.12V119H254.054V122ZM270.185 122H278.25V119H270.185V122ZM286.315 122H294.38V119H286.315V122ZM302.446 122H310.511V119H302.446V122ZM318.576 122H326.641V119H318.576V122ZM334.706 122H342.772V119H334.706V122Z"
                      fill="currentcolor"
                    />
                  </svg>
                </div>
                <div className="testimonial-avatar">
                  <div className="testi-avatar-img">
                    <img src="/assets/img/images/testi_avatar04.png" alt="" />
                  </div>
                  <div className="testi-avatar-info">
                    <h5 className="title">William Azuweb</h5>
                    <span>Global Consulting</span>
                  </div>
                </div>
                <div className="testimonial-content-two">
                  <p>
                    "I cannot recommend this AI text to video converter enough.
                    As a small business owner, I was hesitant to spend a lot of
                    money on video production, but this platform makes it
                    affordable.
                  </p>
                  <div className="rating">
                    <img src="/assets/img/icon/star.svg" alt="" />
                    <img src="/assets/img/icon/star.svg" alt="" />
                    <img src="/assets/img/icon/star.svg" alt="" />
                    <img src="/assets/img/icon/star.svg" alt="" />
                    <img src="/assets/img/icon/star.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="testimonial-item-two">
                <div className="testimonial-shape-two">
                  <svg
                    viewBox="0 0 371 375"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M371 0H0V109.153C0.651939 109.052 1.31987 109 2 109C8.14716 109 13.2978 113.267 14.6521 119H20.163V122H15C15 129.18 9.1797 135 2 135C1.31987 135 0.651939 134.948 0 134.847V375H371V134.847C370.348 134.948 369.68 135 369 135C361.82 135 356 129.18 356 122H350.837V119H356.348C357.702 113.267 362.853 109 369 109C369.68 109 370.348 109.052 371 109.153V0ZM28.2283 122H36.2935V119H28.2283V122ZM44.3587 122H52.4239V119H44.3587V122ZM60.4891 122H68.5543V119H60.4891V122ZM76.6196 122H84.6848V119H76.6196V122ZM92.75 122H100.815V119H92.75V122ZM108.88 122H116.946V119H108.88V122ZM125.011 122H133.076V119H125.011V122ZM141.141 122H149.207V119H141.141V122ZM157.272 122H165.337V119H157.272V122ZM173.402 122H181.467V119H173.402V122ZM189.533 122H197.598V119H189.533V122ZM205.663 122H213.728V119H205.663V122ZM221.793 122H229.859V119H221.793V122ZM237.924 122H245.989V119H237.924V122ZM254.054 122H262.12V119H254.054V122ZM270.185 122H278.25V119H270.185V122ZM286.315 122H294.38V119H286.315V122ZM302.446 122H310.511V119H302.446V122ZM318.576 122H326.641V119H318.576V122ZM334.706 122H342.772V119H334.706V122Z"
                      fill="currentcolor"
                    />
                  </svg>
                </div>
                <div className="testimonial-avatar">
                  <div className="testi-avatar-img">
                    <img src="/assets/img/images/testi_avatar05.png" alt="" />
                  </div>
                  <div className="testi-avatar-info">
                    <h5 className="title">Daniel Lewis</h5>
                    <span>Digital Designer</span>
                  </div>
                </div>
                <div className="testimonial-content-two">
                  <p>
                    We have built a training academy for our SaaS product with
                    DEX.AI Amazing platform! I was able to create a
                    professional-quality video in just a few minutes AI We
                    managed to produce.
                  </p>
                  <div className="rating">
                    <img src="/assets/img/icon/star.svg" alt="" />
                    <img src="/assets/img/icon/star.svg" alt="" />
                    <img src="/assets/img/icon/star.svg" alt="" />
                    <img src="/assets/img/icon/star.svg" alt="" />
                    <img src="/assets/img/icon/star.svg" alt="" />
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
export default Testimonial2;
