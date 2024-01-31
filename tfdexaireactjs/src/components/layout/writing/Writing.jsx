import { Link } from "react-router-dom";

const Writing = () => {
  return (
    <section className="writing-area pb-130">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center mb-80">
              <h2
                className="title title-animation wow fadeInUp"
                data-wow-delay=".2s"
              >
                Start writing <span>10x faster</span> with AI
              </h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-4 col-lg-6 col-md-6 col-sm-9">
            <div className="writing-item">
              <div className="writing-shape">
                <svg
                  viewBox="0 0 417 207"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  preserveAspectRatio="none"
                >
                  <g opacity="0.1">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 96C0 82 7.5 73 26.2229 76.38C43.8225 79.5573 73.5 62.5 65 34C58.0931 10.8417 68.4854 0.0152226 90.4536 0H387C403.569 0 417 13.4315 417 30V177C417 193.569 403.569 207 387 207H30C13.4315 207 0 193.569 0 177V96Z"
                      fill="currentcolor"
                    />
                    <path
                      d="M26.2229 76.38L26.0452 77.3641L26.0452 77.3641L26.2229 76.38ZM65 34L64.0417 34.2858L65 34ZM90.4536 0L90.4536 -1L90.4529 -1L90.4536 0ZM26.4005 75.3959C16.8849 73.6781 9.9765 75.0628 5.4433 78.9101C0.915622 82.7526 -1 88.8465 -1 96H1C1 89.1535 2.83438 83.7474 6.73743 80.4349C10.6349 77.1272 16.838 75.7019 26.0452 77.3641L26.4005 75.3959ZM64.0417 34.2858C68.1618 48.1001 63.0533 59.0984 54.7432 66.3139C46.3758 73.5791 34.8545 76.9221 26.4005 75.3959L26.0452 77.3641C35.1909 79.0152 47.3082 75.4182 56.0544 67.8241C64.858 60.1802 70.3382 48.3998 65.9583 33.7142L64.0417 34.2858ZM90.4529 -1C79.3517 -0.992307 70.8799 1.74143 66.1176 7.69682C61.3388 13.673 60.5475 22.57 64.0417 34.2858L65.9583 33.7142C62.5456 22.2717 63.4971 14.1764 67.6796 8.94589C71.8788 3.69466 79.5873 1.00753 90.4543 1L90.4529 -1ZM90.4536 1H387V-1H90.4536V1ZM387 1C403.016 1 416 13.9837 416 30H418C418 12.8792 404.121 -1 387 -1V1ZM416 30V177H418V30H416ZM416 177C416 193.016 403.016 206 387 206V208C404.121 208 418 194.121 418 177H416ZM387 206H30V208H387V206ZM30 206C13.9837 206 1 193.016 1 177H-1C-1 194.121 12.8792 208 30 208V206ZM1 177V96H-1V177H1Z"
                      fill="currentcolor"
                    />
                  </g>
                </svg>
              </div>
              <div className="writing-icon">
                <i className="far fa-brain" />
              </div>
              <div className="writing-content">
                <h4 className="title">The GPT-3.5 language</h4>
                <p>
                  Unlike anything you've experienced - unique and unimaginable
                  capabilities.
                </p>
                <Link to="/work" className="link-btn">
                  Try Gpt-3.5 language
                  <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 col-sm-9">
            <div className="writing-item">
              <div className="writing-shape">
                <svg
                  viewBox="0 0 417 207"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  preserveAspectRatio="none"
                >
                  <g opacity="0.1">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 96C0 82 7.5 73 26.2229 76.38C43.8225 79.5573 73.5 62.5 65 34C58.0931 10.8417 68.4854 0.0152226 90.4536 0H387C403.569 0 417 13.4315 417 30V177C417 193.569 403.569 207 387 207H30C13.4315 207 0 193.569 0 177V96Z"
                      fill="currentcolor"
                    />
                    <path
                      d="M26.2229 76.38L26.0452 77.3641L26.0452 77.3641L26.2229 76.38ZM65 34L64.0417 34.2858L65 34ZM90.4536 0L90.4536 -1L90.4529 -1L90.4536 0ZM26.4005 75.3959C16.8849 73.6781 9.9765 75.0628 5.4433 78.9101C0.915622 82.7526 -1 88.8465 -1 96H1C1 89.1535 2.83438 83.7474 6.73743 80.4349C10.6349 77.1272 16.838 75.7019 26.0452 77.3641L26.4005 75.3959ZM64.0417 34.2858C68.1618 48.1001 63.0533 59.0984 54.7432 66.3139C46.3758 73.5791 34.8545 76.9221 26.4005 75.3959L26.0452 77.3641C35.1909 79.0152 47.3082 75.4182 56.0544 67.8241C64.858 60.1802 70.3382 48.3998 65.9583 33.7142L64.0417 34.2858ZM90.4529 -1C79.3517 -0.992307 70.8799 1.74143 66.1176 7.69682C61.3388 13.673 60.5475 22.57 64.0417 34.2858L65.9583 33.7142C62.5456 22.2717 63.4971 14.1764 67.6796 8.94589C71.8788 3.69466 79.5873 1.00753 90.4543 1L90.4529 -1ZM90.4536 1H387V-1H90.4536V1ZM387 1C403.016 1 416 13.9837 416 30H418C418 12.8792 404.121 -1 387 -1V1ZM416 30V177H418V30H416ZM416 177C416 193.016 403.016 206 387 206V208C404.121 208 418 194.121 418 177H416ZM387 206H30V208H387V206ZM30 206C13.9837 206 1 193.016 1 177H-1C-1 194.121 12.8792 208 30 208V206ZM1 177V96H-1V177H1Z"
                      fill="currentcolor"
                    />
                  </g>
                </svg>
              </div>
              <div className="writing-icon">
                <i className="far fa-chart-line" />
              </div>
              <div className="writing-content">
                <h4 className="title">Grow with the use of AI</h4>
                <p>
                  Unlike anything you've experienced - unique and unimaginable
                  capabilities.
                </p>
                <Link to="/work" className="link-btn">
                  Try use of AI
                  <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 col-sm-9">
            <div className="writing-item">
              <div className="writing-shape">
                <svg
                  viewBox="0 0 417 207"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  preserveAspectRatio="none"
                >
                  <g opacity="0.1">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 96C0 82 7.5 73 26.2229 76.38C43.8225 79.5573 73.5 62.5 65 34C58.0931 10.8417 68.4854 0.0152226 90.4536 0H387C403.569 0 417 13.4315 417 30V177C417 193.569 403.569 207 387 207H30C13.4315 207 0 193.569 0 177V96Z"
                      fill="currentcolor"
                    />
                    <path
                      d="M26.2229 76.38L26.0452 77.3641L26.0452 77.3641L26.2229 76.38ZM65 34L64.0417 34.2858L65 34ZM90.4536 0L90.4536 -1L90.4529 -1L90.4536 0ZM26.4005 75.3959C16.8849 73.6781 9.9765 75.0628 5.4433 78.9101C0.915622 82.7526 -1 88.8465 -1 96H1C1 89.1535 2.83438 83.7474 6.73743 80.4349C10.6349 77.1272 16.838 75.7019 26.0452 77.3641L26.4005 75.3959ZM64.0417 34.2858C68.1618 48.1001 63.0533 59.0984 54.7432 66.3139C46.3758 73.5791 34.8545 76.9221 26.4005 75.3959L26.0452 77.3641C35.1909 79.0152 47.3082 75.4182 56.0544 67.8241C64.858 60.1802 70.3382 48.3998 65.9583 33.7142L64.0417 34.2858ZM90.4529 -1C79.3517 -0.992307 70.8799 1.74143 66.1176 7.69682C61.3388 13.673 60.5475 22.57 64.0417 34.2858L65.9583 33.7142C62.5456 22.2717 63.4971 14.1764 67.6796 8.94589C71.8788 3.69466 79.5873 1.00753 90.4543 1L90.4529 -1ZM90.4536 1H387V-1H90.4536V1ZM387 1C403.016 1 416 13.9837 416 30H418C418 12.8792 404.121 -1 387 -1V1ZM416 30V177H418V30H416ZM416 177C416 193.016 403.016 206 387 206V208C404.121 208 418 194.121 418 177H416ZM387 206H30V208H387V206ZM30 206C13.9837 206 1 193.016 1 177H-1C-1 194.121 12.8792 208 30 208V206ZM1 177V96H-1V177H1Z"
                      fill="currentcolor"
                    />
                  </g>
                </svg>
              </div>
              <div className="writing-icon">
                <i className="fal fa-lightbulb-on" />
              </div>
              <div className="writing-content">
                <h4 className="title">Optimized for conversions</h4>
                <p>
                  Unlike anything you've experienced - unique and unimaginable
                  capabilities.
                </p>
                <Link to="/work" className="link-btn">
                  Try conversions
                  <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 col-sm-9">
            <div className="writing-item">
              <div className="writing-shape">
                <svg
                  viewBox="0 0 417 207"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  preserveAspectRatio="none"
                >
                  <g opacity="0.1">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 96C0 82 7.5 73 26.2229 76.38C43.8225 79.5573 73.5 62.5 65 34C58.0931 10.8417 68.4854 0.0152226 90.4536 0H387C403.569 0 417 13.4315 417 30V177C417 193.569 403.569 207 387 207H30C13.4315 207 0 193.569 0 177V96Z"
                      fill="currentcolor"
                    />
                    <path
                      d="M26.2229 76.38L26.0452 77.3641L26.0452 77.3641L26.2229 76.38ZM65 34L64.0417 34.2858L65 34ZM90.4536 0L90.4536 -1L90.4529 -1L90.4536 0ZM26.4005 75.3959C16.8849 73.6781 9.9765 75.0628 5.4433 78.9101C0.915622 82.7526 -1 88.8465 -1 96H1C1 89.1535 2.83438 83.7474 6.73743 80.4349C10.6349 77.1272 16.838 75.7019 26.0452 77.3641L26.4005 75.3959ZM64.0417 34.2858C68.1618 48.1001 63.0533 59.0984 54.7432 66.3139C46.3758 73.5791 34.8545 76.9221 26.4005 75.3959L26.0452 77.3641C35.1909 79.0152 47.3082 75.4182 56.0544 67.8241C64.858 60.1802 70.3382 48.3998 65.9583 33.7142L64.0417 34.2858ZM90.4529 -1C79.3517 -0.992307 70.8799 1.74143 66.1176 7.69682C61.3388 13.673 60.5475 22.57 64.0417 34.2858L65.9583 33.7142C62.5456 22.2717 63.4971 14.1764 67.6796 8.94589C71.8788 3.69466 79.5873 1.00753 90.4543 1L90.4529 -1ZM90.4536 1H387V-1H90.4536V1ZM387 1C403.016 1 416 13.9837 416 30H418C418 12.8792 404.121 -1 387 -1V1ZM416 30V177H418V30H416ZM416 177C416 193.016 403.016 206 387 206V208C404.121 208 418 194.121 418 177H416ZM387 206H30V208H387V206ZM30 206C13.9837 206 1 193.016 1 177H-1C-1 194.121 12.8792 208 30 208V206ZM1 177V96H-1V177H1Z"
                      fill="currentcolor"
                    />
                  </g>
                </svg>
              </div>
              <div className="writing-icon">
                <i className="fal fa-globe" />
              </div>
              <div className="writing-content">
                <h4 className="title">Supports 26 languages</h4>
                <p>
                  Unlike anything you've experienced - unique and unimaginable
                  capabilities.
                </p>
                <Link to="/work" className="link-btn">
                  Try supports languages
                  <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 col-sm-9">
            <div className="writing-item">
              <div className="writing-shape">
                <svg
                  viewBox="0 0 417 207"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  preserveAspectRatio="none"
                >
                  <g opacity="0.1">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 96C0 82 7.5 73 26.2229 76.38C43.8225 79.5573 73.5 62.5 65 34C58.0931 10.8417 68.4854 0.0152226 90.4536 0H387C403.569 0 417 13.4315 417 30V177C417 193.569 403.569 207 387 207H30C13.4315 207 0 193.569 0 177V96Z"
                      fill="currentcolor"
                    />
                    <path
                      d="M26.2229 76.38L26.0452 77.3641L26.0452 77.3641L26.2229 76.38ZM65 34L64.0417 34.2858L65 34ZM90.4536 0L90.4536 -1L90.4529 -1L90.4536 0ZM26.4005 75.3959C16.8849 73.6781 9.9765 75.0628 5.4433 78.9101C0.915622 82.7526 -1 88.8465 -1 96H1C1 89.1535 2.83438 83.7474 6.73743 80.4349C10.6349 77.1272 16.838 75.7019 26.0452 77.3641L26.4005 75.3959ZM64.0417 34.2858C68.1618 48.1001 63.0533 59.0984 54.7432 66.3139C46.3758 73.5791 34.8545 76.9221 26.4005 75.3959L26.0452 77.3641C35.1909 79.0152 47.3082 75.4182 56.0544 67.8241C64.858 60.1802 70.3382 48.3998 65.9583 33.7142L64.0417 34.2858ZM90.4529 -1C79.3517 -0.992307 70.8799 1.74143 66.1176 7.69682C61.3388 13.673 60.5475 22.57 64.0417 34.2858L65.9583 33.7142C62.5456 22.2717 63.4971 14.1764 67.6796 8.94589C71.8788 3.69466 79.5873 1.00753 90.4543 1L90.4529 -1ZM90.4536 1H387V-1H90.4536V1ZM387 1C403.016 1 416 13.9837 416 30H418C418 12.8792 404.121 -1 387 -1V1ZM416 30V177H418V30H416ZM416 177C416 193.016 403.016 206 387 206V208C404.121 208 418 194.121 418 177H416ZM387 206H30V208H387V206ZM30 206C13.9837 206 1 193.016 1 177H-1C-1 194.121 12.8792 208 30 208V206ZM1 177V96H-1V177H1Z"
                      fill="currentcolor"
                    />
                  </g>
                </svg>
              </div>
              <div className="writing-icon">
                <i className="fal fa-user-friends" />
              </div>
              <div className="writing-content">
                <h4 className="title">Streamline collaboration</h4>
                <p>
                  Unlike anything you've experienced - unique and unimaginable
                  capabilities.
                </p>
                <Link to="/work" className="link-btn">
                  Try streamline
                  <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 col-sm-9">
            <div className="writing-item">
              <div className="writing-shape">
                <svg
                  viewBox="0 0 417 207"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  preserveAspectRatio="none"
                >
                  <g opacity="0.1">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 96C0 82 7.5 73 26.2229 76.38C43.8225 79.5573 73.5 62.5 65 34C58.0931 10.8417 68.4854 0.0152226 90.4536 0H387C403.569 0 417 13.4315 417 30V177C417 193.569 403.569 207 387 207H30C13.4315 207 0 193.569 0 177V96Z"
                      fill="currentcolor"
                    />
                    <path
                      d="M26.2229 76.38L26.0452 77.3641L26.0452 77.3641L26.2229 76.38ZM65 34L64.0417 34.2858L65 34ZM90.4536 0L90.4536 -1L90.4529 -1L90.4536 0ZM26.4005 75.3959C16.8849 73.6781 9.9765 75.0628 5.4433 78.9101C0.915622 82.7526 -1 88.8465 -1 96H1C1 89.1535 2.83438 83.7474 6.73743 80.4349C10.6349 77.1272 16.838 75.7019 26.0452 77.3641L26.4005 75.3959ZM64.0417 34.2858C68.1618 48.1001 63.0533 59.0984 54.7432 66.3139C46.3758 73.5791 34.8545 76.9221 26.4005 75.3959L26.0452 77.3641C35.1909 79.0152 47.3082 75.4182 56.0544 67.8241C64.858 60.1802 70.3382 48.3998 65.9583 33.7142L64.0417 34.2858ZM90.4529 -1C79.3517 -0.992307 70.8799 1.74143 66.1176 7.69682C61.3388 13.673 60.5475 22.57 64.0417 34.2858L65.9583 33.7142C62.5456 22.2717 63.4971 14.1764 67.6796 8.94589C71.8788 3.69466 79.5873 1.00753 90.4543 1L90.4529 -1ZM90.4536 1H387V-1H90.4536V1ZM387 1C403.016 1 416 13.9837 416 30H418C418 12.8792 404.121 -1 387 -1V1ZM416 30V177H418V30H416ZM416 177C416 193.016 403.016 206 387 206V208C404.121 208 418 194.121 418 177H416ZM387 206H30V208H387V206ZM30 206C13.9837 206 1 193.016 1 177H-1C-1 194.121 12.8792 208 30 208V206ZM1 177V96H-1V177H1Z"
                      fill="currentcolor"
                    />
                  </g>
                </svg>
              </div>
              <div className="writing-icon">
                <i className="far fa-cog" />
              </div>
              <div className="writing-content">
                <h4 className="title">Powerful settings</h4>
                <p>
                  Unlike anything you've experienced - unique and unimaginable
                  capabilities.
                </p>
                <Link to="/work" className="link-btn">
                  Try powerful settings
                  <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Writing;
