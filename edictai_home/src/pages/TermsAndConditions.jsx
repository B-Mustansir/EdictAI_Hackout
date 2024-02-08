import Layout from "components/layout/Layout";


const Texts = (props) => {
    return <>
        <h5 style={{ fontSize: 30 }} data-wow-delay=".2s">
            {props.heading}
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
                        Terms and Conditions Policy
                        </h2>
                        <b>Last updated: 31th January 2024</b>
                        <br />
                        <p className="wow fadeInUp" data-wow-delay=".4s">
                        Thank you for choosing Edict AI, an AI-powered multi-layered video editor. These Terms and Conditions govern your use of Edict AI's website and services. By using Edict AI, you agree to abide by these terms.
                        </p>
                        <br />
                        <br />
                        <Texts heading="1. Acceptance of Terms" text="By accessing or using Edict AI, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you may not use Edict AI." />
                        
                        <Texts heading="2. Use of Edict AI" text="1.Eligibility: You must be at least 8 years old to use Edict AI. By using Edict AI, you represent and warrant that you meet this eligibility requirement." />
                        <p>2.User Account: To access certain features of Edict AI, you may need to create an account. You are responsible for maintaining the confidentiality of your account information.</p>
                        <br />
                        <Texts heading="3. Video Editing Services" text="1.Content Ownership: You retain ownership of the content you provide for video editing. Edict AI does not claim any ownership rights over the edited videos." />
                        <p>2.Acceptable Use: You agree not to use Edict AI for any unlawful, abusive, or fraudulent purposes. Edict AI reserves the right to suspend or terminate your account for violation of these terms.</p>
                        <br />
                        <Texts heading="4. User Content" text="Responsibility: You are solely responsible for the content you provide for video editing. Edict AI is not responsible for the accuracy, legality, or appropriateness of user-provided content." />
                        <p>2.Permissions: By providing content to Edict AI, you grant Edict AI the right to use, modify, reproduce, and distribute the edited videos for the purpose of providing the video editing services.</p>
                        <br />
                        <Texts heading="5. Privacy" text=""/>
                        <p>Your use of Edict AI is also governed by our Privacy Policy, which can be found <a href="https://websites.godaddy.com/en-IN/editor/f3dd86d3-63b9-4ba8-8cdc-1363dbd4c8b8/287f429b-ed6e-416e-aa2a-319409973b79">here</a>. By using Edict AI, you consent to the practices outlined in the Privacy Policy.</p>
                        <br />

                        <Texts heading="6. Intellectual Property" text="1.Edict AI Property: Edict AI and its associated logos, trademarks, and content are the property of Closed AI Chain. You may not use these without prior written permission."/>
                        <br />
                        <p>2.User Feedback: Any feedback or suggestions provided by users may be used by Edict AI without any obligation or compensation.</p>

                        <Texts heading="7. Limitation of Liability" text='Edict AI is provided "as is" without any warranty. In no event shall Edict AI be liable for any direct, indirect, incidental, special, or consequential damages.'/>
                        <br />
                        <Texts heading="8. Changes to Terms and Conditions" text="Edict AI may update these Terms and Conditions to reflect changes in services or applicable laws. It is your responsibility to review these terms periodically. Your continued use of Edict AI after any changes indicates your acceptance of the updated terms. "/>
                    </div>
                </div>
            </div>
        </div>
    </section>
}

const TermsAndConditions = () => {
    return (
        <Layout mainCls="main-content-two fix" headerStyle={3} footerStyle={3}>
            {/* <Banner3 /> */}
            <Heads />
        </Layout>
    );
}

export default TermsAndConditions;