
import Header4 from "components/header/Header4"
import DataBg from "components/layout/DataBg"

export default function Login() {

    return (
        <>
            <DataBg />
            <Header4 />
            <main className="main-content">
                <div className="noise-bg" data-background="/assets/img/bg/noise_bg.png" />
                <div className="main-shape" data-background="/assets/img/images/main_shape.png" />
                <section className="login-area">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-5 col-md-10">
                                <div className="login-content">
                                    <h3 className="title">Create your account</h3>
                                    <span>👋 Welcome back! Please enter your details.</span>
                                    <form action="#">
                                        <div className="form-grp">
                                            <label htmlFor="email">Your Email</label>
                                            <input type="email" id="email" />
                                        </div>
                                        <div className="form-grp">
                                            <label htmlFor="word">Password</label>
                                            <input type="password" id="word" />
                                        </div>
                                        <div className="password-wrap">
                                            <div className="form-grp checkbox-grp">
                                                <input type="checkbox" id="checkbox" className="form-check-input" />
                                                <label htmlFor="checkbox">Remember for 30 days</label>
                                            </div>
                                            <button type="reset">Forgot Password</button>
                                        </div>
                                        <button type="submit" className="sine-btn">sign in</button>
                                        <button type="submit" className="google-btn"><img src="assets/img/images/google.png" alt="" /> sign in with google</button>
                                        <span>Don’t have an account? Sign up for free</span>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="login-right-content-wrap">
                                    <div className="login-right-bg" data-background="assets/img/bg/error_bg.jpg" />
                                    <div className="login-right-content-inner">
                                        <img src="assets/img/images/login_img.png" alt="" />
                                        <h4 className="title">Revolutionize your writing: Try <span>AI writer today</span> and watch your content soar</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

        </>
    )
}