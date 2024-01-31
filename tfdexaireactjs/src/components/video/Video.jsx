
const Video = () => {
    return (
        <div className="video-area">
                <div className="video-shape">
                    <svg height={1192} viewBox="0 0 1920 1192" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path stroke="url(#paint0_linear_2840_46)" strokeWidth={7} strokeDasharray="10 10" d="M-40.9996 902C-8.39405 961.001 87.0357 1262.13 234 1171.5C385.21 1078.25 424.961 618.039 479.564 680.288C534.166 742.538 625.164 842.979 735.172 706.451C845.181 569.923 839.697 412.37 1093.03 631.043C1346.36 849.717 1371.47 413.985 1477.97 274.534C1584.48 135.083 1738.61 381.41 1830.32 343.155C1922.04 304.9 1862.93 -74.0337 2236.96 18.2495" />
                        <defs>
                            <linearGradient id="paint0_linear_2840_46" x1="2117.79" y1="34.1404" x2="83.2194" y2="768.35" gradientUnits="userSpaceOnUse">
                                <stop offset={0} stopColor="rgba(200 189 255)" />
                                <stop offset="0.13824" stopColor="#BAA6FF" />
                                <stop offset="0.337481" stopColor="#6721FF" />
                                <stop offset="0.900573" stopColor="#180048" />
                                <stop offset={1} stopColor="#00CBFF" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div className="container custom-container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="video-wrap">
                                <video className="live-video" loop autoPlay muted>
                                    <source src="/assets/videos/demo.mp4" type="video/mp4" />
                                    
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
        </div>

    )
}
export default Video