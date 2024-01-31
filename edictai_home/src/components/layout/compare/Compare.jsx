const Compare = () => {
  return (
    <section className="compare-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-8">
            <div className="section-title-two text-center mb-70">
              <h2 className="title wow fadeInUp" data-wow-delay=".2s">
                Say goodbye to expensive &nbsp;
                <span>
                  traditional&nbsp;
                  <strong>
                    video creation
                    <svg
                      viewBox="0 0 345 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M344.366 0.00527191C231.51 16.2892 117.803 18.0623 5.82257 7.9456C3.59842 7.74418 0.292572 9.4891 0.0174561 12.1809C-0.260559 14.9221 2.83823 17.0748 5.06818 17.301C117.89 28.79 231.159 22.6085 344.545 1.4609C345.266 1.32606 345.074 -0.0971813 344.366 0.00527191Z"
                        fill="url(#compare)"
                      />
                      <defs>
                        <linearGradient
                          id="compare"
                          x1="376.061"
                          y1="0.000463246"
                          x2="10.2776"
                          y2="101.79"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0.0361276" stopColor="#FAEC60" />
                          <stop offset="0.159651" stopColor="#E5A34B" />
                          <stop offset="0.269837" stopColor="#EE6E4D" />
                          <stop offset="0.42316" stopColor="#F44380" />
                          <stop offset="0.55979" stopColor="#BE3DB3" />
                          <stop offset="0.745252" stopColor="#7746E6" />
                          <stop offset="0.888441" stopColor="#5A71F1" />
                          <stop offset={1} stopColor="#439EFF" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </strong>
                </span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-10">
            <div className="compare-item">
              <div className="compare-thumb">
                <img src="/assets/img/images/compare_img01.jpg" alt="" />
              </div>
              <div className="compare-content">
                <h3 className="title">Traditional video creation</h3>
                <div className="compare-list">
                  <ul className="list-wrap delete-item">
                    <li>Working with expensive 3rd parties</li>
                    <li>Hiring actors, equipment and studios</li>
                    <li>Editing requires complex tools and knowledge</li>
                    <li>Updating videos results in additional time and cost</li>
                    <li>Localizing a video doubles the initial investment</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-10">
            <div className="compare-item">
              <div className="compare-thumb">
                <img src="/assets/img/images/compare_img02.jpg" alt="" />
              </div>
              <div className="compare-content">
                <h3 className="title">DEX.AI video creation</h3>
                <div className="compare-list">
                  <ul className="list-wrap">
                    <li>Affordable video production starting at $30/month</li>
                    <li>Web-based app accessible in your browser</li>
                    <li>Intuitive interface, suitable for beginners</li>
                    <li>Edit or update your video at any time</li>
                    <li>Localise videos in 120+ languages and accents</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="compare-shape-wrap">
        <img
          src="/assets/img/images/compare_shape01.png"
          alt=""
          data-aos="fade-left"
          data-aos-delay={300}
        />
        <img
          src="/assets/img/images/compare_shape02.png"
          alt=""
          data-aos="fade-right"
          data-aos-delay={300}
        />
      </div>
    </section>
  );
};
export default Compare;
