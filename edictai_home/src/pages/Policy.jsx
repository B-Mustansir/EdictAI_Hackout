import Layout from "components/layout/Layout";

const Texts = (props) => {
    return <>
        <h5 style={{ fontSize: 30 }} data-wow-delay=".2s">
            <b>{props.heading}</b>
        </h5>
        <br />
        <p className="wow fadeInUp" data-wow-delay=".4s">
            {props.text}
        </p>
    </>
}

const Heads = () => {
    return <section className="banner-area-three">
        <div
            className="banner-shape"
            data-background="assets/img/banner/h3_banner_shape.png"
        />
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-9 col-lg-10">
                    <div className="banner-content-three text-center">
                        <h2 className="title wow fadeInUp" data-wow-delay=".2s">
                            Privacy Policy
                        </h2>
                        <b>Last updated: 31th January 2024</b>
                        <br />
                        <p className="wow fadeInUp" data-wow-delay=".4s">
                            Thank you for choosing Edict AI, an AI-powered multi-layered video editor. This Privacy Policy outlines how we collect, use, disclose, and protect your information in connection with our services. By using Edict AI, you agree to the terms outlined in this policy.
                        </p>
                        <br />
                        <h3 style={{ fontSize: 60 }} data-wow-delay=".2s">
                            <b>Information We Collect</b>
                        </h3 >
                        <br />
                        <Texts heading="User-Provided Information:" text="1.Usage Data: We collect information about your interactions with Edict AI, including log files, IP address, device information, and usage statistics. This helps us improve our service and provide a better user experience." />
                        <p>2.Technical Information: Edict AI utilizes advanced algorithms to edit videos, and while processing content, technical information about the editing process may be collected for optimization and troubleshooting purposes.</p>
                        <br />
                        <Texts heading="How We Use Your Information" text="1.Video Editing Services: We use the information you provide to process and edit videos as per your instructions, including the integration of graphics, icons, b-rolls, transitions, and SFX to create multi-layered videos." />
                        <p>2.Service Improvement: Data collected, both user-provided and automatically collected, helps us enhance and optimize the performance, features, and overall user experience of Edict AI.</p>
                        <br />
                        <Texts heading="Information Sharing" text="Edict AI does not share your personal information or edited content with third parties, except as required for the provision of our services or as outlined in this Privacy Policy." />
                        <br />
                        <Texts heading="Data Security" text="We employ industry-standard security measures to protect your information. However, it's important to note that no method of transmission over the internet or electronic storage is entirely secure, and we cannot guarantee absolute security." />
                        <br />
                        <Texts heading="User Control" text="1.Account Information: You can review and update your account information through the account settings.
"/>
                        <p>Content Ownership: You retain ownership of the content you provide for video editing. Edict AI does not claim any ownership rights over the edited videos.
                        </p>
                        <br />

                        <Texts heading="Third-Party Integration" text="Edict AI may integrate with third-party services for specific features. Please review the privacy policies of these third-party services, as they may have their own terms and practices."/>
                        <br />

                        <Texts heading="Changes to this Privacy Policy" text="We may update this Privacy Policy to reflect changes in our services or applicable laws. Please check this page for any updates. Your continued use of Edict AI after any changes indicates your acceptance of the updated terms."/>
                        <br />
                        <Texts heading="Contact Us" text="If you have any questions or concerns about this Privacy Policy or Edict AI's practices, please contact us at"/> <a href = "mailto: closedai.chain@gmail.com">closedai.chain@gmail.com</a>

                    </div>
                </div>
            </div>
        </div>
    </section>
}

const Policy = () => {
    return (
        <Layout mainCls="main-content-two fix" headerStyle={3} footerStyle={3}>
            {/* <Banner3 /> */}
            <Heads />
        </Layout>
    );
}

export default Policy;