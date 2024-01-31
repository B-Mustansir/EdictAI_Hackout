import Layout from "components/layout/Layout";
import { Link } from "react-router-dom";
import Slider from "react-slick";
const settings = {
  dots: false,
  infinite: true,
  speed: 1000,
  autoplay: true,
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      },
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      },
    },
  ],
};
const BlogDetails = () => {
  return (
    <Layout
      headerStyle={1}
      footerStyle={1}
      breadcrumbTitle={
        <>
          Blog <span>Details</span>
        </>
      }
    >
      <section className="blog-details-area pb-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="blog-details-wrap">
                <div className="blog-details-thumb">
                  <img src="assets/img/blog/blog_details_img.jpg" alt="" />
                  <div className="blog-details-social">
                    <ul className="list-wrap">
                      <li>
                        <Link to="#">
                          <i className="fab fa-facebook-f" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fab fa-twitter" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fab fa-linkedin-in" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fab fa-instagram" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="blog-details-content">
                  <span className="date">March 24, 2023</span>
                  <h2 className="title">
                    Will I get caught using ChatGPT for my homework? Here's how
                    to prevent AI detection
                  </h2>
                  <p className="info-one">
                    Hello there! I am ChatGPT, a language model developed by
                    OpenAI, based on the powerful GPT (Generative Pre-trained
                    Transformer) architecture. My purpose is to have meaningful
                    conversations with humans using natural language, just like
                    you and I are doing right now. I am trained on a diverse
                    range of texts, including news articles, books, and online
                    content, which means that I can provide you with accurate
                    and up-to-date information on many topics. Whether you want
                    to learn something new, seek advice, or just have a friendly
                    chat, I am here to assist you. So, feel free to ask me
                    anything and let's start our conversation!
                  </p>
                  <p className="info-two">
                    my primary function is to generate human-like text by
                    predicting the most likely words to follow a given input. I
                    use a deep learning algorithm to analyze patterns and
                    relationships within large datasets of text, which allows me
                    to understand the structure of language and produce coherent
                    your queries.
                  </p>
                  <span className="list-title">
                    In this series you’ll learn about the following :
                  </span>
                  <ul className="list-wrap">
                    <li>
                      <i className="far fa-check" />
                      Natural language processing
                    </li>
                    <li>
                      <i className="far fa-check" />
                      Multilingual capabilities
                    </li>
                    <li>
                      <i className="far fa-check" />
                      Ability to answer questions
                    </li>
                    <li>
                      <i className="far fa-check" />
                      Contextual understanding
                    </li>
                    <li>
                      <i className="far fa-check" />
                      Continual learning
                    </li>
                    <li>
                      <i className="far fa-check" />
                      Ability to handle complex questions
                    </li>
                    <li>
                      <i className="far fa-check" />
                      Ability to generate text
                    </li>
                    <li>
                      <i className="far fa-check" />
                      Quick response time
                    </li>
                  </ul>
                  <p className="info-three">
                    We're the one-stop shop for all your text-generating needs.
                    Here, you can quickly create original and compelling content
                    in natural language with the help of our cutting-edge AI
                    technology. Our intuitive, user-friendly platform makes it
                    easy to get just the right look and feel for your project,
                    whatever it may be. Try it out today and see what you can
                    create!
                  </p>
                </div>
              </div>
              <div className="blog-avatar-wrap">
                <div className="blog-post-avatar-img">
                  <img src="assets/img/blog/avatar_img.png" alt="img" />
                </div>
                <div className="blog-avatar-info">
                  <h4 className="name">About Michael</h4>
                  <p>
                    Supported substance consolidates parts of web based
                    promoting and substance showcasing. It includes making
                    substance, for example.
                  </p>
                  <div className="avatar-social">
                    <ul className="list-wrap">
                      <li>
                        <Link to="#">
                          <i className="fab fa-facebook-f" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fab fa-instagram" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fab fa-linkedin-in" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="blog-pev-next-wrap blog-details-pev-next">
                <ul className="list-wrap">
                  <li>
                    <Link to="/blog">
                      <i className="far fa-arrow-left" />
                      Previous
                    </Link>
                  </li>
                  <li className="next-post">
                    <Link to="/blog">
                      <i className="far fa-arrow-right" />
                      Next
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="related-post-wrap">
                <h2 className="title">Related posts</h2>
                <Slider {...settings} className="row related-post-active">
                  <div className="col-lg-4">
                    <div className="blog-grid-item">
                      <div className="blog-grid-thumb">
                        <Link to="/blog-details">
                          <img src="assets/img/blog/blog_img02.jpg" alt="" />
                        </Link>
                      </div>
                      <div className="blog-grid-content">
                        <span className="date">March 24, 2023</span>
                        <h2 className="title">
                          <Link to="/blog-details">
                            The Future of Document Writing Introducing the
                            Dex.ai
                          </Link>
                        </h2>
                        <p>
                          As a writer, marketer, or business owner, you
                          understand that creating engaging, high-quality
                          content is crucial to building a successful brand.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="blog-grid-item">
                      <div className="blog-grid-thumb">
                        <Link to="/blog-details">
                          <img src="assets/img/blog/blog_img03.jpg" alt="" />
                        </Link>
                      </div>
                      <div className="blog-grid-content">
                        <span className="date">January 25, 2023</span>
                        <h2 className="title">
                          <Link to="/blog-details">
                            Unlock Your Writing Potential with Dex.ai Boost SEO
                          </Link>
                        </h2>
                        <p>
                          Unlock your writing potential with Dex. AI! Get the
                          most out of your content and boost SEO rankings
                          engagement quickly and easily.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="blog-grid-item">
                      <div className="blog-grid-thumb">
                        <Link to="/blog-details">
                          <img src="assets/img/blog/blog_img04.jpg" alt="" />
                        </Link>
                      </div>
                      <div className="blog-grid-content">
                        <span className="date">June 17, 2023</span>
                        <h2 className="title">
                          <Link to="/blog-details">
                            How to Use Dex.ai for Generating High SEO Ranking
                          </Link>
                        </h2>
                        <p>
                          Discover how to use Dex.ai for generating engaging
                          content ideas quickly. Learn the best practices and
                          tips to maximize your SEO.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="blog-grid-item">
                      <div className="blog-grid-thumb">
                        <Link to="/blog-details">
                          <img src="assets/img/blog/blog_img05.jpg" alt="" />
                        </Link>
                      </div>
                      <div className="blog-grid-content">
                        <span className="date">August 31, 2023</span>
                        <h2 className="title">
                          <Link to="/blog-details">
                            How to Generate Engaging Content Ideas Quickly with
                          </Link>
                        </h2>
                        <p>
                          Learn how to use Dex.ai and generate engaging content
                          ideas quickly. Increase your SEO rankings and get more
                          readers.
                        </p>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
              <div className="comments-wrap">
                <h4 className="comments-wrap-title">Comments (02)</h4>
                <div className="latest-comments">
                  <ul className="list-wrap">
                    <li>
                      <div className="comments-box">
                        <div className="comments-avatar">
                          <img
                            src="assets/img/blog/comment_avatar01.png"
                            alt=""
                          />
                        </div>
                        <div className="comments-text">
                          <div className="avatar-name">
                            <h6 className="name">
                              by Benjamin /{" "}
                              <span className="date">September 28, 2023</span>
                            </h6>
                          </div>
                          <p>
                            I was amazed at how easy it was to have a
                            conversation with ChatGPT. It felt like talking to a
                            real person! I got helpful answers to my questions
                            and even learned something new.
                          </p>
                          <ul className="list-wrap">
                            <li className="like">
                              <Link to="#">like</Link>
                            </li>
                            <li className="reply">
                              <Link to="#">reply</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <ul className="list-wrap children">
                        <li>
                          <div className="comments-box">
                            <div className="comments-avatar">
                              <img
                                src="assets/img/blog/comment_avatar02.png"
                                alt=""
                              />
                            </div>
                            <div className="comments-text">
                              <div className="avatar-name">
                                <h6 className="name">
                                  by Thomas /{" "}
                                  <span className="date">
                                    September 30, 2023
                                  </span>
                                </h6>
                              </div>
                              <p>
                                ChatGPT has become my go-to source for advice
                                and information. It's always available, always
                                helpful, and always delivers. I highly recommend
                                it to anyone looking
                              </p>
                              <ul className="list-wrap">
                                <li className="like">
                                  <Link to="#">like</Link>
                                </li>
                                <li className="reply">
                                  <Link to="#">reply</Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="comment-respond">
                <h3 className="comment-reply-title">Leave a reply</h3>
                <span>
                  Your email address will not be published. Required fields are
                  marked *
                </span>
                <form className="comment-form" action="#">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-grp">
                        <label htmlFor="name">Your Name *</label>
                        <input type="text" id="name" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-grp">
                        <label htmlFor="email">Your Email *</label>
                        <input type="email" id="email" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-grp">
                        <label htmlFor="website">Website *</label>
                        <input type="url" id="website" />
                      </div>
                    </div>
                  </div>
                  <div className="form-grp">
                    <label htmlFor="message">Message *</label>
                    <textarea name="message" id="message" />
                  </div>
                  <div className="form-grp checkbox-grp">
                    <input
                      type="checkbox"
                      id="checkbox"
                      className="form-check-input"
                    />
                    <label htmlFor="checkbox">
                      Save my name, email, and website in this browser for the
                      next time I comment.
                    </label>
                  </div>
                  <button type="submit" className="btn">
                    make an appointment
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default BlogDetails;
