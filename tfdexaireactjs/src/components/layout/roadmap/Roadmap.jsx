const Roadmap = () => {
  return (
    <section className="roadmap-area pt-140 pb-130">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center mb-70">
              <h2
                className="title title-animation wow fadeInUp"
                data-wow-delay=".2s"
              >
                How it <span>works</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-12 col-md-9">
            <div className="roadmap-timeline-wrap">
              <div
                className="roadmap-line"
                data-background="assets/img/brand/Line.svg"
              />
              <ul className="list-wrap">
                <li>
                  <div className="roadmap-item">
                    <div
                      className="roadmap-img wow fadeInLeft"
                      data-wow-delay=".2s"
                    >
                      <img src="/assets/img/images/roadmap_img01.jpg" alt="" />
                      <span className="number">01</span>
                    </div>
                    <div
                      className="roadmap-content wow fadeInRight"
                      data-wow-delay=".2s"
                    >
                      <h4 className="title">Submitting the News Article Link</h4>
                      <p>
                      Paste the link to the news article you want to be transformed into an AI-generated news video into the designated field. Ensure that the link is valid and points directly to the article you want to use.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="roadmap-item">
                    <div
                      className="roadmap-img wow fadeInRight"
                      data-wow-delay=".2s"
                    >
                      <img src="/assets/img/images/video_eiting_pro.jpg" alt="" />
                      <span className="number">02</span>
                    </div>
                    <div
                      className="roadmap-content wow fadeInLeft"
                      data-wow-delay=".2s"
                    >
                      <h4 className="title">Processing and AI Video Generation</h4>
                      <p>
                      Once your article link is submitted, our AI system will begin processing the information. This may take some time depending on the complexity of the article and the current demand.

You will be notified via email or on the website when the processing is complete and your AI-generated news video is ready for preview.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="roadmap-item st">
                    <div
                      className="roadmap-img wow fadeInLeft"
                      data-wow-delay=".2s"
                    >
                      <img src="/assets/img/images/video_ready.jpg" alt="" />
                      <span className="number">03</span>
                    </div>
                    <div
                      className="roadmap-content wow fadeInRight"
                      data-wow-delay=".2s"
                    >
                      <h4 className="title">Let's the AI do its magic and get the final output</h4>
                      <p>
                        Our highly trained AI understands your details and
                        generate unique and human-like video in minutes.Congratulations! Your AI-generated news video is now ready for use. Share it on social media, embed it on your website, or use it as needed.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Roadmap;
