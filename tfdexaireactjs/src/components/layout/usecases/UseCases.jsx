import { useState } from "react";
import { Link } from "react-router-dom";
import TabLeft from "./TabLeft";

const UseCases = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleOnClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <section className="use-cases-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="use-cases-content">
              <div className="section-title mb-25">
                <h2
                  className="title title-animation wow fadeInLeft"
                  data-wow-delay=".2s"
                >
                  AI Does it <span>faster</span> & better.
                </h2>
              </div>
              <p>
                Have a look at one of 60+ available tools included in your
                SinCode AI account. Just fill out the keywords and Marve will
                generate your next content for you.
              </p>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="use-cases-nav-wrap">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" onClick={() => handleOnClick(1)}>
                  <button
                    className={
                      activeIndex == 1 ? "nav-link active" : "nav-link"
                    }
                  >
                    Website
                  </button>
                </li>
                <li className="nav-item" onClick={() => handleOnClick(2)}>
                  <button
                    className={
                      activeIndex == 2 ? "nav-link active" : "nav-link"
                    }
                  >
                    Social Media
                  </button>
                </li>
                <li className="nav-item" onClick={() => handleOnClick(3)}>
                  <button
                    className={
                      activeIndex == 3 ? "nav-link active" : "nav-link"
                    }
                  >
                    Emails
                  </button>
                </li>
                <li className="nav-item" onClick={() => handleOnClick(4)}>
                  <button
                    className={
                      activeIndex == 4 ? "nav-link active" : "nav-link"
                    }
                  >
                    Code
                  </button>
                </li>
                <li className="nav-item" onClick={() => handleOnClick(5)}>
                  <button
                    className={
                      activeIndex == 5 ? "nav-link active" : "nav-link"
                    }
                  >
                    Art
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <div
                  className={
                    activeIndex == 1
                      ? "tab-pane fade show active"
                      : "tab-pane fade"
                  }
                >
                  <div className="cases-details-wrap">
                    <TabLeft />
                    <div className="cases-details-content">
                      <div className="icon">
                        <i className="fas fa-home-alt" />
                      </div>
                      <p>
                        Meta description: Unlock the power of AI to automate
                        your business with Since AI. Our suite of AI-powered
                        solutions can help streamline your operations and
                        increase efficiency.
                      </p>
                      <div className="content-bottom">
                        <ul className="list-wrap">
                          <li>
                            <Link to="#">
                              <i className="far fa-copy" />
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <i className="fal fa-download" />
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <i className="fal fa-paste" />
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <i className="far fa-trash-alt" />
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <i className="fal fa-plus-circle" />
                            </Link>
                          </li>
                        </ul>
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
                  <div className="cases-details-wrap">
                    <div className="cases-details-img">
                      <TabLeft />
                    </div>
                    <div className="cases-details-content">
                      <div className="icon">
                        <i className="fas fa-home-alt" />
                      </div>
                      <p>
                        Meta description: Unlock the power of AI to automate
                        your business with Since AI. Our suite of AI-powered
                        solutions can help streamline your operations and
                        increase efficiency.
                      </p>
                      <div className="content-bottom">
                        <ul className="list-wrap">
                          <li>
                            <Link to="#">
                              <i className="far fa-copy" />
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <i className="fal fa-download" />
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <i className="fal fa-paste" />
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <i className="far fa-trash-alt" />
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <i className="fal fa-plus-circle" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={
                    activeIndex == 3
                      ? "tab-pane  fade show active"
                      : "tab-pane fade"
                  }
                >
                  <div className="cases-details-wrap">
                    <div className="cases-details-img">
                      <TabLeft />
                    </div>
                    <div className="cases-details-content">
                      <div className="icon">
                        <i className="fas fa-home-alt" />
                      </div>
                      <p>
                        Meta description: Unlock the power of AI to automate
                        your business with Since AI. Our suite of AI-powered
                        solutions can help streamline your operations and
                        increase efficiency.
                      </p>
                      <div className="content-bottom">
                        <ul className="list-wrap">
                          <li>
                            <Link to="#">
                              <i className="far fa-copy" />
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <i className="fal fa-download" />
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <i className="fal fa-paste" />
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <i className="far fa-trash-alt" />
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <i className="fal fa-plus-circle" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={
                    activeIndex == 4
                      ? "tab-pane  fade show active"
                      : "tab-pane fade"
                  }
                >
                  <div className="cases-details-wrap">
                    <div className="cases-details-img">
                      <TabLeft />
                    </div>
                    <div className="cases-details-content">
                      <div className="icon">
                        <i className="fas fa-home-alt" />
                      </div>
                      <p>
                        Meta description: Unlock the power of AI to automate
                        your business with Since AI. Our suite of AI-powered
                        solutions can help streamline your operations and
                        increase efficiency.
                      </p>
                      <div className="content-bottom">
                        <ul className="list-wrap">
                          <li>
                            <Link to="#">
                              <i className="far fa-copy" />
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <i className="fal fa-download" />
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <i className="fal fa-paste" />
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <i className="far fa-trash-alt" />
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <i className="fal fa-plus-circle" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={
                    activeIndex == 5
                      ? "tab-pane  fade show active"
                      : "tab-pane fade"
                  }
                >
                  <div className="cases-details-wrap">
                    <div className="cases-details-img">
                      <TabLeft />
                    </div>
                    <div className="cases-details-content">
                      <div className="icon">
                        <i className="fas fa-home-alt" />
                      </div>
                      <p>
                        Meta description: Unlock the power of AI to automate
                        your business with Since AI. Our suite of AI-powered
                        solutions can help streamline your operations and
                        increase efficiency.
                      </p>
                      <div className="content-bottom">
                        <ul className="list-wrap">
                          <li>
                            <Link to="#">
                              <i className="far fa-copy" />
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <i className="fal fa-download" />
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <i className="fal fa-paste" />
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <i className="far fa-trash-alt" />
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <i className="fal fa-plus-circle" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
