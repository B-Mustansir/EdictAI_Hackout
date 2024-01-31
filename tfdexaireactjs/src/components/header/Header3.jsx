import LanguageDropdown from "./LanguageDropdown";

import { Link } from "react-router-dom";
import MenuMobile from "./MenuMobile";

const Header3 = ({ scroll, isMobileMenu, handleMobileMenu }) => {
  return (
    <header>
      <div
        id="sticky-header"
        className={`menu-area menu-area-three transparent-header ${
          scroll ? "sticky-menu" : ""
        }`}
      >
        <div className="container custom-container">
          <div className="row">
            <div className="col-12">
              <div className="mobile-nav-toggler" onClick={handleMobileMenu}>
                <i className="fas fa-bars" />
              </div>
              <div className="menu-wrap">
                <nav className="menu-nav">
                  <div className="logo">
                    <Link to="/">
                      <img src="/assets/img/logo/logo03.png" alt="Logo" />
                    </Link>
                  </div>
                  <div className="navbar-wrap main-menu d-none d-lg-flex">
                    <ul className="navigation">
                      <li className="active menu-item-has-children tg-mega-menu-has-children">
                        <Link to="#">Home</Link>
                        <div className="tg-mega-menu-wrap black-bg black-bg-two">
                          <div className="row row-cols-1 row-cols-lg-4 row-cols-xl-4">
                            <div className="col">
                              <div className="mega-menu-item">
                                <div className="mega-menu-thumb">
                                  <Link to="/">
                                    <img
                                      src="/assets/img/images/home_img01.jpg"
                                      alt=""
                                    />
                                  </Link>
                                </div>
                                <div className="mega-menu-content">
                                  <h4 className="title">
                                    <Link to="/">01: Ai Content Writer</Link>
                                  </h4>
                                </div>
                              </div>
                            </div>
                            <div className="col">
                              <div className="mega-menu-item">
                                <div className="mega-menu-thumb">
                                  <Link to="/index-2">
                                    <img
                                      src="/assets/img/images/home_img02.jpg"
                                      alt=""
                                    />
                                  </Link>
                                </div>
                                <div className="mega-menu-content">
                                  <h4 className="title">
                                    <Link to="/index-2">
                                      02: Text to Video Ai
                                    </Link>
                                  </h4>
                                </div>
                              </div>
                            </div>
                            <div className="col">
                              <div className="mega-menu-item active">
                                <div className="mega-menu-thumb">
                                  <Link to="/index-3">
                                    <img
                                      src="/assets/img/images/home_img03.jpg"
                                      alt=""
                                    />
                                  </Link>
                                </div>
                                <div className="mega-menu-content">
                                  <h4 className="title">
                                    <Link to="/index-3">
                                      03:Text to Speech Ai
                                    </Link>
                                  </h4>
                                </div>
                              </div>
                            </div>
                            <div className="col">
                              <div className="mega-menu-item">
                                <div className="mega-menu-thumb">
                                  <img
                                    src="/assets/img/images/coming_soon.jpg"
                                    alt=""
                                  />
                                </div>
                                <div className="mega-menu-content">
                                  <h4 className="title">04: Coming Soon</h4>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <Link to="/about">About Us</Link>
                      </li>
                      <li className="menu-item-has-children">
                        <Link to="#">Pages</Link>
                        <ul className="sub-menu">
                          <li>
                            <Link to="/work">How It Work</Link>
                          </li>
                          <li>
                            <Link to="/faq">Faq Page</Link>
                          </li>
                          <li>
                            <Link to="/help">Help Center</Link>
                          </li>
                          <li>
                            <Link to="/job">Job Page</Link>
                          </li>
                          <li>
                            <Link to="/job-details">Job Details</Link>
                          </li>
                          <li>
                            <Link to="/login">Login Page</Link>
                          </li>
                          <li>
                            <Link to="/404">404 Error Page</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <Link to="#">News</Link>
                        <ul className="sub-menu">
                          <li>
                            <Link to="/blog">Our Blog</Link>
                          </li>
                          <li>
                            <Link to="/blog-details">Blog Details</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="/contact">contacts</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="header-action d-none d-md-block">
                    <ul className="list-wrap">
                      <li className="header-lang">
                        <LanguageDropdown />
                      </li>
                      <li className="header-btn">
                        <Link
                          to="/login"
                          className="gradient-btn gradient-btn-four"
                        >
                          sign up
                        </Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
              {/* Mobile Menu  */}
              <div className="mobile-menu">
                <nav className="menu-box">
                  <div className="close-btn" onClick={handleMobileMenu}>
                    <i className="fas fa-times" />
                  </div>
                  <div className="nav-logo" onClick={handleMobileMenu}>
                    <Link to="/">
                      <img src="/assets/img/logo/logo03.png" alt="Logo" />
                    </Link>
                  </div>
                  <div className="menu-outer">
                    <MenuMobile handleCloseMenu={handleMobileMenu} />
                  </div>
                  <div className="social-links">
                    <ul className="clearfix list-wrap">
                      <li>
                        <Link to="#">
                          <i className="fab fa-facebook-f" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fab fa-twitter" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fab fa-instagram" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fab fa-linkedin-in" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fab fa-youtube" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
              <div className="menu-backdrop" onClick={handleMobileMenu} />
              {/* End Mobile Menu */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header3;
