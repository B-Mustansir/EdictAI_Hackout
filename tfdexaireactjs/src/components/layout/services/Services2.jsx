import { Link } from "react-router-dom";

const Services2 = () => {
  return (
    <section className="services-area-two pt-140 pb-125">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-9 col-lg-10">
            <div
              className="section-title-three text-center mb-70 title-animation wow fadeInUp"
              data-wow-delay=".2s"
            >
              <h2 className="title">
                Engage your Audience With our <span>Voice Solutions</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="services-item-two">
              <div className="services-item-overlay" />
              <div className="services-icon-two">
                <img src="/assets/img/icon/services_icon01.svg" alt="" />
              </div>
              <div className="services-content-two">
                <h2 className="title">
                  <Link to="/work">Text to speech for YouTube videos</Link>
                </h2>
                <p>Unlike anything you've unique..</p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="services-item-two">
              <div className="services-item-overlay" />
              <div className="services-icon-two">
                <img src="/assets/img/icon/services_icon02.svg" alt="" />
              </div>
              <div className="services-content-two">
                <h2 className="title">
                  <Link to="/work">Text-to-speech for social shares</Link>
                </h2>
                <p>Unlike anything you've unique..</p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="services-item-two">
              <div className="services-item-overlay" />
              <div className="services-icon-two">
                <img src="/assets/img/icon/services_icon03.svg" alt="" />
              </div>
              <div className="services-content-two">
                <h2 className="title">
                  <Link to="/work">Text to speech for education</Link>
                </h2>
                <p>Unlike anything you've unique..</p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="services-item-two">
              <div className="services-item-overlay" />
              <div className="services-icon-two">
                <img src="/assets/img/icon/services_icon04.svg" alt="" />
              </div>
              <div className="services-content-two">
                <h2 className="title">
                  <Link to="/work">Text to speech for Web Applications</Link>
                </h2>
                <p>Unlike anything you've unique..</p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="services-item-two">
              <div className="services-item-overlay" />
              <div className="services-icon-two">
                <img src="/assets/img/icon/services_icon05.svg" alt="" />
              </div>
              <div className="services-content-two">
                <h2 className="title">
                  <Link to="/work">
                    Text to speech for voice API for Developers
                  </Link>
                </h2>
                <p>Unlike anything you've unique..</p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="services-item-two">
              <div className="services-item-overlay" />
              <div className="services-icon-two">
                <img src="/assets/img/icon/services_icon06.svg" alt="" />
              </div>
              <div className="services-content-two">
                <h2 className="title">
                  <Link to="/work">Text to speech for Book and Document</Link>
                </h2>
                <p>Unlike anything you've unique..</p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="services-item-two">
              <div className="services-item-overlay" />
              <div className="services-icon-two">
                <img src="/assets/img/icon/services_icon07.svg" alt="" />
              </div>
              <div className="services-content-two">
                <h2 className="title">
                  <Link to="/work">Text to speech for IVR and Switchboard</Link>
                </h2>
                <p>Unlike anything you've unique..</p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="services-item-two">
              <div className="services-item-overlay" />
              <div className="services-icon-two">
                <img src="/assets/img/icon/services_icon08.svg" alt="" />
              </div>
              <div className="services-content-two">
                <h2 className="title">
                  <Link to="/work">Text to speech for Announcements</Link>
                </h2>
                <p>Unlike anything you've unique..</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="services-shape-two">
        <img
          src="/assets/img/images/h3_services_shape.png"
          alt=""
          className="wow fadeInRight"
          data-wow-delay=".2s"
        />
      </div>
    </section>
  );
};
export default Services2;
