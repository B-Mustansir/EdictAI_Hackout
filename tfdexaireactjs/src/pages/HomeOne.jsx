import Layout from "components/layout/Layout";
import Banner1 from "components/layout/banner/Banner1";
import Counter1 from "components/layout/counter/Counter1";
import Pricing1 from "components/layout/pricing/Pricing1";
import Roadmap from "components/layout/roadmap/Roadmap";
import Testimonial1 from "components/layout/testimonial/Testimonial1";
import Tools from "components/layout/tools/Tools";
import UseCases from "components/layout/usecases/UseCases";
import Video from "components/video/Video";
import Writing from "components/layout/writing/Writing";

const HomeOne = () => {
  return (
    <Layout mainCls="main-content fix" headerStyle={1} footerStyle={1}>
      <Banner1 />
      <Video />
      <Counter1 />
      <Writing />
      <UseCases />
      <Roadmap />
      <Pricing1 />
      <Tools />
      <Testimonial1 />
    </Layout>
  );
};

export default HomeOne;
