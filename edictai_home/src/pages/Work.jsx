import Layout from "components/layout/Layout";

const Work = () => {
  return (
    <Layout
      headerStyle={1}
      footerStyle={1}
      breadcrumbTitle={
        <>
          {" "}
          How it’s <span>Work</span>
        </>
      }
    >
      <section className="work-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="work-item"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
              >
                <div className="work-thumb">
                  <img src="assets/img/images/work_img01.jpg" alt="" />
                </div>
                <div className="work-content">
                  <span>Step 1</span>
                  <h2 className="title">Dex.ai Chat - Your AI Companion</h2>
                  <p>
                    Dex.ai is an advanced AI system that leverages cutting-edge
                    technologies and the latest Google data to provide accurate
                    responses to every request. With its vast knowledge base and
                    powerful algorithms,{" "}
                  </p>
                </div>
              </div>
              <div
                className="work-item"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
              >
                <div className="work-thumb">
                  <img src="assets/img/images/work_img02.jpg" alt="" />
                </div>
                <div className="work-content">
                  <span>Step 2</span>
                  <h2 className="title">
                    How AI Became Our Greatest Co-Worker
                  </h2>
                  <p>
                    Are you struggling to stay on top of all your business tasks
                    and responsibilities? Do you find yourself bogged down by
                    administrative work and unable to focus on your core
                    business activities? If so,
                  </p>
                </div>
              </div>
              <div
                className="work-item"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
              >
                <div className="work-thumb">
                  <img src="assets/img/images/work_img03.jpg" alt="" />
                </div>
                <div className="work-content">
                  <span>Step 3</span>
                  <h2 className="title">
                    Inspiration to Creation the Creative Art Maker
                  </h2>
                  <p>
                    In today's digital age, creating visually appealing images
                    is more important than ever. From social media posts to
                    marketing materials, the right images can make all the
                    difference in capturing the attention
                  </p>
                </div>
              </div>
              <div
                className="work-item"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
              >
                <div className="work-thumb">
                  <img src="assets/img/images/work_img04.jpg" alt="" />
                </div>
                <div className="work-content">
                  <span>Step 4</span>
                  <h2 className="title">Prompt Library - AI for Community</h2>
                  <p>
                    Artificial intelligence is a powerful tool that can help
                    businesses of all sizes solve complex problems, automate
                    routine tasks, and gain valuable insights into their
                    operations. However, the reality is that not many
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Work;
