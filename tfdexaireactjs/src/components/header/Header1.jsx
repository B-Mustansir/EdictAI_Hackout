import LanguageDropdown from "./LanguageDropdown";
import { Link, useLocation } from "react-router-dom";
import MenuMobile from "./MenuMobile";
import { useCallback, useEffect, useState } from "react";

const Header1 = ({ scroll, isMobileMenu, handleMobileMenu }) => {
  const { pathname } = useLocation();
  const [isActive, setIsActive] = useState("home1");

  useEffect(() => {
    if (pathname) {
      let activePath = pathname.slice(1, pathname.length);
      setIsActive(activePath ? activePath : "home1");
    }
  }, [pathname]);

  const checkActive = (param) => {
    if (param === "pages") {
      switch (isActive) {
        case "pages":
        case "work":
        case "faq":
        case "job-details":
        case "help":
        case "login":
        case "404":
        case "job": {
          return true;
        }
        default:
          return false;
      }
    } else if (param === "home") {
      switch (isActive) {
        case "home1": {
          return true;
        }
        default:
          return false;
      }
    } else {
      switch (isActive) {
        case "news":
        case "blog":
        case "blog-details": {
          return true;
        }
        default:
          return false;
      }
    }
  };

  const handleActive = useCallback(
    (param = "") => {
      setIsActive(param);
    },
    [isActive]
  );

  return (
    <header>
      <div
        id="sticky-header"
        className={`menu-area transparent-header ${
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
                      <img src="/assets/img/logo/logo.png" alt="Logo" />
                    </Link>
                  </div>
                  <div className="navbar-wrap main-menu d-none d-lg-flex">
                    <ul className="navigation">
                      <li
                        className={`${
                          checkActive("home") ? "active" : ""
                        } menu-item-has-children tg-mega-menu-has-children`}
                        onClick={() => handleActive("home")}
                      >
                        <Link to="#">Home</Link>
                        <div className="tg-mega-menu-wrap black-bg">
                          <div className="row row-cols-1 row-cols-lg-4 row-cols-xl-4">
                            <div className="col">
                              <div
                                className={`${
                                  isActive === "home1" ? "active" : ""
                                } mega-menu-item`}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleActive("home1");
                                }}
                              >
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
                              <div className="mega-menu-item">
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
                      <li
                        className={`${isActive === "about" ? "active" : ""} `}
                        onClick={() => handleActive("about")}
                      >
                        <Link to="/about">About Us</Link>
                      </li>
                      <li
                        className={`${
                          checkActive("pages") ? "active" : ""
                        } menu-item-has-children`}
                        onClick={() => handleActive("page")}
                      >
                        <Link to="#">Pages</Link>
                        <ul className="sub-menu">
                          <li
                            className={`${isActive === "work" ? "active" : ""}`}
                            onClick={() => handleActive("work")}
                          >
                            <Link to="/work">How It Work</Link>
                          </li>
                          <li
                            className={`${isActive === "faq" ? "active" : ""}`}
                            onClick={() => handleActive("faq")}
                          >
                            <Link to="/faq">Faq Page</Link>
                          </li>
                          <li
                            className={`${isActive === "help" ? "active" : ""}`}
                            onClick={() => handleActive("help")}
                          >
                            <Link to="/help">Help Center</Link>
                          </li>
                          <li
                            className={`${isActive === "job" ? "active" : ""}`}
                            onClick={() => handleActive("job")}
                          >
                            <Link to="/job">Job Page</Link>
                          </li>
                          <li
                            className={`${
                              isActive === "job-details" ? "active" : ""
                            }`}
                            onClick={() => handleActive("job-details")}
                          >
                            <Link to="/job-details">Job Details</Link>
                          </li>
                          <li
                            className={`${
                              isActive === "login" ? "active" : ""
                            }`}
                            onClick={() => handleActive("login")}
                          >
                            <Link to="/login">Login Page</Link>
                          </li>
                          <li
                            className={`${isActive === "404" ? "active" : ""}`}
                            onClick={() => handleActive("404")}
                          >
                            <Link to="/404">404 Error Page</Link>
                          </li>
                        </ul>
                      </li>
                      <li
                        className={`${
                          checkActive("news") ? "active" : ""
                        } menu-item-has-children`}
                        onClick={() => handleActive("news")}
                      >
                        <Link to="#">News</Link>
                        <ul className="sub-menu">
                          <li
                            className={`${isActive === "blog" ? "active" : ""}`}
                            onClick={() => handleActive("blog")}
                          >
                            <Link to="/blog">Our Blog</Link>
                          </li>
                          <li
                            className={`${
                              isActive === "blog-details" ? "active" : ""
                            }`}
                            onClick={() => handleActive("blog-details")}
                          >
                            <Link to="/blog-details">Blog Details</Link>
                          </li>
                        </ul>
                      </li>
                      <li
                        className={`${isActive === "contact" ? "active" : ""}`}
                        onClick={() => handleActive("contact")}
                      >
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
                        <Link to="/login" className="btn">
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
                      <img src="/assets/img/logo/logo.png" alt="Logo" />
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
export default Header1;
