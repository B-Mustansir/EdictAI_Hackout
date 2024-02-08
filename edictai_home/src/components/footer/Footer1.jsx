import { Link } from "react-router-dom";
import Slider from "react-slick";
const settings = {
  dots: false,
  infinite: true,
  speed: 1000,
  autoplay: true,
  arrows: false,
  slidesToShow: 6,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
      },
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
      },
    },
  ],
};

const Footer1 = () => {
  return (
    <footer>
      <div className="footer-area">
        <div className="container">
          {/* brand-area */}
          <div className="brand-area">
            <div className="brand-wrap">
              <h6 className="title">
                Trusted by <span>10,000+ marketing</span> teams
              </h6>
              <Slider {...settings} className="row brand-active">
                <div className="col">
                  <div className="brand-item">
                    <img src="/assets/img/brand/brand_img01.png" alt="" />
                  </div>
                </div>
                <div className="col">
                  <div className="brand-item">
                    <img src="/assets/img/brand/brand_img02.png" alt="" />
                  </div>
                </div>
                <div className="col">
                  <div className="brand-item">
                    <img src="/assets/img/brand/brand_img03.png" alt="" />
                  </div>
                </div>
                <div className="col">
                  <div className="brand-item">
                    <img src="/assets/img/brand/brand_img04.png" alt="" />
                  </div>
                </div>
                <div className="col">
                  <div className="brand-item">
                    <img src="/assets/img/brand/brand_img05.png" alt="" />
                  </div>
                </div>
                <div className="col">
                  <div className="brand-item">
                    <img src="/assets/img/brand/brand_img06.png" alt="" />
                  </div>
                </div>
              </Slider>
            </div>
          </div>
          {/* brand-area-end */}
          <div className="footer-top">
            <div className="row">
              <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                <div className="footer-widget">
                  <h4 className="fw-title">Use Case</h4>
                  <div className="footer-link">
                    <ul className="list-wrap">
                      <li>
                        <Link to="/contact">For teams</Link>
                      </li>
                      <li>
                        <Link to="/contact">For blog writer</Link>
                      </li>
                      <li>
                        <Link to="/contact">For social media</Link>
                      </li>
                      <li>
                        <Link to="/contact">Report Outage</Link>
                      </li>
                      <li>
                        <Link to="/contact">Email Marketing</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                <div className="footer-widget st1">
                  <h4 className="fw-title">company</h4>
                  <div className="footer-link">
                    <ul className="list-wrap">
                      <li>
                        <Link to="/contact">Affiliate program</Link>
                      </li>
                      <li>
                        <Link to="/login">Account</Link>
                      </li>
                      <li>
                        <Link to="/contact">Invite a friend</Link>
                      </li>
                      {/* <li>
                        <Link to="/contact">Privacy policy</Link>
                      </li> */}
                      <li>
                        <Link to="/contact">Terms of use</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                <div className="footer-widget st2">
                  <h4 className="fw-title">Product</h4>
                  <div className="footer-link">
                    <ul className="list-wrap">
                      <li>
                        <Link to="/">DEX. AI</Link>
                      </li>
                      <li>
                        <Link to="/work">Our work</Link>
                      </li>
                      <li>
                        <Link to="/about">About us</Link>
                      </li>
                      <li>
                        <Link to="/help">Support</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact us</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <div className="footer-widget st3">
                  <h4 className="fw-title">Need help?</h4>
                  <div className="footer-contact">
                    <Link to="tel:0123456789" className="phone">
                      +(1) 123 656 7866
                    </Link>
                    <Link to="mailto:dex.aiinfotive@.com" className="email">
                      dex.ai infotive@.com
                    </Link>
                    <Link to="mailto:dex.aiinfotive@.com" className="email">
                      webdexai.com
                    </Link>
                  </div>
                  <div className="footer-social">
                    <ul className="list-wrap">
                      <li>
                        <Link to="#">
                          <i className="fab fa-twitter" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fab fa-facebook-f" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fab fa-linkedin-in" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fab fa-pinterest-p" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="footer-widget">
                  <div className="footer-newsletter">
                    <h6 className="title">Join our AI experts community</h6>
                    <p>Meet and learn from 70k+ creators companies</p>
                    <Link to="/contact" className="btn btn-two">
                      join the community
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="row align-items-center">
              <div className="col-lg-8">
                <div className="copyright-text">
                  <p>
                    Copyright © {new Date().getFullYear()} DEX.AI All rights
                    reserved.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="footer-menu">
                  <ul className="list-wrap">
                      <li>
                        <Link to="/policyprivacy">Privacy policy</Link>
                      </li>
                      <li>
                        <Link to="/termsandconditions">Terms & Conditions</Link>
                      </li>
                      <li>
                        <Link to="/refundpolicy">Refund Policy</Link>
                      </li>
                      <li>
                        <Link >Mustansir Bohari</Link>
                      </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer1;
