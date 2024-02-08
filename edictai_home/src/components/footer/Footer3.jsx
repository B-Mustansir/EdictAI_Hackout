import { Link } from "react-router-dom";

const Footer3 = () => {
  return (
    <footer>
      <div className="footer-area-three">
        <div className="container">
          <div className="footer-top-three">
            <div className="row">
              <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                <div className="footer-widget">
                  <h4 className="fw-title">how to creates</h4>
                  <div className="footer-link-three">
                    <ul className="list-wrap">
                      <li>
                        <Link to="/contact">Animation Videos</Link>
                      </li>
                      <li>
                        <Link to="/contact">Video Games</Link>
                      </li>
                      <li>
                        <Link to="/contact">IVR Voices</Link>
                      </li>
                      <li>
                        <Link to="/contact">Spotify Ads</Link>
                      </li>
                      <li>
                        <Link to="/contact">Advertisements</Link>
                      </li>
                      <li>
                        <Link to="/contact">Youtube Videos</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                <div className="footer-widget st1">
                  <h4 className="fw-title">resources</h4>
                  <div className="footer-link-three">
                    <ul className="list-wrap">
                      <li>
                        <Link to="/contact">Transcription</Link>
                      </li>
                      <li>
                        <Link to="/contact">Text to Speech</Link>
                      </li>
                      <li>
                        <Link to="/contact">Smart Guide</Link>
                      </li>
                      <li>
                        <Link to="/contact">Voicer (TS) API</Link>
                      </li>
                      <li>
                        <Link to="/contact">(TS) for Web</Link>
                      </li>
                      <li>
                        <Link to="/contact">Partnership Program</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                <div className="footer-widget st2">
                  <h4 className="fw-title">Important Links</h4>
                  <div className="footer-link-three">
                    <ul className="list-wrap">
                      <li>
                        <Link to="/contact">Explore Voices</Link>
                      </li>
                      <li>
                        <Link to="/contact">Sample Videos</Link>
                      </li>
                      <li>
                        <Link to="/faq">F.A.Q.</Link>
                      </li>
                      <li>
                        <Link to="/blog">Blog</Link>
                      </li>
                      <li>
                        <Link to="/help">Data Protection</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact Us</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                <div className="footer-widget st3">
                  <h4 className="fw-title">download app</h4>
                  <div className="app-download">
                    <Link to="#">
                      <img src="/assets/img/images/appstore.png" alt="" />
                    </Link>
                    <Link to="#">
                      <img src="/assets/img/images/googleplay.png" alt="" />
                    </Link>
                  </div>
                  <div className="footer-social-three">
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
              <div className="col-xl-4 col-lg-6 col-md-8">
                <div className="footer-widget st4">
                  <h4 className="fw-title">keep up to date</h4>
                  <div className="footer-newsletter-two">
                    <p>
                      Join our community! <br /> Subscribe to the free
                      newsletter
                    </p>
                    <form action="#">
                      <input type="text" placeholder="Your email address" />
                      <button
                        type="submit"
                        className="gradient-btn gradient-btn-four"
                      >
                        sign in
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom-three">
            <div className="row">
              <div className="col-lg-6">
                <div className="copyright-text">
                  <p>
                    Copyright © {new Date().getFullYear()} DEX.AI All rights
                    reserved.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
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
export default Footer3;
