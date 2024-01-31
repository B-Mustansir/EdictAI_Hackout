import Layout from "components/layout/Layout";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Collapse } from "react-collapse";

const FAQ_ARR = [
  {
    title: "Can AI content writing replace human writers?",
    key: 1,
    content:
      "AI content writing works by using machine learning algorithms to analyze vast amounts of data, including text, images, and videos, to generate unique and engaging content. The software learns from previous content and can mimic the style and tone of human writers.",
  },
  {
    title: "How does AI content writing work?",
    key: 2,
    content:
      "AI content writing works by using machine learning algorithms to analyze vast amounts of data, including text, images, and videos, to generate unique and engaging content. The software learns from previous content and can mimic the style and tone of human writers.",
  },
  {
    title: "What is AI content writing?",
    key: 3,
    content:
      "AI content writing works by using machine learning algorithms to analyze vast amounts of data, including text, images, and videos, to generate unique and engaging content. The software learns from previous content and can mimic the style and tone of human writers.",
  },
  {
    title: "What are the benefits of using AI content writing?",
    key: 4,
    content:
      "AI content writing works by using machine learning algorithms to analyze vast amounts of data, including text, images, and videos, to generate unique and engaging content. The software learns from previous content and can mimic the style and tone of human writers.",
  },
  {
    title: "Is AI content writing ethical?",
    key: 5,
    content:
      "AI content writing works by using machine learning algorithms to analyze vast amounts of data, including text, images, and videos, to generate unique and engaging content. The software learns from previous content and can mimic the style and tone of human writers.",
  },
];

export default function Help() {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleOnClick = (index) => {
    setActiveIndex(index);
  };
  const [isActive, setIsActive] = useState({
    status: false,
    key: 2,
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };
  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={1}
        breadcrumbTitle={
          <>
            👋 Hello, How can <span>we help?</span>
          </>
        }
      >
        <div>
          {/* faq-area */}
          <section className="faq-area-two pb-130">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-10">
                  <div className="problem-search-wrap text-center">
                    <form action="#">
                      <div className="form-grp">
                        <label htmlFor="search">
                          <i className="far fa-search" />
                        </label>
                        <input
                          type="text"
                          id="search"
                          placeholder="Write a question or problem"
                        />
                        <button type="submit" className="gradient-btn">
                          search
                        </button>
                      </div>
                      <span>
                        Or choose a category to quickly find the help you need
                      </span>
                    </form>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="faq-tab-wrap">
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                      <li className="nav-item" onClick={() => handleOnClick(1)}>
                        <button
                          className={
                            activeIndex == 1 ? "nav-link active" : "nav-link"
                          }
                        >
                          <img src="assets/img/icon/faq_icon01.svg" alt="" />
                          Getting Started
                        </button>
                      </li>
                      <li className="nav-item" onClick={() => handleOnClick(2)}>
                        <button
                          className={
                            activeIndex == 2 ? "nav-link active" : "nav-link"
                          }
                        >
                          <img src="assets/img/icon/faq_icon02.svg" alt="" />
                          pricing Plans
                        </button>
                      </li>
                      <li className="nav-item" onClick={() => handleOnClick(3)}>
                        <button
                          className={
                            activeIndex == 3 ? "nav-link active" : "nav-link"
                          }
                        >
                          <img src="assets/img/icon/faq_icon03.svg" alt="" />
                          Usage Guides
                        </button>
                      </li>
                      <li className="nav-item" onClick={() => handleOnClick(4)}>
                        <button
                          className={
                            activeIndex == 4 ? "nav-link active" : "nav-link"
                          }
                        >
                          <img src="assets/img/icon/faq_icon04.svg" alt="" />
                          Sales Question
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
                        <div className="faq-wrap">
                          <div className="accordion">
                            {FAQ_ARR.map((faq) => (
                              <div
                                className={
                                  isActive.key === faq?.key
                                    ? "accordion-item active"
                                    : "accordion-item"
                                }
                                key={faq?.key}
                              >
                                <h2 className="accordion-header">
                                  <button
                                    className={
                                      isActive.key === faq?.key
                                        ? "accordion-button"
                                        : "accordion-button collapsed"
                                    }
                                    type="button"
                                    onClick={() => handleToggle(faq?.key)}
                                  >
                                    {faq?.title}
                                  </button>
                                </h2>
                                <Collapse isOpened={isActive.key === faq?.key}>
                                  <div
                                    className={
                                      isActive.key === faq?.key
                                        ? "accordion-collapse collapse show"
                                        : "accordion-collapse collapse"
                                    }
                                  >
                                    <div className="accordion-body">
                                      <p>{faq?.content}</p>
                                    </div>
                                  </div>
                                </Collapse>
                              </div>
                            ))}
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
                        <div className="faq-wrap">
                          <div className="accordion">
                            {FAQ_ARR.map((faq) => (
                              <div
                                className={
                                  isActive.key === faq?.key
                                    ? "accordion-item active"
                                    : "accordion-item"
                                }
                                key={faq?.key}
                              >
                                <h2 className="accordion-header">
                                  <button
                                    className={
                                      isActive.key === faq?.key
                                        ? "accordion-button"
                                        : "accordion-button collapsed"
                                    }
                                    type="button"
                                    onClick={() => handleToggle(faq?.key)}
                                  >
                                    {faq?.title}
                                  </button>
                                </h2>
                                <Collapse isOpened={isActive.key === faq?.key}>
                                  <div
                                    className={
                                      isActive.key === faq?.key
                                        ? "accordion-collapse collapse show"
                                        : "accordion-collapse collapse"
                                    }
                                  >
                                    <div className="accordion-body">
                                      <p>{faq?.content}</p>
                                    </div>
                                  </div>
                                </Collapse>
                              </div>
                            ))}
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
                        <div className="faq-wrap">
                          <div className="accordion">
                            {FAQ_ARR.map((faq) => (
                              <div
                                className={
                                  isActive.key === faq?.key
                                    ? "accordion-item active"
                                    : "accordion-item"
                                }
                                key={faq?.key}
                              >
                                <h2 className="accordion-header">
                                  <button
                                    className={
                                      isActive.key === faq?.key
                                        ? "accordion-button"
                                        : "accordion-button collapsed"
                                    }
                                    type="button"
                                    onClick={() => handleToggle(faq?.key)}
                                  >
                                    {faq?.title}
                                  </button>
                                </h2>
                                <Collapse isOpened={isActive.key === faq?.key}>
                                  <div
                                    className={
                                      isActive.key === faq?.key
                                        ? "accordion-collapse collapse show"
                                        : "accordion-collapse collapse"
                                    }
                                  >
                                    <div className="accordion-body">
                                      <p>{faq?.content}</p>
                                    </div>
                                  </div>
                                </Collapse>
                              </div>
                            ))}
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
                        <div className="faq-wrap">
                          <div className="accordion">
                            {FAQ_ARR.map((faq) => (
                              <div
                                className={
                                  isActive.key === faq?.key
                                    ? "accordion-item active"
                                    : "accordion-item"
                                }
                                key={faq?.key}
                              >
                                <h2 className="accordion-header">
                                  <button
                                    className={
                                      isActive.key === faq?.key
                                        ? "accordion-button"
                                        : "accordion-button collapsed"
                                    }
                                    type="button"
                                    onClick={() => handleToggle(faq?.key)}
                                  >
                                    {faq?.title}
                                  </button>
                                </h2>
                                <Collapse isOpened={isActive.key === faq?.key}>
                                  <div
                                    className={
                                      isActive.key === faq?.key
                                        ? "accordion-collapse collapse show"
                                        : "accordion-collapse collapse"
                                    }
                                  >
                                    <div className="accordion-body">
                                      <p>{faq?.content}</p>
                                    </div>
                                  </div>
                                </Collapse>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* faq-area-end */}
          {/* help-area */}
          <section className="help-area pb-110">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-6 col-lg-8">
                  <div className="help-title text-center mb-75">
                    <h2 className="title">
                      You still have a <span>question?</span>
                    </h2>
                    <p>
                      If you cannot find the answer to your question in our FAQ,
                      you can always contact us. We will answer you shortly!
                    </p>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-xl-9 col-lg-10">
                  <div className="help-center-wrap">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="help-center-item">
                          <div className="icon">
                            <img src="assets/img/icon/help_icon01.svg" alt="" />
                          </div>
                          <div className="content">
                            <Link to="tel:0123456789">+(1) 123 656 7865</Link>
                            <p>We are always happy to help.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="help-center-item">
                          <div className="icon">
                            <img src="assets/img/icon/help_icon02.svg" alt="" />
                          </div>
                          <div className="content">
                            <Link to="mailto:dex.aiinfotive@.com">
                              dex.ai infotive@.com
                            </Link>
                            <p>The best way to get answer faster.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* help-area-end */}
        </div>
      </Layout>
    </>
  );
}
