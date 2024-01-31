import { Link } from "react-router-dom";
import { useState } from "react";
import MenuMobile from "./MenuMobile";

const Header4 = () => {
  const [isMobileMenu, setMobileMenu] = useState(false);
  const handleMobileMenu = () => {
    setMobileMenu(!isMobileMenu);
    !isMobileMenu
      ? document.body.classList.add("mobile-menu-visible")
      : document.body.classList.remove("mobile-menu-visible");
  };
  return (
    <header>
      <div
        id="sticky-header"
        className="menu-area menu-area-four transparent-header"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="mobile-nav-toggler" onClick={handleMobileMenu}>
                <i className="fas fa-bars" />
              </div>
              <div className="menu-wrap">
                <nav className="menu-nav">
                  <div className="logo">
                    <Link to="/">
                      <img src="assets/img/logo/logo.png" alt="Logo" />
                    </Link>
                  </div>
                  <div className="navbar-wrap main-menu d-none"></div>
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
                      <img src="assets/img/logo/logo.png" alt="Logo" />
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
export default Header4;
