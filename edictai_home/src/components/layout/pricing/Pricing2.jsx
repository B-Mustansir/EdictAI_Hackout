import { Link } from "react-router-dom";
import { useState } from "react";

const Pricing2 = () => {
  const [isToggled, setToggled] = useState(false);
  const toggleTrueFalse = () => setToggled(!isToggled);
  return (
    <section className="pricing-area-two">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8">
            <div className="section-title-two text-center mb-55">
              <h2 className="title wow fadeInUp" data-wow-delay=".2s">
                Plans for&nbsp;
                <span>
                  <strong>
                    AI video
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
                        fill="url(#title-06)"
                      />
                      <defs>
                        <linearGradient
                          id="title-06"
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
                  &nbsp;content &nbsp;
                </span>
                creation strategy
              </h2>
            </div>
          </div>
        </div>
        <div className="pricing-item-wrap-two">
          <div className="pricing-billing-duration text-center">
            <div className="pricing-tab" onClick={toggleTrueFalse}>
              <span className="tab-btn monthly_tab_title">Monthly</span>
              <span
                className={
                  isToggled
                    ? "pricing-tab-switcher active"
                    : " pricing-tab-switcher"
                }
              />
              <span className="tab-btn annual_tab_title">
                Annually Save 30%
              </span>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div
                className="pricing-item-two wow fadeInLeft"
                data-wow-delay=".2s"
              >
                <div className="pricing-shape">
                  <svg
                    viewBox="0 0 410 610"
                    fill="none"
                    x="0px"
                    y="0px"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M30 0C13.4315 0 0 13.4315 0 30V159.153C0.651939 159.052 1.31987 159 2 159C8.14716 159 13.2978 163.267 14.6521 169H20.3V172H15C15 179.18 9.1797 185 2 185C1.31987 185 0.651939 184.948 0 184.847V580C0 596.569 13.4315 610 30 610H380C396.569 610 410 596.569 410 580V184.847C409.348 184.948 408.68 185 408 185C400.82 185 395 179.18 395 172C395 164.82 400.82 159 408 159C408.68 159 409.348 159.052 410 159.153V30C410 13.4315 396.569 0 380 0H30ZM28.42 172H36.54V169H28.42V172ZM44.66 172H52.78V169H44.66V172ZM60.9 172H69.02V169H60.9V172ZM77.14 172H85.26V169H77.14V172ZM93.38 172H101.5V169H93.38V172ZM109.62 172H117.74V169H109.62V172ZM125.86 172H133.98V169H125.86V172ZM142.1 172H150.22V169H142.1V172ZM158.34 172H166.46V169H158.34V172ZM174.58 172H182.7V169H174.58V172ZM190.82 172H198.94V169H190.82V172ZM207.06 172H215.18V169H207.06V172ZM223.3 172H231.42V169H223.3V172ZM239.54 172H247.66V169H239.54V172ZM255.78 172H263.9V169H255.78V172ZM272.02 172H280.14V169H272.02V172ZM288.26 172H296.38V169H288.26V172ZM304.5 172H312.62V169H304.5V172ZM320.74 172H328.86V169H320.74V172ZM336.98 172H345.1V169H336.98V172ZM353.22 172H361.34V169H353.22V172ZM369.46 172H377.58V169H369.46V172ZM385.7 172H393.82V169H385.7V172Z"
                      fill="currentcolor"
                    />
                  </svg>
                </div>
                <div className="pricing-top-content">
                  <h2 className="pricing-plan">Free</h2>
                  <div className="pricing-price">
                    <h2 className="price monthly_price">
                      0 <span>/ {isToggled ? "year" : "month"}</span>
                    </h2>
                  </div>
                </div>
                <div className="price-ordering">
                  <select name="orderby" className="orderby">
                    <option value="Default sorting">
                      01 video minutes/Month
                    </option>
                    <option value="Sort by popularity">
                      01 video minutes/Year
                    </option>
                  </select>
                </div>
                <div className="pricing-list">
                  <ul className="list-wrap">
                    <li>Text-to-video</li>
                    <li>Automated translations</li>
                    <li className="delete">10+ Avatars</li>
                    <li className="delete">All Basic Features</li>
                    <li className="delete">20+ Remove background/mo</li>
                  </ul>
                </div>
                <div className="pricing-btn">
                  <Link to="/login" className="btn btn-three">
                    choose plan
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="pricing-item-two active wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div className="pricing-shape">
                  <svg
                    viewBox="0 0 410 610"
                    fill="none"
                    x="0px"
                    y="0px"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M30 0C13.4315 0 0 13.4315 0 30V159.153C0.651939 159.052 1.31987 159 2 159C8.14716 159 13.2978 163.267 14.6521 169H20.3V172H15C15 179.18 9.1797 185 2 185C1.31987 185 0.651939 184.948 0 184.847V580C0 596.569 13.4315 610 30 610H380C396.569 610 410 596.569 410 580V184.847C409.348 184.948 408.68 185 408 185C400.82 185 395 179.18 395 172C395 164.82 400.82 159 408 159C408.68 159 409.348 159.052 410 159.153V30C410 13.4315 396.569 0 380 0H30ZM28.42 172H36.54V169H28.42V172ZM44.66 172H52.78V169H44.66V172ZM60.9 172H69.02V169H60.9V172ZM77.14 172H85.26V169H77.14V172ZM93.38 172H101.5V169H93.38V172ZM109.62 172H117.74V169H109.62V172ZM125.86 172H133.98V169H125.86V172ZM142.1 172H150.22V169H142.1V172ZM158.34 172H166.46V169H158.34V172ZM174.58 172H182.7V169H174.58V172ZM190.82 172H198.94V169H190.82V172ZM207.06 172H215.18V169H207.06V172ZM223.3 172H231.42V169H223.3V172ZM239.54 172H247.66V169H239.54V172ZM255.78 172H263.9V169H255.78V172ZM272.02 172H280.14V169H272.02V172ZM288.26 172H296.38V169H288.26V172ZM304.5 172H312.62V169H304.5V172ZM320.74 172H328.86V169H320.74V172ZM336.98 172H345.1V169H336.98V172ZM353.22 172H361.34V169H353.22V172ZM369.46 172H377.58V169H369.46V172ZM385.7 172H393.82V169H385.7V172Z"
                      fill="currentcolor"
                    />
                  </svg>
                </div>
                <div className="pricing-top-content">
                  <h2 className="pricing-plan">Basic</h2>
                  <div className="pricing-price">
                    <h2 className="price monthly_price">
                      ${isToggled ? "299" : "39"}{" "}
                      <span>/{isToggled ? "year" : "month"}</span>
                    </h2>
                  </div>
                </div>
                <div className="price-ordering">
                  <select name="orderby" className="orderby">
                    <option value="Default sorting">
                      15 video minutes/Month
                    </option>
                    <option value="Sort by popularity">
                      15 video minutes/Year
                    </option>
                  </select>
                </div>
                <div className="pricing-list">
                  <ul className="list-wrap">
                    <li>Text-to-video</li>
                    <li>Automated translations</li>
                    <li className="delete">10+ Avatars</li>
                    <li className="delete">All Basic Features</li>
                    <li className="delete">20+ Remove background/mo</li>
                  </ul>
                </div>
                <div className="pricing-btn">
                  <Link to="/login" className="gradient-btn gradient-btn-three">
                    choose plan
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="pricing-item-two wow fadeInRight"
                data-wow-delay=".2s"
              >
                <div className="sticker">
                  <img src="/assets/img/images/sticker.png" alt="" />
                </div>
                <div className="pricing-shape">
                  <svg
                    viewBox="0 0 410 610"
                    fill="none"
                    x="0px"
                    y="0px"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M30 0C13.4315 0 0 13.4315 0 30V159.153C0.651939 159.052 1.31987 159 2 159C8.14716 159 13.2978 163.267 14.6521 169H20.3V172H15C15 179.18 9.1797 185 2 185C1.31987 185 0.651939 184.948 0 184.847V580C0 596.569 13.4315 610 30 610H380C396.569 610 410 596.569 410 580V184.847C409.348 184.948 408.68 185 408 185C400.82 185 395 179.18 395 172C395 164.82 400.82 159 408 159C408.68 159 409.348 159.052 410 159.153V30C410 13.4315 396.569 0 380 0H30ZM28.42 172H36.54V169H28.42V172ZM44.66 172H52.78V169H44.66V172ZM60.9 172H69.02V169H60.9V172ZM77.14 172H85.26V169H77.14V172ZM93.38 172H101.5V169H93.38V172ZM109.62 172H117.74V169H109.62V172ZM125.86 172H133.98V169H125.86V172ZM142.1 172H150.22V169H142.1V172ZM158.34 172H166.46V169H158.34V172ZM174.58 172H182.7V169H174.58V172ZM190.82 172H198.94V169H190.82V172ZM207.06 172H215.18V169H207.06V172ZM223.3 172H231.42V169H223.3V172ZM239.54 172H247.66V169H239.54V172ZM255.78 172H263.9V169H255.78V172ZM272.02 172H280.14V169H272.02V172ZM288.26 172H296.38V169H288.26V172ZM304.5 172H312.62V169H304.5V172ZM320.74 172H328.86V169H320.74V172ZM336.98 172H345.1V169H336.98V172ZM353.22 172H361.34V169H353.22V172ZM369.46 172H377.58V169H369.46V172ZM385.7 172H393.82V169H385.7V172Z"
                      fill="currentcolor"
                    />
                  </svg>
                </div>
                <div className="pricing-top-content">
                  <h2 className="pricing-plan">Advanced</h2>
                  <div className="pricing-price">
                    <h2 className="price monthly_price">
                      ${isToggled ? "999" : "99"}{" "}
                      <span>/{isToggled ? "year" : "month"}</span>
                    </h2>
                  </div>
                </div>
                <div className="price-ordering">
                  <select name="orderby" className="orderby">
                    <option value="Default sorting">
                      50 video minutes/Month
                    </option>
                    <option value="Sort by popularity">
                      50 video minutes/Year
                    </option>
                  </select>
                </div>
                <div className="pricing-list">
                  <ul className="list-wrap">
                    <li>Text-to-video</li>
                    <li>Automated translations</li>
                    <li className="delete">10+ Avatars</li>
                    <li className="delete">All Basic Features</li>
                    <li className="delete">20+ Remove background/mo</li>
                  </ul>
                </div>
                <div className="pricing-btn">
                  <Link to="/login" className="btn btn-three">
                    choose plan
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pricing-shape-wrap">
        <img
          src="/assets/img/images/pricing_shape.png"
          alt=""
          className="alltuchtopdown"
        />
      </div>
    </section>
  );
};
export default Pricing2;
