const Features = () => {
  return (
    <div
      className="features-area features-bg"
      data-background="/assets/img/bg/features_bg.png"
    >
      <div className="features-item-wrap">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="features-item">
                <div className="icon">
                  <i className="far fa-check" />
                </div>
                <div className="content">
                  <span>Customizable templates</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="features-item">
                <div className="icon">
                  <i className="far fa-check" />
                </div>
                <div className="content">
                  <span>High-quality video output</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="features-item">
                <div className="icon">
                  <i className="far fa-check" />
                </div>
                <div className="content">
                  <span>Fast processing time</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="features-item">
                <div className="icon">
                  <i className="far fa-check" />
                </div>
                <div className="content">
                  <span>Multi-language support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container custom-container">
        <div className="features-img">
          <img src="/assets/img/images/feature.jpg" alt="" style={{height:"500px",width:"100vw"}}/>
        </div>
      </div>
      <div className="features-shape-wrap">
        <img
          src="/assets/img/images/features_shape01.png"
          alt=""
          data-aos="fade-right"
          data-aos-delay={300}
        />
        <img
          src="/assets/img/images/features_shape02.png"
          alt=""
          className="alltuchtopdown"
        />
        <img src="/assets/img/images/features_shape03.png" alt="" />
      </div>
    </div>
  );
};
export default Features;
