// import BlogPost from "@/components/blog/BlogPost"
import Layout from "components/layout/Layout";
import { Link } from "react-router-dom";
import { useState } from "react";
import BlogList from "components/layout/blog/BlogList";
import BlogPagination from "components/layout/blog/BlogPagination";
export default function Blog() {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleOnClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <Layout
      headerStyle={1}
      footerStyle={1}
      breadcrumbTitle={
        <>
          Blog & <span>Article</span>
        </>
      }
    >
      <section className="blog-area pb-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="blog-tav-wrap">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" onClick={() => handleOnClick(1)}>
                    <button
                      className={
                        activeIndex == 1 ? "nav-link active" : "nav-link"
                      }
                    >
                      Community
                    </button>
                  </li>
                  <li className="nav-item" onClick={() => handleOnClick(2)}>
                    <button
                      className={
                        activeIndex == 2 ? "nav-link active" : "nav-link"
                      }
                    >
                      Ai Technology
                    </button>
                  </li>
                  <li className="nav-item" onClick={() => handleOnClick(3)}>
                    <button
                      className={
                        activeIndex == 3 ? "nav-link active" : "nav-link"
                      }
                    >
                      Developers
                    </button>
                  </li>
                  <li className="nav-item" onClick={() => handleOnClick(4)}>
                    <button
                      className={
                        activeIndex == 4 ? "nav-link active" : "nav-link"
                      }
                    >
                      Announcements
                    </button>
                  </li>
                  <li className="nav-item" onClick={() => handleOnClick(5)}>
                    <button
                      className={
                        activeIndex == 5 ? "nav-link active" : "nav-link"
                      }
                    >
                      video Library
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
                    <div className="blog-item-wrap">
                      <div className="row justify-content-center">
                        <div className="col-12">
                          <div className="blog-item">
                            <div className="blog-content">
                              <span className="date">March 24, 2023</span>
                              <h2 className="title">
                                <Link to="/blog-details">
                                  Will I get caught using ChatGPT for my
                                  homework? Here's how to prevent AI detection
                                </Link>
                              </h2>
                              <p>
                                ChatGPT is Link useful tool that can make your
                                life easier when used appropriately. If you're
                                going to use it, we recommend using it to assist
                                your work instead of relying on it entirely. For
                                Link risk-free alternative,{" "}
                              </p>
                            </div>
                            <div className="blog-img">
                              <Link to="/blog-details">
                                <img
                                  src="assets/img/blog/blog_img01.jpg"
                                  alt=""
                                />
                              </Link>
                            </div>
                          </div>
                        </div>
                        <BlogList/>
                      </div>
                      <BlogPagination/>
                    </div>
                  </div>
                  <div
                    className={
                      activeIndex == 2
                        ? "tab-pane fade show active"
                        : "tab-pane fade"
                    }
                  >
                    <div className="blog-item-wrap">
                      <div className="row justify-content-center">
                        <div className="col-12">
                          <div className="blog-item">
                            <div className="blog-content">
                              <span className="date">March 24, 2023</span>
                              <h2 className="title">
                                <Link to="/blog-details">
                                  Will I get caught using ChatGPT for my
                                  homework? Here's how to prevent AI detection
                                </Link>
                              </h2>
                              <p>
                                ChatGPT is Link useful tool that can make your
                                life easier when used appropriately. If you're
                                going to use it, we recommend using it to assist
                                your work instead of relying on it entirely. For
                                Link risk-free alternative,{" "}
                              </p>
                            </div>
                            <div className="blog-img">
                              <Link to="/blog-details">
                                <img
                                  src="assets/img/blog/blog_img01.jpg"
                                  alt=""
                                />
                              </Link>
                            </div>
                          </div>
                        </div>
                        <BlogList/>
                      </div>
                      <BlogPagination/>
                    </div>
                  </div>
                  <div
                    className={
                      activeIndex == 3
                        ? "tab-pane fade show active"
                        : "tab-pane fade"
                    }
                  >
                    <div className="blog-item-wrap">
                      <div className="row justify-content-center">
                        <div className="col-12">
                          <div className="blog-item">
                            <div className="blog-content">
                              <span className="date">March 24, 2023</span>
                              <h2 className="title">
                                <Link to="/blog-details">
                                  Will I get caught using ChatGPT for my
                                  homework? Here's how to prevent AI detection
                                </Link>
                              </h2>
                              <p>
                                ChatGPT is Link useful tool that can make your
                                life easier when used appropriately. If you're
                                going to use it, we recommend using it to assist
                                your work instead of relying on it entirely. For
                                Link risk-free alternative,{" "}
                              </p>
                            </div>
                            <div className="blog-img">
                              <Link to="/blog-details">
                                <img
                                  src="assets/img/blog/blog_img01.jpg"
                                  alt=""
                                />
                              </Link>
                            </div>
                          </div>
                        </div>
                        <BlogList/>
                        
                      </div>
                      <BlogPagination/>
                    </div>
                  </div>
                  <div
                    className={
                      activeIndex == 4
                        ? "tab-pane fade show active"
                        : "tab-pane fade"
                    }
                  >
                    <div className="blog-item-wrap">
                      <div className="row justify-content-center">
                        <div className="col-12">
                          <div className="blog-item">
                            <div className="blog-content">
                              <span className="date">March 24, 2023</span>
                              <h2 className="title">
                                <Link to="/blog-details">
                                  Will I get caught using ChatGPT for my
                                  homework? Here's how to prevent AI detection
                                </Link>
                              </h2>
                              <p>
                                ChatGPT is Link useful tool that can make your
                                life easier when used appropriately. If you're
                                going to use it, we recommend using it to assist
                                your work instead of relying on it entirely. For
                                Link risk-free alternative,{" "}
                              </p>
                            </div>
                            <div className="blog-img">
                              <Link to="/blog-details">
                                <img
                                  src="assets/img/blog/blog_img01.jpg"
                                  alt=""
                                />
                              </Link>
                            </div>
                          </div>
                        </div>
                        <BlogList/>
                        
                      </div>
                      <BlogPagination/>
                    </div>
                  </div>
                  <div
                    className={
                      activeIndex == 5
                        ? "tab-pane fade show active"
                        : "tab-pane fade"
                    }
                  >
                    <div className="blog-item-wrap">
                      <div className="row justify-content-center">
                        <div className="col-12">
                          <div className="blog-item">
                            <div className="blog-content">
                              <span className="date">March 24, 2023</span>
                              <h2 className="title">
                                <Link to="/blog-details">
                                  Will I get caught using ChatGPT for my
                                  homework? Here's how to prevent AI detection
                                </Link>
                              </h2>
                              <p>
                                ChatGPT is Link useful tool that can make your
                                life easier when used appropriately. If you're
                                going to use it, we recommend using it to assist
                                your work instead of relying on it entirely. For
                                Link risk-free alternative,{" "}
                              </p>
                            </div>
                            <div className="blog-img">
                              <Link to="/blog-details">
                                <img
                                  src="assets/img/blog/blog_img01.jpg"
                                  alt=""
                                />
                              </Link>
                            </div>
                          </div>
                        </div>
                        <BlogList/>
                      </div>
                      <BlogPagination/>
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
}
