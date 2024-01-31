import { Link } from "react-router-dom"


const Cta =()=> {
    return (
            <section className="cta-area">
                <div className="container">
                    <div className="cta-wrap">
                        <div className="row justify-content-center">
                            <div className="col-xl-8 col-lg-10">
                                <div className="cta-content">
                                    <h2 className="title title-animation">Provide Affordable Text-To-Speech <span>solutions for everyone</span></h2>
                                    <p>English, Turkish, Arabic, German, French, Italian, Russian, Chinese, Japanese, Korean ... Speech your texts naturally, fluently and realistically with more than 550 voices in 75+ languages.</p>
                                    <Link to="/login" className="btn">TRY NOW FOR FREE</Link>
                                </div>
                            </div>
                        </div>
                        <div className="cta-shape-wrap">
                            <img src="/assets/img/images/cta_shape01.png" alt="" className="wow fadeInLeft" data-wow-delay=".2s" />
                            <img src="/assets/img/images/cta_shape02.png" alt="" className="wow fadeInRight" data-wow-delay=".2s" />
                        </div>
                    </div>
                </div>
            </section>

    )
}
export default Cta