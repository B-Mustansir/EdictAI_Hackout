import Layout from "components/layout/Layout";
import { Link } from "react-router-dom";
import CountUp, { useCountUp } from "react-countup";

export default function About() {
  return (
    <Layout
      headerStyle={1}
      footerStyle={1}
      breadcrumbTitle={
        <>
          About <span>Dex.ai</span>
        </>
      }
    >
      <div>
        {/* about-area */}
        <section className="inner-about-area pb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="inner-about-img">
                  <img src="assets/img/images/inner_about_img.png" alt="" />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="inner-about-content">
                  <h2 className="title wow fadeInUp" data-wow-delay=".2s">
                    Content Creation with AI
                  </h2>
                  <div className="content-bottom">
                    <p>
                      At Dex.ai , we use artificial intelligence to generate
                      high-quality content at scale. Our platform analyzes vast
                      amounts of data using natural language processing and
                      machine learning algorithms to create accurate, compelling
                      content. Whether you need product descriptions, social
                      media posts, or blog articles, our AI-powered solutions
                      save time, reduce costs, and deliver measurable results.
                      Let us show you how our technology can transform your
                      content strategy and help you achieve your business goals.
                    </p>
                    <ul className="list-wrap">
                      <li>
                        <i className="far fa-check" />
                        Automated Content Creation
                      </li>
                      <li>
                        <i className="far fa-check" />
                        We Focus on Quantity Well Organised Content.
                      </li>
                      <li>
                        <i className="far fa-check" />
                        Multilingual Support
                      </li>
                      <li>
                        <i className="far fa-check" />
                        Professional Team with 10+ Experience.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* about-area-end */}
        {/* team-area */}
        <section className="team-area pb-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title-four text-center mb-60">
                  <h2 className="title wow fadeInUp" data-wow-delay=".2s">
                    Core Members
                  </h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-6">
                <div className="team-item">
                  <div className="team-thumb">
                    <img src="assets/img/team/team_img01.jpg" alt="" />
                    <div className="team-hidden-content">
                      <h4 className="title">Jack O'Halloran</h4>
                      <p>
                        A Co-Founder is someone who helps establish a company
                        from the ground up, often sharing the vision and
                        responsibilities of the business with one or more other
                        individuals. Co-Founders bring unique skills and
                        expertise to the table, which can complement each other
                        and drive the company forward.
                      </p>
                    </div>
                  </div>
                  <div className="team-content">
                    <div className="team-info">
                      <h4 className="title">Jack O'Halloran</h4>
                      <span>Co-Founder / CEO</span>
                    </div>
                    <div className="team-social">
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
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="team-item">
                  <div className="team-thumb">
                    <img src="assets/img/team/team_img02.jpg" alt="" />
                    <div className="team-hidden-content">
                      <h4 className="title">Alex Sheverdin</h4>
                      <p>
                        A Co-Founder is someone who helps establish a company
                        from the ground up, often sharing the vision and
                        responsibilities of the business with one or more other
                        individuals. Co-Founders bring unique skills and
                        expertise to the table, which can complement each other
                        and drive the company forward.
                      </p>
                    </div>
                  </div>
                  <div className="team-content">
                    <div className="team-info">
                      <h4 className="title">Alex Sheverdin</h4>
                      <span>Co-Founder / CEO</span>
                    </div>
                    <div className="team-social">
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
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="team-item-two">
                  <div className="team-thumb-two">
                    <img src="assets/img/team/team_img03.jpg" alt="" />
                  </div>
                  <div className="team-content-two">
                    <div className="team-info">
                      <h4 className="title">Anastasia Yatsun</h4>
                      <span>Software Engineer</span>
                    </div>
                    <div className="team-social">
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
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="team-item-two">
                  <div className="team-thumb-two">
                    <img src="assets/img/team/team_img04.jpg" alt="" />
                  </div>
                  <div className="team-content-two">
                    <div className="team-info">
                      <h4 className="title">Ben Miller</h4>
                      <span>UI/UX Designer</span>
                    </div>
                    <div className="team-social">
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
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="team-item-two">
                  <div className="team-thumb-two">
                    <img src="assets/img/team/team_img05.jpg" alt="" />
                  </div>
                  <div className="team-content-two">
                    <div className="team-info">
                      <h4 className="title">Rob Lubow</h4>
                      <span>QA Engineer</span>
                    </div>
                    <div className="team-social">
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
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* team-area-end */}
        {/* counter-area */}
        <section className="counter-area-three pb-160">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="counter-content">
                  <div className="section-title-four mb-40">
                    <h2 className="title wow fadeInLeft" data-wow-delay=".2s">
                      AI can write content just like humans can
                    </h2>
                  </div>
                  <p>
                    By using Natural Language Processing (NLP) techniques, AI
                    can understand the context, tone, and intent of a given
                    piece of content, and produce written output that's relevant
                    and engaging. This technology is especially useful for
                    generating large volumes of content quickly and accurately,
                    which can save businesses a significant amount of time and
                    resources.
                  </p>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="counter-item-wrap-three">
                  <ul className="list-wrap">
                    <li>
                      <div className="counter-item-three">
                        <h2 className="count">
                          <CountUp
                            end={1}
                            suffix="M"
                            duration={5}
                            enableScrollSpy
                            scrollSpyDelay={5}
                          />
                        </h2>
                        <p>Our Top Clients</p>
                      </div>
                    </li>
                    <li>
                      <div className="counter-item-three">
                        <h2 className="count">
                          <CountUp
                            end={50}
                            suffix="M"
                            duration={5}
                            enableScrollSpy
                            scrollSpyDelay={5}
                          />
                        </h2>
                        <p>Social Media Platforms</p>
                      </div>
                    </li>
                    <li>
                      <div className="counter-item-three">
                        <h2 className="count">
                          <CountUp
                            end={4}
                            suffix="K"
                            duration={5}
                            enableScrollSpy
                            scrollSpyDelay={5}
                          />
                        </h2>
                        <p>Powerful AI Tools</p>
                      </div>
                    </li>
                    <li>
                      <div className="counter-item-three">
                        <h2 className="count">
                          <CountUp
                            end={10}
                            suffix="M"
                            duration={5}
                            enableScrollSpy
                            scrollSpyDelay={5}
                          />
                        </h2>
                        <p>Our Readers</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* counter-area-end */}
      </div>
    </Layout>
  );
}
