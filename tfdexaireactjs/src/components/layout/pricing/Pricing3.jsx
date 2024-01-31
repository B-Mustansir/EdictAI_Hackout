import { Link } from "react-router-dom";
import { useState } from "react";

const Pricing3 = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleOnClick = (index) => {
    setActiveIndex(index);
  };
  const [counter, setCounter] = useState([0, 0, 0, 0, 0, 0]);

  const increment = (index) => {
    const updatedCounter = [...counter];
    updatedCounter[index] += 1;
    setCounter(updatedCounter);
  };

  const decrement = (index) => {
    const updatedCounter = [...counter];
    updatedCounter[index] -= 1;
    setCounter(updatedCounter);
  };
  return (
    <section className="pricing-area-three">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div
              className="section-title-three text-center mb-60 title-animation wow fadeInUp"
              data-wow-delay=".2s"
            >
              <h2 className="title">
                Our Pricing We Provide a <span>flexible plan</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="pricing-item-wrap-three">
          <div className="pricing-tab">
            <ul className="nav nav-tabs" id="myTabTwo" role="tablist">
              <li className="nav-item" onClick={() => handleOnClick(1)}>
                <button
                  className={activeIndex == 1 ? "nav-link active" : "nav-link"}
                >
                  Billed monthly
                </button>
              </li>
              <li className="nav-item" onClick={() => handleOnClick(2)}>
                <button
                  className={activeIndex == 2 ? "nav-link active" : "nav-link"}
                >
                  Billed yearly <span>30%</span>
                </button>
              </li>
            </ul>
          </div>
          <div className="tab-content" id="myTabContentTwo">
            <div
              className={
                activeIndex == 1 ? "tab-pane fade show active" : "tab-pane fade"
              }
            >
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 col-sm-10">
                  <div className="pricing-item-three">
                    <div className="pricing-top-content-two">
                      <h2 className="pricing-plan">🤵 Personal</h2>
                      <p>
                        Individual uses such as personal youtube, blog, social
                        media, presentation, language learning
                      </p>
                    </div>
                    <div className="pricing-price">
                      <h2 className="price">
                        Free <span>/month</span>
                      </h2>
                      <span className="character">3.500 characters</span>
                    </div>
                    <div className="user-wrap">
                      <span># Users</span>
                      <form action="#" className="num-block">
                        <input
                          className="in-num"
                          type="text"
                          value={counter[0]}
                          readOnly
                        />
                        <div className="user-plus-minus">
                          <span onClick={() => increment(0)}>
                            <i className="fas fa-angle-up" />
                          </span>
                          <span
                            className="minus dis"
                            onClick={() => decrement(0)}
                          >
                            <i className="fas fa-angle-down" />
                          </span>
                        </div>
                      </form>
                    </div>
                    <div className="pricing-list">
                      <ul className="list-wrap">
                        <li>Extra Characters For Tries</li>
                        <li>75+ Language, 140+ Variant</li>
                        <li>400 HD in 550+ Voices</li>
                        <li>Corporate Invoice</li>
                        <li className="delete">Download As Mp3 File</li>
                        <li className="delete">API Access</li>
                        <li className="delete">Team Work</li>
                        <li className="delete">Standard License</li>
                      </ul>
                    </div>
                    <div className="pricing-btn">
                      <Link
                        to="/login"
                        className="gradient-btn gradient-btn-four"
                      >
                        choose plan
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-10">
                  <div className="pricing-item-three active">
                    <span className="best-offer">BEST OFFER</span>
                    <div className="pricing-top-content-two">
                      <h2 className="pricing-plan">👑 Pro</h2>
                      <p>
                        Individual uses such as personal youtube, blog, social
                        media, presentation, language learning
                      </p>
                    </div>
                    <div className="pricing-price">
                      <h2 className="price">
                        $79 <span>/month</span>
                      </h2>
                      <span className="character">70.000 characters</span>
                    </div>
                    <div className="user-wrap">
                      <span># Users</span>
                      <form action="#" className="num-block">
                        <input
                          className="in-num"
                          type="text"
                          value={counter[1]}
                          readOnly
                        />
                        <div className="user-plus-minus">
                          <span onClick={() => increment(1)}>
                            <i className="fas fa-angle-up" />
                          </span>
                          <span
                            className="minus dis"
                            onClick={() => decrement(1)}
                          >
                            <i className="fas fa-angle-down" />
                          </span>
                        </div>
                      </form>
                    </div>
                    <div className="pricing-list">
                      <ul className="list-wrap">
                        <li>Extra Characters For Tries</li>
                        <li>75+ Language, 140+ Variant</li>
                        <li>400 HD in 550+ Voices</li>
                        <li>Corporate Invoice</li>
                        <li>Download As Mp3 File</li>
                        <li>API Access</li>
                        <li className="delete">Team Work</li>
                        <li className="delete">Standard License</li>
                      </ul>
                    </div>
                    <div className="pricing-btn">
                      <Link
                        to="/login"
                        className="gradient-btn gradient-btn-four"
                      >
                        choose plan
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-10">
                  <div className="pricing-item-three">
                    <div className="pricing-top-content-two">
                      <h2 className="pricing-plan">🌟 Enterprise</h2>
                      <p>
                        Individual uses such as personal youtube, blog, social
                        media, presentation, language learning
                      </p>
                    </div>
                    <div className="pricing-price">
                      <h2 className="price">
                        $99 <span>/month</span>
                      </h2>
                      <span className="character">Unlimited characters</span>
                    </div>
                    <div className="user-wrap">
                      <span># Users</span>
                      <form action="#" className="num-block">
                        <input
                          className="in-num"
                          type="text"
                          value={counter[2]}
                          readOnly
                        />
                        <div className="user-plus-minus">
                          <span onClick={() => increment(2)}>
                            <i className="fas fa-angle-up" />
                          </span>
                          <span
                            className="minus dis"
                            onClick={() => decrement(2)}
                          >
                            <i className="fas fa-angle-down" />
                          </span>
                        </div>
                      </form>
                    </div>
                    <div className="pricing-list">
                      <ul className="list-wrap">
                        <li>Extra Characters For Tries</li>
                        <li>75+ Language, 140+ Variant</li>
                        <li>400 HD in 550+ Voices</li>
                        <li>Corporate Invoice</li>
                        <li>Download As Mp3 File</li>
                        <li>API Access</li>
                        <li>Team Work</li>
                        <li>Standard License</li>
                      </ul>
                    </div>
                    <div className="pricing-btn">
                      <Link
                        to="/login"
                        className="gradient-btn gradient-btn-four"
                      >
                        choose plan
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={
                activeIndex == 2 ? "tab-pane fade show active" : "tab-pane fade"
              }
            >
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 col-sm-10">
                  <div className="pricing-item-three">
                    <div className="pricing-top-content-two">
                      <h2 className="pricing-plan">🤵 Personal</h2>
                      <p>
                        Individual uses such as personal youtube, blog, social
                        media, presentation, language learning
                      </p>
                    </div>
                    <div className="pricing-price">
                      <h2 className="price">
                        Free <span>/year</span>
                      </h2>
                      <span className="character">3.500 characters</span>
                    </div>
                    <div className="user-wrap">
                      <span># Users</span>
                      <form action="#" className="num-block">
                        <input
                          className="in-num"
                          type="text"
                          value={counter[3]}
                          readOnly
                        />
                        <div className="user-plus-minus">
                          <span onClick={() => increment(3)}>
                            <i className="fas fa-angle-up" />
                          </span>
                          <span
                            className="minus dis"
                            onClick={() => decrement(3)}
                          >
                            <i className="fas fa-angle-down" />
                          </span>
                        </div>
                      </form>
                    </div>
                    <div className="pricing-list">
                      <ul className="list-wrap">
                        <li>Extra Characters For Tries</li>
                        <li>75+ Language, 140+ Variant</li>
                        <li>400 HD in 550+ Voices</li>
                        <li>Corporate Invoice</li>
                        <li className="delete">Download As Mp3 File</li>
                        <li className="delete">API Access</li>
                        <li className="delete">Team Work</li>
                        <li className="delete">Standard License</li>
                      </ul>
                    </div>
                    <div className="pricing-btn">
                      <Link
                        to="/contact"
                        className="gradient-btn gradient-btn-four"
                      >
                        choose plane
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-10">
                  <div className="pricing-item-three active">
                    <span className="best-offer">BEST OFFER</span>
                    <div className="pricing-top-content-two">
                      <h2 className="pricing-plan">👑 Pro</h2>
                      <p>
                        Individual uses such as personal youtube, blog, social
                        media, presentation, language learning
                      </p>
                    </div>
                    <div className="pricing-price">
                      <h2 className="price">
                        $779 <span>/year</span>
                      </h2>
                      <span className="character">70.000 characters</span>
                    </div>
                    <div className="user-wrap">
                      <span># Users</span>
                      <form action="#" className="num-block">
                        <input
                          className="in-num"
                          type="text"
                          value={counter[4]}
                          readOnly
                        />
                        <div className="user-plus-minus">
                          <span onClick={() => increment(4)}>
                            <i className="fas fa-angle-up" />
                          </span>
                          <span
                            className="minus dis"
                            onClick={() => decrement(4)}
                          >
                            <i className="fas fa-angle-down" />
                          </span>
                        </div>
                      </form>
                    </div>
                    <div className="pricing-list">
                      <ul className="list-wrap">
                        <li>Extra Characters For Tries</li>
                        <li>75+ Language, 140+ Variant</li>
                        <li>400 HD in 550+ Voices</li>
                        <li>Corporate Invoice</li>
                        <li>Download As Mp3 File</li>
                        <li>API Access</li>
                        <li className="delete">Team Work</li>
                        <li className="delete">Standard License</li>
                      </ul>
                    </div>
                    <div className="pricing-btn">
                      <Link
                        to="/contact"
                        className="gradient-btn gradient-btn-four"
                      >
                        choose plane
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-10">
                  <div className="pricing-item-three">
                    <div className="pricing-top-content-two">
                      <h2 className="pricing-plan">🌟 Enterprise</h2>
                      <p>
                        Individual uses such as personal youtube, blog, social
                        media, presentation, language learning
                      </p>
                    </div>
                    <div className="pricing-price">
                      <h2 className="price">
                        $999 <span>/year</span>
                      </h2>
                      <span className="character">Unlimited characters</span>
                    </div>
                    <div className="user-wrap">
                      <span># Users</span>
                      <form action="#" className="num-block">
                        <input
                          className="in-num"
                          type="text"
                          value={counter[5]}
                          readOnly
                        />
                        <div className="user-plus-minus">
                          <span onClick={() => increment(5)}>
                            <i className="fas fa-angle-up" />
                          </span>
                          <span
                            className="minus dis"
                            onClick={() => decrement(5)}
                          >
                            <i className="fas fa-angle-down" />
                          </span>
                        </div>
                      </form>
                    </div>
                    <div className="pricing-list">
                      <ul className="list-wrap">
                        <li>Extra Characters For Tries</li>
                        <li>75+ Language, 140+ Variant</li>
                        <li>400 HD in 550+ Voices</li>
                        <li>Corporate Invoice</li>
                        <li>Download As Mp3 File</li>
                        <li>API Access</li>
                        <li>Team Work</li>
                        <li>Standard License</li>
                      </ul>
                    </div>
                    <div className="pricing-btn">
                      <Link
                        to="/contact"
                        className="gradient-btn gradient-btn-four"
                      >
                        choose plane
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pricing-shape-wrap-two">
        <img
          src="/assets/img/images/h3_pricing_shape01.png"
          alt=""
          className="rotateme"
        />
        <img
          src="/assets/img/images/h3_pricing_shape02.png"
          alt=""
          className="alltuchtopdown"
        />
      </div>
    </section>
  );
};
export default Pricing3;
