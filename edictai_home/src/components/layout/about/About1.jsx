import VideoPopup from "components/video/VideoPopup";
import { useState } from "react";

export default function About1() {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleOnClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <section className="about-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="about-wrap">
              <div className="tab-content" id="myTabContent">
                <div
                  className={
                    activeIndex == 1
                      ? "tab-pane fade show active"
                      : "tab-pane fade"
                  }
                >
                  <div className="row">
                    <div className="col-lg-7 order-0 order-lg-2">
                      <div
                        className="about-img wow fadeInRight"
                        data-wow-delay=".2s"
                      >
                        <img src="/assets/img/images/about_img.jpg" alt="" />
                        <VideoPopup />
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <div className="about-content">
                        <div className="section-title-two mb-60">
                          <h2
                            className="title wow fadeInLeft"
                            data-wow-delay=".2s"
                          >
                            Used by over&nbsp;
                            <span>
                              <strong>
                                40,000 &nbsp;
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
                                    fill="url(#title-01)"
                                  />
                                  <defs>
                                    <linearGradient
                                      id="title-01"
                                      x1="376.061"
                                      y1="0.000463246"
                                      x2="10.2776"
                                      y2="101.79"
                                      gradientUnits="userSpaceOnUse"
                                    >
                                      <stop
                                        offset="0.0361276"
                                        stopColor="#FAEC60"
                                      />
                                      <stop
                                        offset="0.159651"
                                        stopColor="#E5A34B"
                                      />
                                      <stop
                                        offset="0.269837"
                                        stopColor="#EE6E4D"
                                      />
                                      <stop
                                        offset="0.42316"
                                        stopColor="#F44380"
                                      />
                                      <stop
                                        offset="0.55979"
                                        stopColor="#BE3DB3"
                                      />
                                      <stop
                                        offset="0.745252"
                                        stopColor="#7746E6"
                                      />
                                      <stop
                                        offset="0.888441"
                                        stopColor="#5A71F1"
                                      />
                                      <stop offset={1} stopColor="#439EFF" />
                                    </linearGradient>
                                  </defs>
                                </svg>
                              </strong>
                              training,&nbsp;
                            </span>
                            support and marketing teams
                          </h2>
                        </div>
                        <p>
                          First, simply input your text into the platform. This
                          can be any type of written content, such as blog
                          posts, articles, or marketing copy.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={
                    activeIndex == 2
                      ? "tab-pane fade show active"
                      : "tab-pane fade"
                  }
                >
                  <div className="row">
                    <div className="col-lg-7 order-0 order-lg-2">
                      <div className="about-img">
                        <img src="/assets/img/images/about_img.jpg" alt="" />
                        <VideoPopup />
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <div className="about-content">
                        <div className="section-title-two mb-60">
                          <h2 className="title">
                            Used by over&nbsp;
                            <span>
                              <strong>
                                40,000
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
                                    fill="url(#title-02)"
                                  />
                                  <defs>
                                    <linearGradient
                                      id="title-02"
                                      x1="376.061"
                                      y1="0.000463246"
                                      x2="10.2776"
                                      y2="101.79"
                                      gradientUnits="userSpaceOnUse"
                                    >
                                      <stop
                                        offset="0.0361276"
                                        stopColor="#FAEC60"
                                      />
                                      <stop
                                        offset="0.159651"
                                        stopColor="#E5A34B"
                                      />
                                      <stop
                                        offset="0.269837"
                                        stopColor="#EE6E4D"
                                      />
                                      <stop
                                        offset="0.42316"
                                        stopColor="#F44380"
                                      />
                                      <stop
                                        offset="0.55979"
                                        stopColor="#BE3DB3"
                                      />
                                      <stop
                                        offset="0.745252"
                                        stopColor="#7746E6"
                                      />
                                      <stop
                                        offset="0.888441"
                                        stopColor="#5A71F1"
                                      />
                                      <stop offset={1} stopColor="#439EFF" />
                                    </linearGradient>
                                  </defs>
                                </svg>
                              </strong>
                              training,
                            </span>
                            support and marketing teams
                          </h2>
                        </div>
                        <p>
                          First, simply input your text into the platform. This
                          can be any type of written content, such as blog
                          posts, articles, or marketing copy.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={
                    activeIndex == 3
                      ? "tab-pane fade show active"
                      : "tab-pane fade"
                  }
                >
                  <div className="row">
                    <div className="col-lg-7 order-0 order-lg-2">
                      <div className="about-img">
                        <img src="/assets/img/images/about_img.jpg" alt="" />
                        <VideoPopup />
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <div className="about-content">
                        <div className="section-title-two mb-60">
                          <h2 className="title">
                            Used by over&nbsp;
                            <span>
                              <strong>
                                40,000
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
                                    fill="url(#title-03)"
                                  />
                                  <defs>
                                    <linearGradient
                                      id="title-03"
                                      x1="376.061"
                                      y1="0.000463246"
                                      x2="10.2776"
                                      y2="101.79"
                                      gradientUnits="userSpaceOnUse"
                                    >
                                      <stop
                                        offset="0.0361276"
                                        stopColor="#FAEC60"
                                      />
                                      <stop
                                        offset="0.159651"
                                        stopColor="#E5A34B"
                                      />
                                      <stop
                                        offset="0.269837"
                                        stopColor="#EE6E4D"
                                      />
                                      <stop
                                        offset="0.42316"
                                        stopColor="#F44380"
                                      />
                                      <stop
                                        offset="0.55979"
                                        stopColor="#BE3DB3"
                                      />
                                      <stop
                                        offset="0.745252"
                                        stopColor="#7746E6"
                                      />
                                      <stop
                                        offset="0.888441"
                                        stopColor="#5A71F1"
                                      />
                                      <stop offset={1} stopColor="#439EFF" />
                                    </linearGradient>
                                  </defs>
                                </svg>
                              </strong>
                              training,
                            </span>
                            support and marketing teams
                          </h2>
                        </div>
                        <p>
                          First, simply input your text into the platform. This
                          can be any type of written content, such as blog
                          posts, articles, or marketing copy.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" onClick={() => handleOnClick(1)}>
                  <button
                    className={
                      activeIndex == 1 ? "nav-link active" : "nav-link"
                    }
                  >
                    <span className="icon">
                      <img src="/assets/img/icon/about_icon01.svg" alt="" />
                    </span>{" "}
                    How to make videos
                  </button>
                </li>
                <li className="nav-item" onClick={() => handleOnClick(2)}>
                  <button
                    className={
                      activeIndex == 2 ? "nav-link active" : "nav-link"
                    }
                  >
                    <span className="icon">
                      <img src="/assets/img/icon/about_icon02.svg" alt="" />
                    </span>{" "}
                    Training videos
                  </button>
                </li>
                <li className="nav-item" onClick={() => handleOnClick(3)}>
                  <button
                    className={
                      activeIndex == 3 ? "nav-link active" : "nav-link"
                    }
                  >
                    <span className="icon">
                      <img src="/assets/img/icon/about_icon03.svg" alt="" />
                    </span>{" "}
                    Marketing videos
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="about-shape">
        <img
          src="/assets/img/images/about_shape.png"
          alt=""
          className="alltuchtopdown"
        />
      </div>
    </section>
  );
}
