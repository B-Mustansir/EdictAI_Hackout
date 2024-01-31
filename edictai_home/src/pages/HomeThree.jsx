import Layout from "components/layout/Layout";
import About2 from "components/layout/about/About2";
import Banner3 from "components/layout/banner/Banner3";
import Brand2 from "components/layout/brand/Brand2";
import Cta from "components/layout/cta/Cta";
import Pricing3 from "components/layout/pricing/Pricing3";
import Services2 from "components/layout/services/Services2";
import Speech from "components/layout/speech/Speech";
import Testimonial3 from "components/layout/testimonial/Testimonial3";
import Voices from "components/layout/voice/Voices";


const HomeThree = () => {
    return (
        <Layout mainCls="main-content-two fix" headerStyle={3} footerStyle={3}>
        <Banner3 />
        <Speech />
        <Brand2 />
        <Services2 />
        <About2 />
        <Voices />
        <Pricing3 />
        <Testimonial3 />
        <Cta />
    </Layout>
    );
}

export default HomeThree;