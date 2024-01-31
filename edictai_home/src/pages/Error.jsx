import Layout from "components/layout/Layout";
import { Link } from "react-router-dom";
const Error = ()=> {
  return (
    <Layout headerStyle={1} footerStyle={1}>
      <section className="error-area">
        <div
          className="error-bg"
          data-background="assets/img/bg/error_bg.jpg"
        />
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="error-content text-center">
                <h2 className="title">Error Page</h2>
                <div className="error-img">
                  <img src="assets/img/images/error_img.png" alt="" />
                </div>
                <span>Sorry we can't find that page!</span>
                <Link to="/" className="btn">
                  back to home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
export default Error