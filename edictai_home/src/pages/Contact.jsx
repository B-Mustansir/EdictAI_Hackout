import Layout from "components/layout/Layout";

const Contact = () => {
  return (
    <Layout
      headerStyle={1}
      footerStyle={1}
      breadcrumbTitle={ <> Get in <span>Touch</span> </> }>
      <div>
        <section className="contact-area pb-140">
          <div className="container">
            <div className="contact-info-wrap">
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6">
                  <div className="contact-info-item">
                    <div className="icon">
                      <i className="fas fa-map-marker-alt" />
                    </div>
                    <div className="content">
                      <h2 className="title">Visit Us Daily</h2>
                      <p>
                        1791 Yorkshire Circle KittyNY <br /> 10002,USA
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="contact-info-item">
                    <div className="icon">
                      <i className="fas fa-phone-volume" />
                    </div>
                    <div className="content">
                      <h2 className="title">Contact Us</h2>
                      <span>+ 1 008-345-6789</span>
                      <span>+1 800-789-4561</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="contact-info-item">
                    <div className="icon">
                      <i className="fas fa-envelope" />
                    </div>
                    <div className="content">
                      <h2 className="title">Email Us</h2>
                      <span>Sotcoxinfo@example.com</span>
                      <span>Webyourinfo@gmail.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="contact-form-wrap">
                  <h2 className="title">
                    Do you have <span>question contact us</span>
                  </h2>
                  <div className="row">
                    <div className="col-lg-5">
                      <div className="responds-wrap">
                        <ul className="list-wrap">
                          <li>
                            <img
                              src="assets/img/images/m_voice_img01.png"
                              alt=""
                            />
                          </li>
                          <li>
                            <img
                              src="assets/img/images/m_voice_img02.png"
                              alt=""
                            />
                          </li>
                          <li>
                            <img
                              src="assets/img/images/m_voice_img03.png"
                              alt=""
                            />
                          </li>
                          <li>
                            <img
                              src="assets/img/images/m_voice_img04.png"
                              alt=""
                            />
                          </li>
                          <li>
                            <img
                              src="assets/img/images/m_voice_img05.png"
                              alt=""
                            />
                          </li>
                        </ul>
                        <p>Responds in 4-8 hours</p>
                      </div>
                    </div>
                    <div className="col-lg-7">
                      <div className="contact-form">
                        <form action="#">
                          <div className="form-grp">
                            <input
                              type="text"
                              id="name"
                              placeholder="Your Name"
                              required
                            />
                          </div>
                          <div className="form-grp">
                            <input
                              type="email"
                              id="email"
                              placeholder="Your email*"
                              required
                            />
                          </div>
                          <div className="form-grp">
                            <input
                              type="text"
                              id="phone"
                              placeholder="Phone"
                              required
                            />
                          </div>
                          <div className="form-grp">
                            <textarea
                              name="message"
                              id="message"
                              placeholder="Please describe what you need*"
                            />
                          </div>
                          <button className="btn" type="submit">
                            submit here
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="contact-shape">
                    <img src="assets/img/images/contact_shape.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* contact-area-end */}
        {/* contact-map */}
        <div className="contact-map">
          <iframe
            src="https://geo-devrel-javascript-samples.web.app/samples/style-array/app/dist/"
            allowFullScreen
            loading="lazy"
          />
        </div>
        {/* contact-map-end */}
      </div>
    </Layout>
  );
};
export default Contact;
