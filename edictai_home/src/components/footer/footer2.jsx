import { Link } from "react-router-dom";

const Footer2 = () => {
  return (
    <footer>
      <div className="footer-area-two">
        <div className="footer-top-two">
          <div className="container">
            <div className="footer-features-wrap">
              
            </div>
            <div className="footer-widget-wrap">
              <div className="row row-cols-1 row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2">
                <div className="col">
                  <div className="footer-widget">
                    <h4 className="fw-title-two">company</h4>
                    <div className="footer-link-two">
                      <ul className="list-wrap">
                        <li>
                          <Link to="/about">About Us</Link>
                        </li>
                        <li>
                          <Link to="/contact">AI Research</Link>
                        </li>
                        <li>
                          <Link to="/contact">Jobs</Link>
                        </li>
                        <li>
                          <Link to="/contact">Press Kit</Link>
                        </li>
                        <li>
                          <Link to="/contact">Contact Sales</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="footer-widget st1">
                    <h4 className="fw-title-two">Features</h4>
                    <div className="footer-link-two">
                      <ul className="list-wrap">
                        <li>
                          <Link to="/faq">85+ Video Avatars</Link>
                        </li>
                        <li>
                          <Link to="/faq">120+ Languages</Link>
                        </li>
                        <li>
                          <Link to="/contact">Custom Avatars</Link>
                        </li>
                        <li>
                          <Link to="/contact">Text to Video</Link>
                        </li>
                        <li>
                          <Link to="/contact">Online Video Maker</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="footer-widget st2">
                    <h4 className="fw-title-two">Resources</h4>
                    <div className="footer-link-two">
                      <ul className="list-wrap">
                        <li>
                          <Link to="/contact">Pricing</Link>
                        </li>
                        <li>
                          <Link to="/contact">Book a Demo</Link>
                        </li>
                        <li>
                          <Link to="/contact">Case Studies</Link>
                        </li>
                        <li>
                          <Link to="/contact">Example videos</Link>
                        </li>
                        <li>
                          <Link to="/work">Tools</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="footer-widget st3">
                    <h4 className="fw-title-two">Use Cases</h4>
                    <div className="footer-link-two">
                      <ul className="list-wrap">
                        <li>
                          <Link to="/contact">Training Videos</Link>
                        </li>
                        <li>
                          <Link to="/contact">How-to Videos</Link>
                        </li>
                        <li>
                          <Link to="/contact">Marketing Videos</Link>
                        </li>
                        <li>
                          <Link to="/contact">Service Providers</Link>
                        </li>
                        <li>
                          <Link to="/contact">Product Updates</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="footer-widget st4">
                    <h4 className="fw-title-two">Need Emergency Help?</h4>
                    <div className="footer-contact-two">
                      <Link to="/tel:0123456789" className="phone">
                        +(1) 123 656 7866
                      </Link>
                      <Link to="/tel:0123456789" className="phone">
                        +(1) 123 656 7866
                      </Link>
                      <Link to="/mailto:edict.aiinfotive@.com" className="email">
                        edict.ai infotive@.com
                      </Link>
                    </div>
                    <div className="footer-social-two">
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
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom-two">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="copyright-text">
                  <p>
                    Copyright © {new Date().getFullYear()} edict.AI All rights
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
export default Footer2;
