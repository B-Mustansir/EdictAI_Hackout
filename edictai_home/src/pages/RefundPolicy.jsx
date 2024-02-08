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
                            Return and Refund Policy
                        </h2>
                        <br />
                        <h3 style={{ fontSize: 40 }}>
                            <b>Subscription Refund Policy</b>
                        </h3>
                        <br />
                        <Texts heading="No Refund or Return Policy:" text="Edict AI does not provide refunds or returns for subscription purchases. Once a subscription is bought, it is considered final and non-refundable. Please ensure that you carefully review our product description and features before making a purchase." />
                        <br />
                        <h2 style={{ fontSize: 40 }} data-wow-delay=".2s">
                            <b>Cancellation of Subscription</b>
                        </h2>
                        <br />
                        <Texts heading="Automatic Renewals:" text="Edict AI subscriptions may be set to automatically renew at the end of the subscription period. You can manage your subscription and turn off auto-renewal by going to your account settings before the renewal date." />
                        <br />
                        <Texts heading="Effect of Cancellation:" text="If you choose to cancel your subscription before the end of the current subscription period, your subscription will remain active until the end of that period. However, no refunds will be provided for the remaining unused portion of the subscription." />
                        <br />
                        <h2 style={{ fontSize: 40 }} data-wow-delay=".2s">
                            <b>Changes to this Refund Policy</b>
                        </h2>
                        <br />
                        <Texts heading="" text="We reserve the right to update or modify this Refund Policy at any time. Any changes will be effective immediately upon posting the updated policy on the Edict AI website." />
                        <br />

                    </div>
                </div>
            </div>
        </div>
    </section>
}

const RefundPolicy = () => {
    return (
        <Layout mainCls="main-content-two fix" headerStyle={3} footerStyle={3}>
            {/* <Banner3 /> */}
            <Heads />

        </Layout>
    );
}

export default RefundPolicy;