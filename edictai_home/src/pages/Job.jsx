import Layout from "components/layout/Layout";
import { Link } from "react-router-dom";
import { useState } from "react";
const Job = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleOnClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <Layout
      headerStyle={1}
      footerStyle={1}
      breadcrumbTitle={ <> Featured <span>Jobs</span> </> }>
      <section className="job-area pb-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="job-tab-wrap">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" onClick={() => handleOnClick(1)}>
                    <button
                      className={
                        activeIndex == 1 ? "nav-link active" : "nav-link"
                      }
                    >
                      View all
                    </button>
                  </li>
                  <li className="nav-item" onClick={() => handleOnClick(2)}>
                    <button
                      className={
                        activeIndex == 2 ? "nav-link active" : "nav-link"
                      }
                      aria-selected="false"
                    >
                      Development
                    </button>
                  </li>
                  <li className="nav-item" onClick={() => handleOnClick(3)}>
                    <button
                      className={
                        activeIndex == 3 ? "nav-link active" : "nav-link"
                      }
                      aria-selected="false"
                    >
                      Design
                    </button>
                  </li>
                  <li className="nav-item" onClick={() => handleOnClick(4)}>
                    <button
                      className={
                        activeIndex == 4 ? "nav-link active" : "nav-link"
                      }
                      aria-selected="false"
                    >
                      Marketing
                    </button>
                  </li>
                  <li className="nav-item" onClick={() => handleOnClick(5)}>
                    <button
                      className={
                        activeIndex == 5 ? "nav-link active" : "nav-link"
                      }
                      aria-selected="false"
                    >
                      Customer services
                    </button>
                  </li>
                  <li className="nav-item" onClick={() => handleOnClick(6)}>
                    <button
                      className={
                        activeIndex == 6 ? "nav-link active" : "nav-link"
                      }
                      aria-selected="false"
                    >
                      Management
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
                    <div className="job-item-wrap">
                      <div className="job-item">
                        <div className="job-content">
                          <h2 className="title">
                            <Link to="/job-details">
                              Senior Software Engineer
                            </Link>
                          </h2>
                          <p>
                            We're looking for an experienced senior softwar
                            engineer to join our team.
                          </p>
                          <ul className="list-wrap">
                            <li>
                              <Link to="/job-details">
                                <i className="far fa-map-marker-alt" />
                                Remote
                              </Link>
                            </li>
                            <li>
                              <Link to="/job-details">
                                <i className="far fa-clock" />
                                Full-time
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="job-detail-btn">
                          <Link to="/job-details">
                            View job
                            <i className="far fa-arrow-right" />
                          </Link>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="job-content">
                          <h2 className="title">
                            <Link to="/job-details">
                              Customer Success Manager
                            </Link>
                          </h2>
                          <p>
                            We're looking for an experienced senior softwar
                            engineer to join our team.
                          </p>
                          <ul className="list-wrap">
                            <li>
                              <Link to="/job-details">
                                <i className="far fa-map-marker-alt" />
                                Remote
                              </Link>
                            </li>
                            <li>
                              <Link to="/job-details">
                                <i className="far fa-clock" />
                                Full-time
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="job-detail-btn">
                          <Link to="/job-details">
                            View job
                            <i className="far fa-arrow-right" />
                          </Link>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="job-content">
                          <h2 className="title">
                            <Link to="/job-details">Product Designer</Link>
                          </h2>
                          <p>
                            We're looking for a mid-level product designer to
                            join our team.
                          </p>
                          <ul className="list-wrap">
                            <li>
                              <Link to="/job-details">
                                <i className="far fa-map-marker-alt" />
                                Remote
                              </Link>
                            </li>
                            <li>
                              <Link to="/job-details">
                                <i className="far fa-clock" />
                                Full-time
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="job-detail-btn">
                          <Link to="/job-details">
                            View job
                            <i className="far fa-arrow-right" />
                          </Link>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="job-content">
                          <h2 className="title">
                            <Link to="/job-details">Backend Developer</Link>
                          </h2>
                          <p>
                            We're looking for an experienced backend developer
                            to join our team.
                          </p>
                          <ul className="list-wrap">
                            <li>
                              <Link to="/job-details">
                                <i className="far fa-map-marker-alt" />
                                Remote
                              </Link>
                            </li>
                            <li>
                              <Link to="/job-details">
                                <i className="far fa-clock" />
                                Full-time
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="job-detail-btn">
                          <Link to="/job-details">
                            View job
                            <i className="far fa-arrow-right" />
                          </Link>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="job-content">
                          <h2 className="title">
                            <Link to="/job-details">Engineering Manager</Link>
                          </h2>
                          <p>
                            We're looking for a engineering manager to join our
                            team.
                          </p>
                          <ul className="list-wrap">
                            <li>
                              <Link to="/job-details">
                                <i className="far fa-map-marker-alt" />
                                Remote
                              </Link>
                            </li>
                            <li>
                              <Link to="/job-details">
                                <i className="far fa-clock" />
                                Full-time
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="job-detail-btn">
                          <Link to="/job-details">
                            View job
                            <i className="far fa-arrow-right" />
                          </Link>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="job-content">
                          <h2 className="title">
                            <Link to="/job-details">Content Writer</Link>
                          </h2>
                          <p>
                            We're looking for a content writer to join our team.
                          </p>
                          <ul className="list-wrap">
                            <li>
                              <Link to="/job-details">
                                <i className="far fa-map-marker-alt" />
                                Remote
                              </Link>
                            </li>
                            <li>
                              <Link to="/job-details">
                                <i className="far fa-clock" />
                                Full-time
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="job-detail-btn">
                          <Link to="/job-details">
                            View job
                            <i className="far fa-arrow-right" />
                          </Link>
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
                    <div className="job-item-wrap">
                      <div className="job-item">
                        <div className="job-content">
                          <h2 className="title">
                            <Link to="/job-details">Product Designer</Link>
                          </h2>
                          <p>
                            We're looking for a mid-level product designer to
                            join our team.
                          </p>
                          <ul className="list-wrap">
                            <li>
                              <Link to="/job-details">
                                <i className="far fa-map-marker-alt" />
                                Remote
                              </Link>
                            </li>
                            <li>
                              <Link to="/job-details">
                                <i className="far fa-clock" />
                                Full-time
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="job-detail-btn">
                          <Link to="/job-details">
                            View job
                            <i className="far fa-arrow-right" />
                          </Link>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="job-content">
                          <h2 className="title">
                            <Link to="/job-details">Backend Developer</Link>
                          </h2>
                          <p>
                            We're looking for an experienced backend developer
                            to join our team.
                          </p>
                          <ul className="list-wrap">
                            <li>
                              <Link to="/job-details">
                                <i className="far fa-map-marker-alt" />
                                Remote
                              </Link>
                            </li>
                            <li>
                              <Link to="/job-details">
                                <i className="far fa-clock" />
                                Full-time
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="job-detail-btn">
                          <Link to="/job-details">
                            View job
                            <i className="far fa-arrow-right" />
                          </Link>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="job-content">
                          <h2 className="title">
                            <Link to="/job-details">Engineering Manager</Link>
                          </h2>
                          <p>
                            We're looking for a engineering manager to join our
                            team.
                          </p>
                          <ul className="list-wrap">
                            <li>
                              <Link to="/job-details">
                                <i className="far fa-map-marker-alt" />
                                Remote
                              </Link>
                            </li>
                            <li>
                              <Link to="/job-details">
                                <i className="far fa-clock" />
                                Full-time
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="job-detail-btn">
                          <Link to="/job-details">
                            View job
                            <i className="far fa-arrow-right" />
                          </Link>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="job-content">
                          <h2 className="title">
                            <Link to="/job-details">Content Writer</Link>
                          </h2>
                          <p>
                            We're looking for a content writer to join our team.
                          </p>
                          <ul className="list-wrap">
                            <li>
                              <Link to="/job-details">
                                <i className="far fa-map-marker-alt" />
                                Remote
                              </Link>
                            </li>
                            <li>
                              <Link to="/job-details">
                                <i className="far fa-clock" />
                                Full-time
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="job-detail-btn">
                          <Link to="/job-details">
                            View job
                            <i className="far fa-arrow-right" />
                          </Link>
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
                    <div className="job-item-wrap">
                      <div className="job-item">
                        <div className="job-content">
                          <h2 className="title">
                            <Link to="/job-details">
                              Customer Success Manager
                            </Link>
                          </h2>
                          <p>
                            We're looking for an experienced senior softwar
                            engineer to join our team.
                          </p>
                          <ul className="list-wrap">
                            <li>
                              <Link to="/job-details">
                                <i className="far fa-map-marker-alt" />
                                Remote
                              </Link>
                            </li>
                            <li>
                              <Link to="/job-details">
                                <i className="far fa-clock" />
                                Full-time
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="job-detail-btn">
                          <Link to="/job-details">
                            View job
                            <i className="far fa-arrow-right" />
                          </Link>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="job-content">
                          <h2 className="title">
                            <Link to="/job-details">Product Designer</Link>
                          </h2>
                          <p>
                            We're looking for a mid-level product designer to
                            join our team.
                          </p>
                          <ul className="list-wrap">
                            <li>
                              <Link to="/job-details">
                                <i className="far fa-map-marker-alt" />
                                Remote
                              </Link>
                            </li>
                            <li>
                              <Link to="/job-details">
                                <i className="far fa-clock" />
                                Full-time
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="job-detail-btn">
                          <Link to="/job-details">
                            View job
                            <i className="far fa-arrow-right" />
                          </Link>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="job-content">
                          <h2 className="title">
                            <Link to="/job-details">Engineering Manager</Link>
                          </h2>
                          <p>
                            We're looking for a engineering manager to join our
                            team.
                          </p>
                          <ul className="list-wrap">
                            <li>
                              <Link to="/job-details">
                                <i className="far fa-map-marker-alt" />
                                Remote
                              </Link>
                            </li>
                            <li>
                              <Link to="/job-details">
                                <i className="far fa-clock" />
                                Full-time
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="job-detail-btn">
                          <Link to="/job-details">
                            View job
                            <i className="far fa-arrow-right" />
                          </Link>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="job-content">
                          <h2 className="title">
                            <Link to="/job-details">Content Writer</Link>
                          </h2>
                          <p>
                            We're looking for a content writer to join our team.
                          </p>
                          <ul className="list-wrap">
                            <li>
                              <Link to="/job-details">
                                <i className="far fa-map-marker-alt" />
                                Remote
                              </Link>
                            </li>
                            <li>
                              <Link to="/job-details">
                                <i className="far fa-clock" />
                                Full-time
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="job-detail-btn">
                          <Link to="/job-details">
                            View job
                            <i className="far fa-arrow-right" />
                          </Link>
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
                    <div className="job-item-wrap">
                      <div className="job-item">
                        <div className="job-content">
                          <h2 className="title">
                            <Link to="/job-details">
                              Senior Software Engineer
                            </Link>
                          </h2>
                          <p>
                            We're looking for an experienced senior softwar
                            engineer to join our team.
                          </p>
                          <ul className="list-wrap">
                            <li>
                              <Link to="/job-details">
                                <i className="far fa-map-marker-alt" />
                                Remote
                              </Link>
                            </li>
                            <li>
                              <Link to="/job-details">
                                <i className="far fa-clock" />
                                Full-time
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="job-detail-btn">
                          <Link to="/job-details">
                            View job
                            <i className="far fa-arrow-right" />
                          </Link>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="job-content">
                          <h2 className="title">
                            <Link to="/job-details">Product Designer</Link>
                          </h2>
                          <p>
                            We're looking for a mid-level product designer to
                            join our team.
                          </p>
                          <ul className="list-wrap">
                            <li>
                              <Link to="/job-details">
                                <i className="far fa-map-marker-alt" />
                                Remote
                              </Link>
                            </li>
                            <li>
                              <Link to="/job-details">
                                <i className="far fa-clock" />
                                Full-time
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="job-detail-btn">
                          <Link to="/job-details">
                            View job
                            <i className="far fa-arrow-right" />
                          </Link>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="job-content">
                          <h2 className="title">
                            <Link to="/job-details">Backend Developer</Link>
                          </h2>
                          <p>
                            We're looking for an experienced backend developer
                            to join our team.
                          </p>
                          <ul className="list-wrap">
                            <li>
                              <Link to="/job-details">
                                <i className="far fa-map-marker-alt" />
                                Remote
                              </Link>
                            </li>
                            <li>
                              <Link to="/job-details">
                                <i className="far fa-clock" />
                                Full-time
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="job-detail-btn">
                          <Link to="/job-details">
                            View job
                            <i className="far fa-arrow-right" />
                          </Link>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="job-content">
                          <h2 className="title">
                            <Link to="/job-details">Engineering Manager</Link>
                          </h2>
                          <p>
                            We're looking for a engineering manager to join our
                            team.
                          </p>
                          <ul className="list-wrap">
                            <li>
                              <Link to="/job-details">
                                <i className="far fa-map-marker-alt" />
                                Remote
                              </Link>
                            </li>
                            <li>
                              <Link to="/job-details">
                                <i className="far fa-clock" />
                                Full-time
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="job-detail-btn">
                          <Link to="/job-details">
                            View job
                            <i className="far fa-arrow-right" />
                          </Link>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="job-content">
                          <h2 className="title">
                            <Link to="/job-details">Content Writer</Link>
                          </h2>
                          <p>
                            We're looking for a content writer to join our team.
                          </p>
                          <ul className="list-wrap">
                            <li>
                              <Link to="/job-details">
                                <i className="far fa-map-marker-alt" />
                                Remote
                              </Link>
                            </li>
                            <li>
                              <Link to="/job-details">
                                <i className="far fa-clock" />
                                Full-time
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="job-detail-btn">
                          <Link to="/job-details">
                            View job
                            <i className="far fa-arrow-right" />
                          </Link>
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
                    <div className="job-item-wrap">
                      <div className="job-item">
                        <div className="job-content">
                          <h2 className="title">
                            <Link to="/job-details">
                              Senior Software Engineer
                            </Link>
                          </h2>
                          <p>
                            We're looking for an experienced senior softwar
                            engineer to join our team.
                          </p>
                          <ul className="list-wrap">
                            <li>
                              <Link to="/job-details">
                                <i className="far fa-map-marker-alt" />
                                Remote
                              </Link>
                            </li>
                            <li>
                              <Link to="/job-details">
                                <i className="far fa-clock" />
                                Full-time
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="job-detail-btn">
                          <Link to="/job-details">
                            View job
                            <i className="far fa-arrow-right" />
                          </Link>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="job-content">
                          <h2 className="title">
                            <Link to="/job-details">
                              Customer Success Manager
                            </Link>
                          </h2>
                          <p>
                            We're looking for an experienced senior softwar
                            engineer to join our team.
                          </p>
                          <ul className="list-wrap">
                            <li>
                              <Link to="/job-details">
                                <i className="far fa-map-marker-alt" />
                                Remote
                              </Link>
                            </li>
                            <li>
                              <Link to="/job-details">
                                <i className="far fa-clock" />
                                Full-time
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="job-detail-btn">
                          <Link to="/job-details">
                            View job
                            <i className="far fa-arrow-right" />
                          </Link>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="job-content">
                          <h2 className="title">
                            <Link to="/job-details">Product Designer</Link>
                          </h2>
                          <p>
                            We're looking for a mid-level product designer to
                            join our team.
                          </p>
                          <ul className="list-wrap">
                            <li>
                              <Link to="/job-details">
                                <i className="far fa-map-marker-alt" />
                                Remote
                              </Link>
                            </li>
                            <li>
                              <Link to="/job-details">
                                <i className="far fa-clock" />
                                Full-time
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="job-detail-btn">
                          <Link to="/job-details">
                            View job
                            <i className="far fa-arrow-right" />
                          </Link>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="job-content">
                          <h2 className="title">
                            <Link to="/job-details">Content Writer</Link>
                          </h2>
                          <p>
                            We're looking for a content writer to join our team.
                          </p>
                          <ul className="list-wrap">
                            <li>
                              <Link to="/job-details">
                                <i className="far fa-map-marker-alt" />
                                Remote
                              </Link>
                            </li>
                            <li>
                              <Link to="/job-details">
                                <i className="far fa-clock" />
                                Full-time
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="job-detail-btn">
                          <Link to="/job-details">
                            View job
                            <i className="far fa-arrow-right" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      activeIndex == 6
                        ? "tab-pane fade show active"
                        : "tab-pane fade"
                    }
                  >
                    <div className="job-item-wrap">
                      <div className="job-item">
                        <div className="job-content">
                          <h2 className="title">
                            <Link to="/job-details">Product Designer</Link>
                          </h2>
                          <p>
                            We're looking for a mid-level product designer to
                            join our team.
                          </p>
                          <ul className="list-wrap">
                            <li>
                              <Link to="/job-details">
                                <i className="far fa-map-marker-alt" />
                                Remote
                              </Link>
                            </li>
                            <li>
                              <Link to="/job-details">
                                <i className="far fa-clock" />
                                Full-time
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="job-detail-btn">
                          <Link to="/job-details">
                            View job
                            <i className="far fa-arrow-right" />
                          </Link>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="job-content">
                          <h2 className="title">
                            <Link to="/job-details">
                              Senior Software Engineer
                            </Link>
                          </h2>
                          <p>
                            We're looking for an experienced senior softwar
                            engineer to join our team.
                          </p>
                          <ul className="list-wrap">
                            <li>
                              <Link to="/job-details">
                                <i className="far fa-map-marker-alt" />
                                Remote
                              </Link>
                            </li>
                            <li>
                              <Link to="/job-details">
                                <i className="far fa-clock" />
                                Full-time
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="job-detail-btn">
                          <Link to="/job-details">
                            View job
                            <i className="far fa-arrow-right" />
                          </Link>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="job-content">
                          <h2 className="title">
                            <Link to="/job-details">
                              Customer Success Manager
                            </Link>
                          </h2>
                          <p>
                            We're looking for an experienced senior softwar
                            engineer to join our team.
                          </p>
                          <ul className="list-wrap">
                            <li>
                              <Link to="/job-details">
                                <i className="far fa-map-marker-alt" />
                                Remote
                              </Link>
                            </li>
                            <li>
                              <Link to="/job-details">
                                <i className="far fa-clock" />
                                Full-time
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="job-detail-btn">
                          <Link to="/job-details">
                            View job
                            <i className="far fa-arrow-right" />
                          </Link>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="job-content">
                          <h2 className="title">
                            <Link to="/job-details">Backend Developer</Link>
                          </h2>
                          <p>
                            We're looking for an experienced backend developer
                            to join our team.
                          </p>
                          <ul className="list-wrap">
                            <li>
                              <Link to="/job-details">
                                <i className="far fa-map-marker-alt" />
                                Remote
                              </Link>
                            </li>
                            <li>
                              <Link to="/job-details">
                                <i className="far fa-clock" />
                                Full-time
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="job-detail-btn">
                          <Link to="/job-details">
                            View job
                            <i className="far fa-arrow-right" />
                          </Link>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="job-content">
                          <h2 className="title">
                            <Link to="/job-details">Engineering Manager</Link>
                          </h2>
                          <p>
                            We're looking for a engineering manager to join our
                            team.
                          </p>
                          <ul className="list-wrap">
                            <li>
                              <Link to="/job-details">
                                <i className="far fa-map-marker-alt" />
                                Remote
                              </Link>
                            </li>
                            <li>
                              <Link to="/job-details">
                                <i className="far fa-clock" />
                                Full-time
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="job-detail-btn">
                          <Link to="/job-details">
                            View job
                            <i className="far fa-arrow-right" />
                          </Link>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="job-content">
                          <h2 className="title">
                            <Link to="/job-details">Content Writer</Link>
                          </h2>
                          <p>
                            We're looking for a content writer to join our team.
                          </p>
                          <ul className="list-wrap">
                            <li>
                              <Link to="/job-details">
                                <i className="far fa-map-marker-alt" />
                                Remote
                              </Link>
                            </li>
                            <li>
                              <Link to="/job-details">
                                <i className="far fa-clock" />
                                Full-time
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="job-detail-btn">
                          <Link to="/job-details">
                            View job
                            <i className="far fa-arrow-right" />
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
      </section>
    </Layout>
  );
};
export default Job;
