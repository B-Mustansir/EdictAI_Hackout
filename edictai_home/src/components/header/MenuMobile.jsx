import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { Collapse } from "react-collapse";

function MenuMobile({ handleCloseMenu }) {
  // active menu current
  const { pathname } = useLocation();
  const [current, setCurrent] = useState("home1");

  const [toggle, setToggle] = useState({
    key: "",
    status: false,
  });

  useEffect(() => {
    if (pathname) {
      let activePath = pathname.slice(1, pathname.length);
      setCurrent(activePath ? activePath : "home1");
    }
  }, [pathname]);

  const handleCurrent = useCallback(
    (param = "") => {
      setCurrent(param);
    },
    [current]
  );

  const checkActive = (param) => {
    if (param === "pages") {
      switch (current) {
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
      switch (current) {
        case "home":
        case "home1":
        case "index-2":
        case "index-3": {
          return true;
        }
        default:
          return false;
      }
    } else {
      switch (current) {
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

  const handleToggle = (key) => {
    if (toggle.key === key) {
      setToggle({
        status: false,
      });
    } else {
      setToggle({
        status: true,
        key,
      });
    }
    // setCurrent(key);
  };

  return (
    <ul className="navigation">
      <li
        className={`${
          checkActive("home") ? "active" : ""
        } menu-item-has-children tg-mega-menu-has-children`}
      >
        <h5
          onClick={() => {
            handleToggle("home");
          }}
        >
          Home
        </h5>
        <Collapse isOpened={toggle.key === "home"}>
          <div
            className="tg-mega-menu-wrap black-bg"
            style={{ display: `${toggle.key === "home" ? "block" : "none"}` }}
          >
            <div className="row row-cols-1 row-cols-lg-4 row-cols-xl-4">
              <div className="col">
                <div
                  className={`${
                    current === "home1" ? "active" : ""
                  } mega-menu-item`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCurrent("home1");
                    handleCloseMenu();
                  }}
                >
                  <div className="mega-menu-thumb">
                    <Link to="/">
                      <img src="assets/img/images/home_img01.jpg" alt="" />
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
                <div
                  className={`${
                    current === "index-2" ? "active" : ""
                  } mega-menu-item`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCurrent("index-2");
                    handleCloseMenu();
                  }}
                >
                  <div className="mega-menu-thumb">
                    <Link to="/index-2">
                      <img src="assets/img/images/home_img02.jpg" alt="" />
                    </Link>
                  </div>
                  <div className="mega-menu-content">
                    <h4 className="title">
                      <Link to="/index-2">02: Text to Video Ai</Link>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col">
                <div
                  className={`${
                    current === "index-3" ? "active" : ""
                  } mega-menu-item`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCurrent("index-3");
                    handleCloseMenu();
                  }}
                >
                  <div className="mega-menu-thumb">
                    <Link to="/index-3">
                      <img src="assets/img/images/home_img03.jpg" alt="" />
                    </Link>
                  </div>
                  <div className="mega-menu-content">
                    <h4 className="title">
                      <Link to="/index-3">03:Text to Speech Ai</Link>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="mega-menu-item">
                  <div className="mega-menu-thumb">
                    <img src="assets/img/images/coming_soon.jpg" alt="" />
                  </div>
                  <div className="mega-menu-content">
                    <h4 className="title">04: Coming Soon</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Collapse>

        <div
          className="dropdown-btn"
          onClick={() => {
            handleToggle("home");
          }}
        >
          <span className="fas fa-angle-down" />
        </div>
      </li>
      <li
        className={`${
          current === "about" ? "active" : ""
        } menu-item-has-children tg-mega-menu-has-children`}
        onClick={handleCloseMenu}
      >
        <Link to="/about">About Us</Link>
      </li>
      <li
        className={`${
          checkActive("pages") ? "active" : ""
        } menu-item-has-children`}
      >
        <h5
          onClick={() => {
            handleToggle("pages");
          }}
        >
          Pages
        </h5>
        <Collapse isOpened={toggle.key === "pages"}>
          <ul
            className="sub-menu"
            style={{
              display: `${toggle.key === "pages" ? "block" : "none"}`,
            }}
          >
            <li
              className={`${current === "work" ? "active" : ""} menusub-link`}
              onClick={(e) => {
                e.stopPropagation();
                handleCurrent("work");
                handleCloseMenu();
              }}
            >
              <Link to="/work">How It Work</Link>
            </li>
            <li
              className={`${current === "faq" ? "active" : ""} menusub-link`}
              onClick={(e) => {
                e.stopPropagation();
                handleCurrent("faq");
                handleCloseMenu();
              }}
            >
              <Link to="/faq">Faq Page</Link>
            </li>
            <li
              className={`${current === "help" ? "active" : ""} menusub-link`}
              onClick={(e) => {
                e.stopPropagation();
                handleCurrent("help");
                handleCloseMenu();
              }}
            >
              <Link to="/help">Help Center</Link>
            </li>
            <li
              className={`${current === "job" ? "active" : ""} menusub-link`}
              onClick={(e) => {
                e.stopPropagation();
                handleCurrent("job");
                handleCloseMenu();
              }}
            >
              <Link to="/job">Job Page</Link>
            </li>
            <li
              className={`${
                current === "job-details" ? "active" : ""
              } menusub-link`}
              onClick={(e) => {
                e.stopPropagation();
                handleCurrent("job-details");
                handleCloseMenu();
              }}
            >
              <Link to="/job-details">Job Details</Link>
            </li>
            <li
              className={`${current === "login" ? "active" : ""} menusub-link`}
              onClick={(e) => {
                e.stopPropagation();
                handleCurrent("login");
                handleCloseMenu();
              }}
            >
              <Link to="/login">Login Page</Link>
            </li>
            <li
              className={`${current === "404" ? "active" : ""} menusub-link`}
              onClick={(e) => {
                e.stopPropagation();
                handleCurrent("404");
                handleCloseMenu();
              }}
            >
              <Link to="/404">404 Error Page</Link>
            </li>
          </ul>
        </Collapse>

        <div
          className="dropdown-btn"
          onClick={() => {
            handleToggle("pages");
          }}
        >
          <span className="fas fa-angle-down" />
        </div>
      </li>
      <li
        className={`${
          checkActive("news") ? "active" : ""
        } menu-item-has-children`}
      >
        <h5
          onClick={() => {
            handleToggle("news");
          }}
        >
          News
        </h5>
        <Collapse isOpened={toggle.key === "news"}>
          <ul
            className="sub-menu"
            style={{
              display: `${toggle.key === "news" ? "block" : "none"}`,
            }}
          >
            <li
              className={`${current === "blog" ? "active" : ""} menusub-link`}
              onClick={(e) => {
                e.stopPropagation();
                handleCurrent("blog");
                handleCloseMenu();
              }}
            >
              <Link to="/blog">Our Blog</Link>
            </li>
            <li
              className={`${
                current === "blog-details" ? "active" : ""
              } menusub-link`}
              onClick={(e) => {
                e.stopPropagation();
                handleCurrent("blog-details");
                handleCloseMenu();
              }}
            >
              <Link to="/blog-details">Blog Details</Link>
            </li>
          </ul>
        </Collapse>

        <div
          className="dropdown-btn"
          onClick={() => {
            handleToggle("news");
          }}
        >
          <span className="fas fa-angle-down" />
        </div>
      </li>
      <li
        className={`${
          current === "contact" ? "active" : ""
        } menu-item-has-children tg-mega-menu-has-children`}
        onClick={handleCloseMenu}
      >
        <Link to="/contact">contacts</Link>
      </li>
    </ul>
  );
}

export default MenuMobile;
