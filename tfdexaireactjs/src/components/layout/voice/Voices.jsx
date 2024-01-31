import { Link } from "react-router-dom";
import { useState } from "react";
import VideoPopup from "components/video/VideoPopup";

const Voices = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleOnClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <section className="vioces-area pt-110 pb-140">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-9 col-lg-10">
            <div
              className="section-title-three text-center mb-60 title-animation wow fadeInUp"
              data-wow-delay=".2s"
            >
              <h2 className="title">
                Check Out Voiceovers Created <span>using DEX.AI</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="vioces-tab-wrap">
          <div className="row">
            <div className="col-lg-12">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" onClick={() => handleOnClick(1)}>
                  <button
                    className={
                      activeIndex == 1 ? "nav-link active" : "nav-link"
                    }
                  >
                    <svg
                      viewBox="0 0 32 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3.42428 0.506836H17.7035C19.5869 0.506836 21.1278 2.01352 21.1278 3.93112V15.471C21.1278 17.3543 19.5869 18.8952 17.7035 18.8952H3.42428C1.54093 18.8952 0 17.3543 0 15.471V3.93112C0 2.04776 1.54093 0.506836 3.42428 0.506836ZM28.1817 2.63079C28.3529 2.52806 28.5584 2.42534 28.7639 2.39109C30.0993 2.08291 31.2978 3.11019 31.2978 4.37718V14.9582C31.2978 15.3349 31.1951 15.6773 31.0239 15.9855C30.4418 16.9785 29.209 17.321 28.216 16.7388L22.8398 13.657V5.71265L28.1817 2.63079Z"
                        fill="currentcolor"
                      />
                    </svg>
                    All video
                  </button>
                </li>
                <li className="nav-item" onClick={() => handleOnClick(2)}>
                  <button
                    className={
                      activeIndex == 2 ? "nav-link active" : "nav-link"
                    }
                  >
                    <svg
                      viewBox="0 0 25 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.0489729 8.85878C0.0384534 9.8127 0.601978 10.6712 1.45816 11.0057V6.91777C1.45816 6.85895 1.48632 6.77074 1.48632 6.71191C0.624366 7.0437 0.0510768 7.90001 0.0489729 8.85878Z"
                        fill="currentcolor"
                      />
                      <path
                        d="M7.74293 13.9189H4.05078L5.43181 19.1539C5.63632 19.9528 6.3304 20.508 7.12287 20.5067C7.68672 20.5137 8.2202 20.2408 8.56027 19.7715C8.90364 19.325 9.00954 18.7286 8.84209 18.1834L7.74293 13.9189Z"
                        fill="currentcolor"
                      />
                      <path
                        d="M1.48633 6.6827H1.51449V6.65332C1.51449 6.6827 1.51449 6.6827 1.48633 6.6827Z"
                        fill="currentcolor"
                      />
                      <path
                        d="M21.6942 6.27051H21.4688V11.5643H21.6942C23.0952 11.5643 24.2308 10.3792 24.2308 8.91741C24.2308 7.45557 23.0951 6.27051 21.6942 6.27051Z"
                        fill="currentcolor"
                      />
                      <path
                        d="M2.30371 6.91814V11.0943C2.33419 12.1758 3.18342 13.0358 4.22021 13.0354H9.34977V5.09473H4.22021C3.20559 5.09473 2.30371 5.8594 2.30371 6.91814Z"
                        fill="currentcolor"
                      />
                      <path
                        d="M10.1953 13.153L20.6235 17.5057V0.506836L10.1953 4.8595V13.153Z"
                        fill="currentcolor"
                      />
                    </svg>
                    Promotional
                  </button>
                </li>
                <li className="nav-item" onClick={() => handleOnClick(3)}>
                  <button
                    className={
                      activeIndex == 3 ? "nav-link active" : "nav-link"
                    }
                  >
                    <svg
                      viewBox="0 0 20 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.7127 8.42495C14.058 7.73002 14.6565 7.20756 15.4008 6.95539C15.7122 6.84959 16.0332 6.80901 16.3527 6.80756V2.68075C16.3527 1.4822 15.3618 0.506836 14.1441 0.506836H2.36486C1.14718 0.506836 0.15625 1.4822 0.15625 2.68075V17.1735C0.15625 18.3721 1.14718 19.3474 2.36486 19.3474H9.68935L9.60984 19.1199C9.28959 18.2003 9.35217 17.2177 9.78432 16.3489L13.7127 8.42495ZM3.10107 4.85466H11.9355C12.3426 4.85466 12.6717 5.1793 12.6717 5.5793C12.6717 5.9793 12.3426 6.30394 11.9355 6.30394H3.10107C2.69394 6.30394 2.36486 5.9793 2.36486 5.5793C2.36486 5.1793 2.69394 4.85466 3.10107 4.85466ZM3.10107 7.75321H11.1993C11.6064 7.75321 11.9355 8.07785 11.9355 8.47785C11.9355 8.87785 11.6064 9.20249 11.1993 9.20249H3.10107C2.69394 9.20249 2.36486 8.87785 2.36486 8.47785C2.36486 8.07785 2.69394 7.75321 3.10107 7.75321ZM8.25449 14.9996H3.10107C2.69394 14.9996 2.36486 14.675 2.36486 14.275C2.36486 13.875 2.69394 13.5503 3.10107 13.5503H8.25449C8.66161 13.5503 8.9907 13.875 8.9907 14.275C8.9907 14.675 8.66161 14.9996 8.25449 14.9996ZM3.10107 12.101C2.69394 12.101 2.36486 11.7764 2.36486 11.3764C2.36486 10.9764 2.69394 10.6518 3.10107 10.6518H9.7269C10.134 10.6518 10.4631 10.9764 10.4631 11.3764C10.4631 11.7764 10.134 12.101 9.7269 12.101H3.10107ZM19.006 10.967L15.0762 18.8938C14.8163 19.4163 14.3665 19.8076 13.8092 19.996L12.417 20.467C12.3382 20.4938 12.2565 20.5068 12.1777 20.5068C11.8722 20.5068 11.5866 20.3184 11.482 20.0177L11.0027 18.6474C10.8106 18.0967 10.8481 17.5068 11.1073 16.9858L15.0371 9.06046C15.2087 8.71263 15.509 8.45176 15.8808 8.32568C16.2519 8.19959 16.6516 8.22278 17.005 8.39379L18.3287 9.0293C18.6821 9.19886 18.9471 9.49452 19.0752 9.86046C19.2033 10.2264 19.179 10.6192 19.006 10.967Z"
                        fill="currentcolor"
                      />
                    </svg>
                    E-Learning
                  </button>
                </li>
                <li className="nav-item" onClick={() => handleOnClick(4)}>
                  <button
                    className={
                      activeIndex == 5 ? "nav-link active" : "nav-link"
                    }
                  >
                    <svg
                      viewBox="0 0 20 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.43659 5.1222C5.71108 5.1222 6.74427 4.08901 6.74427 2.81452C6.74427 1.54002 5.71108 0.506836 4.43659 0.506836C3.16209 0.506836 2.12891 1.54002 2.12891 2.81452C2.12891 4.08901 3.16209 5.1222 4.43659 5.1222Z"
                        fill="currentcolor"
                      />
                      <path
                        d="M16.3584 18.9678H13.6661V13.9678H18.2815C18.7061 13.9678 19.0507 13.6232 19.0507 13.1986V2.42938C19.0507 2.00477 18.7061 1.66016 18.2815 1.66016H8.1042C8.2192 2.02439 8.28151 2.41208 8.28151 2.814C8.28151 3.51476 8.08997 4.17053 7.76074 4.73706H10.3969C11.7753 4.73706 12.8969 5.8586 12.8969 7.23705C12.8969 8.61551 11.7753 9.73704 10.3969 9.73704H9.05074V13.9678H12.1276V18.9678H9.43535V20.5062H16.3584V18.9678Z"
                        fill="currentcolor"
                      />
                      <path
                        d="M7.12812 20.5061V8.19846H10.3973C10.9612 8.19846 11.4116 7.71308 11.3535 7.13769C11.3035 6.63693 10.8454 6.27539 10.3423 6.27539H2.89737C1.41046 6.27539 0.205078 7.48077 0.205078 8.96768V12.5665C0.205078 13.0696 0.566999 13.5277 1.06738 13.578C1.32315 13.6038 1.55815 13.5254 1.74353 13.3846V20.5061H3.6666V14.7369C3.6666 14.3123 4.01121 13.9677 4.43583 13.9677C4.86044 13.9677 5.20505 14.3123 5.20505 14.7369V20.5061H7.12812Z"
                        fill="currentcolor"
                      />
                    </svg>
                    Explainer
                  </button>
                </li>
                <li className="nav-item" onClick={() => handleOnClick(5)}>
                  <button
                    className={
                      activeIndex == 5 ? "nav-link active" : "nav-link"
                    }
                  >
                    <svg
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#iconOne)">
                        <path
                          d="M18.209 8.84017C18.209 8.61916 18.1212 8.40719 17.9649 8.25091C17.8086 8.09463 17.5967 8.00684 17.3757 8.00684C17.1546 8.00684 16.9427 8.09463 16.7864 8.25091C16.6301 8.40719 16.5423 8.61916 16.5423 8.84017C16.5423 10.3873 15.9277 11.871 14.8338 12.965C13.7398 14.0589 12.2561 14.6735 10.709 14.6735C9.16189 14.6735 7.67816 14.0589 6.58419 12.965C5.49023 11.871 4.87565 10.3873 4.87565 8.84017C4.87565 8.61916 4.78785 8.40719 4.63157 8.25091C4.47529 8.09463 4.26333 8.00684 4.04232 8.00684C3.8213 8.00684 3.60934 8.09463 3.45306 8.25091C3.29678 8.40719 3.20898 8.61916 3.20898 8.84017C3.21148 10.684 3.89236 12.4625 5.12184 13.8366C6.35132 15.2107 8.04343 16.0843 9.87565 16.291V18.8402H8.20898C7.98797 18.8402 7.77601 18.928 7.61973 19.0842C7.46345 19.2405 7.37565 19.4525 7.37565 19.6735C7.37565 19.8945 7.46345 20.1065 7.61973 20.2628C7.77601 20.419 7.98797 20.5068 8.20898 20.5068H13.209C13.43 20.5068 13.642 20.419 13.7982 20.2628C13.9545 20.1065 14.0423 19.8945 14.0423 19.6735C14.0423 19.4525 13.9545 19.2405 13.7982 19.0842C13.642 18.928 13.43 18.8402 13.209 18.8402H11.5423V16.291C13.3745 16.0843 15.0666 15.2107 16.2961 13.8366C17.5256 12.4625 18.2065 10.684 18.209 8.84017Z"
                          fill="currentcolor"
                        />
                        <path
                          d="M10.7096 13.0068C11.8143 13.0055 12.8733 12.5661 13.6545 11.785C14.4356 11.0039 14.875 9.94483 14.8763 8.84017V4.6735C14.8763 3.56843 14.4373 2.50863 13.6559 1.72722C12.8745 0.945823 11.8147 0.506836 10.7096 0.506836C9.60457 0.506836 8.54476 0.945823 7.76336 1.72722C6.98196 2.50863 6.54297 3.56843 6.54297 4.6735V8.84017C6.54429 9.94483 6.9837 11.0039 7.76482 11.785C8.54593 12.5661 9.60497 13.0055 10.7096 13.0068Z"
                          fill="currentcolor"
                        />
                      </g>
                      <defs>
                        <clipPath id="iconOne">
                          <rect
                            width={20}
                            height={20}
                            fill="white"
                            transform="translate(0.708984 0.506836)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    Podcasts
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
                  <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6 col-sm-10">
                      <div className="vioces-item">
                        <div className="vioces-thumb">
                          <img
                            src="/assets/img/images/voice_img01.jpg"
                            alt=""
                          />
                        </div>
                        <div className="vioces-content">
                          <VideoPopup />
                          <h2 className="title">Michael Davis</h2>
                          <ul className="list-wrap">
                            <li>
                              <Link to="#">Confident</Link>
                            </li>
                            <li>
                              <Link to="#">Bold</Link>
                            </li>
                            <li>
                              <Link to="#">Authoritative</Link>
                            </li>
                            <li>
                              <Link to="#">Bossy</Link>
                            </li>
                            <li>
                              <Link to="#">Charismatic</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-10">
                      <div className="vioces-item">
                        <div className="vioces-thumb">
                          <img
                            src="/assets/img/images/voice_img02.jpg"
                            alt=""
                          />
                        </div>
                        <div className="vioces-content">
                          <VideoPopup />
                          <h2 className="title">Paul Gent</h2>
                          <ul className="list-wrap">
                            <li>
                              <Link to="#">Bold</Link>
                            </li>
                            <li>
                              <Link to="#">Approachable</Link>
                            </li>
                            <li>
                              <Link to="#">Commanding</Link>
                            </li>
                            <li>
                              <Link to="#">Heroic</Link>
                            </li>
                            <li>
                              <Link to="#">Tough</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-10">
                      <div className="vioces-item">
                        <div className="vioces-thumb">
                          <img
                            src="/assets/img/images/voice_img03.jpg"
                            alt=""
                          />
                        </div>
                        <div className="vioces-content">
                          <VideoPopup />
                          <h2 className="title">Daniel Lewis</h2>
                          <ul className="list-wrap">
                            <li>
                              <Link to="#">Reassuring</Link>
                            </li>
                            <li>
                              <Link to="#">Approachable</Link>
                            </li>
                            <li>
                              <Link to="#">Bossy</Link>
                            </li>
                            <li>
                              <Link to="#">Attentive</Link>
                            </li>
                            <li>
                              <Link to="#">Charismatic</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-10">
                      <div className="vioces-item">
                        <div className="vioces-thumb">
                          <img
                            src="/assets/img/images/voice_img04.jpg"
                            alt=""
                          />
                        </div>
                        <div className="vioces-content">
                          <VideoPopup />
                          <h2 className="title">Emily Johnson</h2>
                          <ul className="list-wrap">
                            <li>
                              <Link to="#">Bold</Link>
                            </li>
                            <li>
                              <Link to="#">Approachable</Link>
                            </li>
                            <li>
                              <Link to="#">Commanding</Link>
                            </li>
                            <li>
                              <Link to="#">Heroic</Link>
                            </li>
                            <li>
                              <Link to="#">Tough</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-10">
                      <div className="vioces-item">
                        <div className="vioces-thumb">
                          <img
                            src="/assets/img/images/voice_img05.jpg"
                            alt=""
                          />
                        </div>
                        <div className="vioces-content">
                          <VideoPopup />
                          <h2 className="title">Charles Henry</h2>
                          <ul className="list-wrap">
                            <li>
                              <Link to="#">Confident</Link>
                            </li>
                            <li>
                              <Link to="#">Bold</Link>
                            </li>
                            <li>
                              <Link to="#">Authoritative</Link>
                            </li>
                            <li>
                              <Link to="#">Bossy</Link>
                            </li>
                            <li>
                              <Link to="#">Charismatic</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-10">
                      <div className="more-vioces-item">
                        <div className="more-vioces-thumb">
                          <ul className="list-wrap">
                            <li>
                              <img
                                src="/assets/img/images/m_voice_img01.png"
                                alt=""
                              />
                            </li>
                            <li>
                              <img
                                src="/assets/img/images/m_voice_img02.png"
                                alt=""
                              />
                            </li>
                            <li>
                              <img
                                src="/assets/img/images/m_voice_img03.png"
                                alt=""
                              />
                            </li>
                            <li>
                              <img
                                src="/assets/img/images/m_voice_img04.png"
                                alt=""
                              />
                            </li>
                            <li>
                              <img
                                src="/assets/img/images/m_voice_img05.png"
                                alt=""
                              />
                            </li>
                          </ul>
                        </div>
                        <div className="more-vioces-content">
                          <p>
                            To get more voices, you can instantly clone any
                            voice with just 3 seconds of audio
                          </p>
                          <Link
                            to="/login"
                            className="gradient-btn gradient-btn-four"
                          >
                            TRY NOW FOR FREE
                          </Link>
                        </div>
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
                  <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6 col-sm-10">
                      <div className="vioces-item">
                        <div className="vioces-thumb">
                          <img
                            src="/assets/img/images/voice_img05.jpg"
                            alt=""
                          />
                        </div>
                        <div className="vioces-content">
                          <VideoPopup />
                          <h2 className="title">Charles Henry</h2>
                          <ul className="list-wrap">
                            <li>
                              <Link to="#">Confident</Link>
                            </li>
                            <li>
                              <Link to="#">Bold</Link>
                            </li>
                            <li>
                              <Link to="#">Authoritative</Link>
                            </li>
                            <li>
                              <Link to="#">Bossy</Link>
                            </li>
                            <li>
                              <Link to="#">Charismatic</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-10">
                      <div className="vioces-item">
                        <div className="vioces-thumb">
                          <img
                            src="/assets/img/images/voice_img01.jpg"
                            alt=""
                          />
                        </div>
                        <div className="vioces-content">
                          <VideoPopup />
                          <h2 className="title">Michael Davis</h2>
                          <ul className="list-wrap">
                            <li>
                              <Link to="#">Confident</Link>
                            </li>
                            <li>
                              <Link to="#">Bold</Link>
                            </li>
                            <li>
                              <Link to="#">Authoritative</Link>
                            </li>
                            <li>
                              <Link to="#">Bossy</Link>
                            </li>
                            <li>
                              <Link to="#">Charismatic</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-10">
                      <div className="vioces-item">
                        <div className="vioces-thumb">
                          <img
                            src="/assets/img/images/voice_img02.jpg"
                            alt=""
                          />
                        </div>
                        <div className="vioces-content">
                          <VideoPopup />
                          <h2 className="title">Paul Gent</h2>
                          <ul className="list-wrap">
                            <li>
                              <Link to="#">Bold</Link>
                            </li>
                            <li>
                              <Link to="#">Approachable</Link>
                            </li>
                            <li>
                              <Link to="#">Commanding</Link>
                            </li>
                            <li>
                              <Link to="#">Heroic</Link>
                            </li>
                            <li>
                              <Link to="#">Tough</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-10">
                      <div className="vioces-item">
                        <div className="vioces-thumb">
                          <img
                            src="/assets/img/images/voice_img03.jpg"
                            alt=""
                          />
                        </div>
                        <div className="vioces-content">
                          <VideoPopup />
                          <h2 className="title">Daniel Lewis</h2>
                          <ul className="list-wrap">
                            <li>
                              <Link to="#">Reassuring</Link>
                            </li>
                            <li>
                              <Link to="#">Approachable</Link>
                            </li>
                            <li>
                              <Link to="#">Bossy</Link>
                            </li>
                            <li>
                              <Link to="#">Attentive</Link>
                            </li>
                            <li>
                              <Link to="#">Charismatic</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-10">
                      <div className="vioces-item">
                        <div className="vioces-thumb">
                          <img
                            src="/assets/img/images/voice_img04.jpg"
                            alt=""
                          />
                        </div>
                        <div className="vioces-content">
                          <VideoPopup />
                          <h2 className="title">Emily Johnson</h2>
                          <ul className="list-wrap">
                            <li>
                              <Link to="#">Bold</Link>
                            </li>
                            <li>
                              <Link to="#">Approachable</Link>
                            </li>
                            <li>
                              <Link to="#">Commanding</Link>
                            </li>
                            <li>
                              <Link to="#">Heroic</Link>
                            </li>
                            <li>
                              <Link to="#">Tough</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-10">
                      <div className="more-vioces-item">
                        <div className="more-vioces-thumb">
                          <ul className="list-wrap">
                            <li>
                              <img
                                src="/assets/img/images/m_voice_img01.png"
                                alt=""
                              />
                            </li>
                            <li>
                              <img
                                src="/assets/img/images/m_voice_img02.png"
                                alt=""
                              />
                            </li>
                            <li>
                              <img
                                src="/assets/img/images/m_voice_img03.png"
                                alt=""
                              />
                            </li>
                            <li>
                              <img
                                src="/assets/img/images/m_voice_img04.png"
                                alt=""
                              />
                            </li>
                            <li>
                              <img
                                src="/assets/img/images/m_voice_img05.png"
                                alt=""
                              />
                            </li>
                          </ul>
                        </div>
                        <div className="more-vioces-content">
                          <p>
                            To get more voices, you can instantly clone any
                            voice with just 3 seconds of audio
                          </p>
                          <Link
                            to="/contact"
                            className="gradient-btn gradient-btn-four"
                          >
                            TRY NOW FOR FREE
                          </Link>
                        </div>
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
                  <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6 col-sm-10">
                      <div className="vioces-item">
                        <div className="vioces-thumb">
                          <img
                            src="/assets/img/images/voice_img02.jpg"
                            alt=""
                          />
                        </div>
                        <div className="vioces-content">
                          <VideoPopup />
                          <h2 className="title">Paul Gent</h2>
                          <ul className="list-wrap">
                            <li>
                              <Link to="#">Bold</Link>
                            </li>
                            <li>
                              <Link to="#">Approachable</Link>
                            </li>
                            <li>
                              <Link to="#">Commanding</Link>
                            </li>
                            <li>
                              <Link to="#">Heroic</Link>
                            </li>
                            <li>
                              <Link to="#">Tough</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-10">
                      <div className="vioces-item">
                        <div className="vioces-thumb">
                          <img
                            src="/assets/img/images/voice_img05.jpg"
                            alt=""
                          />
                        </div>
                        <div className="vioces-content">
                          <VideoPopup />
                          <h2 className="title">Charles Henry</h2>
                          <ul className="list-wrap">
                            <li>
                              <Link to="#">Confident</Link>
                            </li>
                            <li>
                              <Link to="#">Bold</Link>
                            </li>
                            <li>
                              <Link to="#">Authoritative</Link>
                            </li>
                            <li>
                              <Link to="#">Bossy</Link>
                            </li>
                            <li>
                              <Link to="#">Charismatic</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-10">
                      <div className="vioces-item">
                        <div className="vioces-thumb">
                          <img
                            src="/assets/img/images/voice_img01.jpg"
                            alt=""
                          />
                        </div>
                        <div className="vioces-content">
                          <VideoPopup />
                          <h2 className="title">Michael Davis</h2>
                          <ul className="list-wrap">
                            <li>
                              <Link to="#">Confident</Link>
                            </li>
                            <li>
                              <Link to="#">Bold</Link>
                            </li>
                            <li>
                              <Link to="#">Authoritative</Link>
                            </li>
                            <li>
                              <Link to="#">Bossy</Link>
                            </li>
                            <li>
                              <Link to="#">Charismatic</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-10">
                      <div className="vioces-item">
                        <div className="vioces-thumb">
                          <img
                            src="/assets/img/images/voice_img03.jpg"
                            alt=""
                          />
                        </div>
                        <div className="vioces-content">
                          <VideoPopup />
                          <h2 className="title">Daniel Lewis</h2>
                          <ul className="list-wrap">
                            <li>
                              <Link to="#">Reassuring</Link>
                            </li>
                            <li>
                              <Link to="#">Approachable</Link>
                            </li>
                            <li>
                              <Link to="#">Bossy</Link>
                            </li>
                            <li>
                              <Link to="#">Attentive</Link>
                            </li>
                            <li>
                              <Link to="#">Charismatic</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-10">
                      <div className="vioces-item">
                        <div className="vioces-thumb">
                          <img
                            src="/assets/img/images/voice_img04.jpg"
                            alt=""
                          />
                        </div>
                        <div className="vioces-content">
                          <VideoPopup />
                          <h2 className="title">Emily Johnson</h2>
                          <ul className="list-wrap">
                            <li>
                              <Link to="#">Bold</Link>
                            </li>
                            <li>
                              <Link to="#">Approachable</Link>
                            </li>
                            <li>
                              <Link to="#">Commanding</Link>
                            </li>
                            <li>
                              <Link to="#">Heroic</Link>
                            </li>
                            <li>
                              <Link to="#">Tough</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-10">
                      <div className="more-vioces-item">
                        <div className="more-vioces-thumb">
                          <ul className="list-wrap">
                            <li>
                              <img
                                src="/assets/img/images/m_voice_img01.png"
                                alt=""
                              />
                            </li>
                            <li>
                              <img
                                src="/assets/img/images/m_voice_img02.png"
                                alt=""
                              />
                            </li>
                            <li>
                              <img
                                src="/assets/img/images/m_voice_img03.png"
                                alt=""
                              />
                            </li>
                            <li>
                              <img
                                src="/assets/img/images/m_voice_img04.png"
                                alt=""
                              />
                            </li>
                            <li>
                              <img
                                src="/assets/img/images/m_voice_img05.png"
                                alt=""
                              />
                            </li>
                          </ul>
                        </div>
                        <div className="more-vioces-content">
                          <p>
                            To get more voices, you can instantly clone any
                            voice with just 3 seconds of audio
                          </p>
                          <Link
                            to="/contact"
                            className="gradient-btn gradient-btn-four"
                          >
                            TRY NOW FOR FREE
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={
                    activeIndex == 4
                      ? "tab-pane fade show active"
                      : "tab-pane fade"
                  }
                >
                  <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6 col-sm-10">
                      <div className="vioces-item">
                        <div className="vioces-thumb">
                          <img
                            src="/assets/img/images/voice_img03.jpg"
                            alt=""
                          />
                        </div>
                        <div className="vioces-content">
                          <VideoPopup />
                          <h2 className="title">Daniel Lewis</h2>
                          <ul className="list-wrap">
                            <li>
                              <Link to="#">Reassuring</Link>
                            </li>
                            <li>
                              <Link to="#">Approachable</Link>
                            </li>
                            <li>
                              <Link to="#">Bossy</Link>
                            </li>
                            <li>
                              <Link to="#">Attentive</Link>
                            </li>
                            <li>
                              <Link to="#">Charismatic</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-10">
                      <div className="vioces-item">
                        <div className="vioces-thumb">
                          <img
                            src="/assets/img/images/voice_img02.jpg"
                            alt=""
                          />
                        </div>
                        <div className="vioces-content">
                          <VideoPopup />
                          <h2 className="title">Paul Gent</h2>
                          <ul className="list-wrap">
                            <li>
                              <Link to="#">Bold</Link>
                            </li>
                            <li>
                              <Link to="#">Approachable</Link>
                            </li>
                            <li>
                              <Link to="#">Commanding</Link>
                            </li>
                            <li>
                              <Link to="#">Heroic</Link>
                            </li>
                            <li>
                              <Link to="#">Tough</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-10">
                      <div className="vioces-item">
                        <div className="vioces-thumb">
                          <img
                            src="/assets/img/images/voice_img05.jpg"
                            alt=""
                          />
                        </div>
                        <div className="vioces-content">
                          <VideoPopup />
                          <h2 className="title">Charles Henry</h2>
                          <ul className="list-wrap">
                            <li>
                              <Link to="#">Confident</Link>
                            </li>
                            <li>
                              <Link to="#">Bold</Link>
                            </li>
                            <li>
                              <Link to="#">Authoritative</Link>
                            </li>
                            <li>
                              <Link to="#">Bossy</Link>
                            </li>
                            <li>
                              <Link to="#">Charismatic</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-10">
                      <div className="vioces-item">
                        <div className="vioces-thumb">
                          <img
                            src="/assets/img/images/voice_img01.jpg"
                            alt=""
                          />
                        </div>
                        <div className="vioces-content">
                          <VideoPopup />
                          <h2 className="title">Michael Davis</h2>
                          <ul className="list-wrap">
                            <li>
                              <Link to="#">Confident</Link>
                            </li>
                            <li>
                              <Link to="#">Bold</Link>
                            </li>
                            <li>
                              <Link to="#">Authoritative</Link>
                            </li>
                            <li>
                              <Link to="#">Bossy</Link>
                            </li>
                            <li>
                              <Link to="#">Charismatic</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-10">
                      <div className="vioces-item">
                        <div className="vioces-thumb">
                          <img
                            src="/assets/img/images/voice_img04.jpg"
                            alt=""
                          />
                        </div>
                        <div className="vioces-content">
                          <VideoPopup />
                          <h2 className="title">Emily Johnson</h2>
                          <ul className="list-wrap">
                            <li>
                              <Link to="#">Bold</Link>
                            </li>
                            <li>
                              <Link to="#">Approachable</Link>
                            </li>
                            <li>
                              <Link to="#">Commanding</Link>
                            </li>
                            <li>
                              <Link to="#">Heroic</Link>
                            </li>
                            <li>
                              <Link to="#">Tough</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-10">
                      <div className="more-vioces-item">
                        <div className="more-vioces-thumb">
                          <ul className="list-wrap">
                            <li>
                              <img
                                src="/assets/img/images/m_voice_img01.png"
                                alt=""
                              />
                            </li>
                            <li>
                              <img
                                src="/assets/img/images/m_voice_img02.png"
                                alt=""
                              />
                            </li>
                            <li>
                              <img
                                src="/assets/img/images/m_voice_img03.png"
                                alt=""
                              />
                            </li>
                            <li>
                              <img
                                src="/assets/img/images/m_voice_img04.png"
                                alt=""
                              />
                            </li>
                            <li>
                              <img
                                src="/assets/img/images/m_voice_img05.png"
                                alt=""
                              />
                            </li>
                          </ul>
                        </div>
                        <div className="more-vioces-content">
                          <p>
                            To get more voices, you can instantly clone any
                            voice with just 3 seconds of audio
                          </p>
                          <Link
                            to="/contact"
                            className="gradient-btn gradient-btn-four"
                          >
                            TRY NOW FOR FREE
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={
                    activeIndex == 5
                      ? "tab-pane fade show active"
                      : "tab-pane fade"
                  }
                >
                  <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6 col-sm-10">
                      <div className="vioces-item">
                        <div className="vioces-thumb">
                          <img
                            src="/assets/img/images/voice_img04.jpg"
                            alt=""
                          />
                        </div>
                        <div className="vioces-content">
                          <VideoPopup />
                          <h2 className="title">Emily Johnson</h2>
                          <ul className="list-wrap">
                            <li>
                              <Link to="#">Bold</Link>
                            </li>
                            <li>
                              <Link to="#">Approachable</Link>
                            </li>
                            <li>
                              <Link to="#">Commanding</Link>
                            </li>
                            <li>
                              <Link to="#">Heroic</Link>
                            </li>
                            <li>
                              <Link to="#">Tough</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-10">
                      <div className="vioces-item">
                        <div className="vioces-thumb">
                          <img
                            src="/assets/img/images/voice_img03.jpg"
                            alt=""
                          />
                        </div>
                        <div className="vioces-content">
                          <VideoPopup />
                          <h2 className="title">Daniel Lewis</h2>
                          <ul className="list-wrap">
                            <li>
                              <Link to="#">Reassuring</Link>
                            </li>
                            <li>
                              <Link to="#">Approachable</Link>
                            </li>
                            <li>
                              <Link to="#">Bossy</Link>
                            </li>
                            <li>
                              <Link to="#">Attentive</Link>
                            </li>
                            <li>
                              <Link to="#">Charismatic</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-10">
                      <div className="vioces-item">
                        <div className="vioces-thumb">
                          <img
                            src="/assets/img/images/voice_img02.jpg"
                            alt=""
                          />
                        </div>
                        <div className="vioces-content">
                          <VideoPopup />
                          <h2 className="title">Paul Gent</h2>
                          <ul className="list-wrap">
                            <li>
                              <Link to="#">Bold</Link>
                            </li>
                            <li>
                              <Link to="#">Approachable</Link>
                            </li>
                            <li>
                              <Link to="#">Commanding</Link>
                            </li>
                            <li>
                              <Link to="#">Heroic</Link>
                            </li>
                            <li>
                              <Link to="#">Tough</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-10">
                      <div className="vioces-item">
                        <div className="vioces-thumb">
                          <img
                            src="/assets/img/images/voice_img05.jpg"
                            alt=""
                          />
                        </div>
                        <div className="vioces-content">
                          <VideoPopup />
                          <h2 className="title">Charles Henry</h2>
                          <ul className="list-wrap">
                            <li>
                              <Link to="#">Confident</Link>
                            </li>
                            <li>
                              <Link to="#">Bold</Link>
                            </li>
                            <li>
                              <Link to="#">Authoritative</Link>
                            </li>
                            <li>
                              <Link to="#">Bossy</Link>
                            </li>
                            <li>
                              <Link to="#">Charismatic</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-10">
                      <div className="vioces-item">
                        <div className="vioces-thumb">
                          <img
                            src="/assets/img/images/voice_img01.jpg"
                            alt=""
                          />
                        </div>
                        <div className="vioces-content">
                          <VideoPopup />
                          <h2 className="title">Michael Davis</h2>
                          <ul className="list-wrap">
                            <li>
                              <Link to="#">Confident</Link>
                            </li>
                            <li>
                              <Link to="#">Bold</Link>
                            </li>
                            <li>
                              <Link to="#">Authoritative</Link>
                            </li>
                            <li>
                              <Link to="#">Bossy</Link>
                            </li>
                            <li>
                              <Link to="#">Charismatic</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-10">
                      <div className="more-vioces-item">
                        <div className="more-vioces-thumb">
                          <ul className="list-wrap">
                            <li>
                              <img
                                src="/assets/img/images/m_voice_img01.png"
                                alt=""
                              />
                            </li>
                            <li>
                              <img
                                src="/assets/img/images/m_voice_img02.png"
                                alt=""
                              />
                            </li>
                            <li>
                              <img
                                src="/assets/img/images/m_voice_img03.png"
                                alt=""
                              />
                            </li>
                            <li>
                              <img
                                src="/assets/img/images/m_voice_img04.png"
                                alt=""
                              />
                            </li>
                            <li>
                              <img
                                src="/assets/img/images/m_voice_img05.png"
                                alt=""
                              />
                            </li>
                          </ul>
                        </div>
                        <div className="more-vioces-content">
                          <p>
                            To get more voices, you can instantly clone any
                            voice with just 3 seconds of audio
                          </p>
                          <Link
                            to="/contact"
                            className="gradient-btn gradient-btn-four"
                          >
                            TRY NOW FOR FREE
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="vioces-shape">
        <img
          src="/assets/img/images/voice_shape.png"
          alt=""
          className="alltuchtopdown"
        />
      </div>
    </section>
  );
};
export default Voices;
