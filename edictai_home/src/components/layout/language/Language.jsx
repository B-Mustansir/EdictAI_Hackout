import { Link } from "react-router-dom";
import { useState } from "react";
import VideoPopup from "components/video/VideoPopup";

const Language = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleOnClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <section className="language-area pb-150">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="language-content">
              <div className="section-title-two mb-30">
                <h2 className="title wow fadeInLeft" data-wow-delay=".2s">
                  Quality Text to voice recordings&nbsp;
                  <span>
                    With&nbsp;
                    <strong>
                      DEX.AI
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
                          fill="url(#title-05)"
                        />
                        <defs>
                          <linearGradient
                            id="title-05"
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
                  </span>
                </h2>
              </div>
              <p>
                DEX.AI voices are digital clones of the voices of real people.
                You no longer need to record your voice.
              </p>
              <ul className="list-wrap">
                <li>
                  <i className="far fa-check" />
                  Get access to 120+ languages and accents
                </li>
                <li>
                  <i className="far fa-check" />
                  Ensure consistent audio quality at scale
                </li>
                <li>
                  <i className="far fa-check" />
                  Closed captions included
                </li>
              </ul>
              <Link to="/work" className="gradient-btn gradient-btn-three">
                hear & text languages
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="language-tab-wrap">
              <div className="tab-content" id="myTabContentThree">
                <div
                  className={
                    activeIndex == 1
                      ? "tab-pane fade show active"
                      : "tab-pane fade"
                  }
                >
                  <div className="language-img">
                    <img src="/assets/img/images/language_img01.jpg" alt="" />
                    <VideoPopup text="Click  Hear US English" />
                  </div>
                </div>
                <div
                  className={
                    activeIndex == 2
                      ? "tab-pane fade show active"
                      : "tab-pane fade"
                  }
                >
                  <div className="language-img">
                    <img src="/assets/img/images/language_img01.jpg" alt="" />
                    <VideoPopup text="Click  Hear Spanish" />
                  </div>
                </div>
                <div
                  className={
                    activeIndex == 3
                      ? "tab-pane fade show active"
                      : "tab-pane fade"
                  }
                >
                  <div className="language-img">
                    <img src="/assets/img/images/language_img01.jpg" alt="" />
                    <VideoPopup text="Click  Hear German" />
                  </div>
                </div>
                <div
                  className={
                    activeIndex == 4
                      ? "tab-pane fade show active"
                      : "tab-pane fade"
                  }
                >
                  <div className="language-img">
                    <img src="/assets/img/images/language_img01.jpg" alt="" />
                    <VideoPopup text="Click  Hear French" />
                  </div>
                </div>
                <div
                  className={
                    activeIndex == 5
                      ? "tab-pane fade show active"
                      : "tab-pane fade"
                  }
                >
                  <div className="language-img">
                    <img src="/assets/img/images/language_img01.jpg" alt="" />
                    <VideoPopup text="Click  Hear Portugal" />
                  </div>
                </div>
                <div
                  className={
                    activeIndex == 6
                      ? "tab-pane fade show active"
                      : "tab-pane fade"
                  }
                >
                  <div className="language-img">
                    <img src="/assets/img/images/language_img01.jpg" alt="" />
                    <VideoPopup text="Click  Hear Chinese" />
                  </div>
                </div>
                <div
                  className={
                    activeIndex == 7
                      ? "tab-pane fade show active"
                      : "tab-pane fade"
                  }
                >
                  <div className="language-img">
                    <img src="/assets/img/images/language_img01.jpg" alt="" />
                    <VideoPopup text="Click  Hear Mongolian" />
                  </div>
                </div>
                <div
                  className={
                    activeIndex == 8
                      ? "tab-pane fade show active"
                      : "tab-pane fade"
                  }
                >
                  <div className="language-img">
                    <img src="/assets/img/images/language_img01.jpg" alt="" />
                    <VideoPopup text="Click  Hear Georgian" />
                  </div>
                </div>
              </div>
              <ul className="nav nav-tabs" id="myTabThree" role="tablist">
                <li className="nav-item" onClick={() => handleOnClick(1)}>
                  <button
                    className={
                      activeIndex == 1 ? "nav-link active" : "nav-link"
                    }
                  >
                    <img src="/assets/img/icon/united-states02.png" alt="" />
                    US English
                  </button>
                </li>
                <li className="nav-item" onClick={() => handleOnClick(2)}>
                  <button
                    className={
                      activeIndex == 2 ? "nav-link active" : "nav-link"
                    }
                  >
                    <img src="/assets/img/icon/spain02.png" alt="" />
                    Spanish
                  </button>
                </li>
                <li className="nav-item" onClick={() => handleOnClick(3)}>
                  <button
                    className={
                      activeIndex == 3 ? "nav-link active" : "nav-link"
                    }
                  >
                    <img src="/assets/img/icon/german02.png" alt="" />
                    German
                  </button>
                </li>
                <li className="nav-item" onClick={() => handleOnClick(4)}>
                  <button
                    className={
                      activeIndex == 4 ? "nav-link active" : "nav-link"
                    }
                  >
                    <img src="/assets/img/icon/france02.png" alt="" />
                    French
                  </button>
                </li>
                <li className="nav-item" onClick={() => handleOnClick(5)}>
                  <button
                    className={
                      activeIndex == 5 ? "nav-link active" : "nav-link"
                    }
                  >
                    <img src="/assets/img/icon/portugal.png" alt="" />
                    Portugal
                  </button>
                </li>
                <li className="nav-item" onClick={() => handleOnClick(6)}>
                  <button
                    className={
                      activeIndex == 6 ? "nav-link active" : "nav-link"
                    }
                  >
                    <img src="/assets/img/icon/china.png" alt="" />
                    Chinese
                  </button>
                </li>
                <li className="nav-item" onClick={() => handleOnClick(7)}>
                  <button
                    className={
                      activeIndex == 7 ? "nav-link active" : "nav-link"
                    }
                  >
                    <img src="/assets/img/icon/mongolia.png" alt="" />
                    Mongolian
                  </button>
                </li>
                <li className="nav-item" onClick={() => handleOnClick(8)}>
                  <button
                    className={
                      activeIndex == 8 ? "nav-link active" : "nav-link"
                    }
                  >
                    <img src="/assets/img/icon/georgia.png" alt="" />
                    Georgian
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Language;
