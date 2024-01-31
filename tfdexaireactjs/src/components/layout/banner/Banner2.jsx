import { Link } from "react-router-dom"


export default function Banner2() {
    return (
        <section className="banner-area-two">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-9 col-lg-10">
                            <div className="banner-content-two">
                                <h2 className="title wow fadeInUp" data-wow-delay=".2s">Create videos from news &nbsp;
                                    <span>articles&nbsp;
                                        <strong>
                                            in minutes
                                            <svg viewBox="0 0 345 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M344.366 0.00527191C231.51 16.2892 117.803 18.0623 5.82257 7.9456C3.59842 7.74418 0.292572 9.4891 0.0174561 12.1809C-0.260559 14.9221 2.83823 17.0748 5.06818 17.301C117.89 28.79 231.159 22.6085 344.545 1.4609C345.266 1.32606 345.074 -0.0971813 344.366 0.00527191Z" fill="url(#banner)" />
                                                <defs>
                                                    <linearGradient id="banner" x1="376.061" y1="0.000463246" x2="10.2776" y2="101.79" gradientUnits="userSpaceOnUse">
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
                                <p className="wow fadeInUp" data-wow-delay=".4s">Transform your news articles into dynamic visual narratives effortlessly with our AI video generation, delivering engaging and informative content in a single click.</p>
                                <div className="banner-btn-two">
                                    <Link to="/generatevideo" className="gradient-btn gradient-btn-three wow fadeInLeft" data-wow-delay=".6s">Get a video</Link>
                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="banner-shape-wrap">
                    <img src="/assets/img/banner/banner_shape01.png" alt="" className="rotateme" />
                    <img src="/assets/img/banner/banner_shape02.png" alt="" className="alltuchtopdown" />
                </div>
        </section>

    )
}
