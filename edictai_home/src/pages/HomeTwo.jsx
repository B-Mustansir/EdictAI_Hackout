import Layout from "components/layout/Layout";
import About1 from "components/layout/about/About1";
import Banner2 from "components/layout/banner/Banner2";
import Brand1 from "components/layout/brand/Brand1";
import Compare from "components/layout/compare/Compare";
import Counter2 from "components/layout/counter/Counter2";
import Features from "components/layout/features/Features";
import Language from "components/layout/language/Language";
import Pricing2 from "components/layout/pricing/Pricing2";
import Services1 from "components/layout/services/Services1";
import Testimonial2 from "components/layout/testimonial/Testimonial2";
import Roadmap from "components/layout/roadmap/Roadmap";
import Video from "components/video/Video";
import { Analytics } from '@vercel/analytics/react';

const HoweTwo = () => {
    return (
        <Layout mainCls="main-content fix" headerStyle={2} footerStyle={2}>
            <Banner2/>
            <Features/>
            
            
            
      <Roadmap />
      <Video/>
            
            <Testimonial2/>
            
            
            <Analytics />
        </Layout>
    );
}

export default HoweTwo;