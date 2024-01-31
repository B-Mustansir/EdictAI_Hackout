import Slider from "react-slick";
const settings = {
  dots: false,
  infinite: true,
  speed: 1000,
  autoplay: true,
  arrows: false,
  slidesToShow: 7,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
      },
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
      },
    },
  ],
};

const Brand2 = () => {
  return (
    <section className="brand-aera-three">
      <div className="container-fluid p-0">
        <div className="brand-wrap-three">
          <h6 className="title">Trusted by 10,000+ marketing teams</h6>
          <Slider {...settings} className="row g-0 brand-active-four">
            <div className="col-12">
              <div className="brand-item-three">
                <img src="/assets/img/brand/brand_img01.png" alt="" />
              </div>
            </div>
            <div className="col-12">
              <div className="brand-item-three">
                <img src="/assets/img/brand/brand_img02.png" alt="" />
              </div>
            </div>
            <div className="col-12">
              <div className="brand-item-three">
                <img src="/assets/img/brand/brand_img03.png" alt="" />
              </div>
            </div>
            <div className="col-12">
              <div className="brand-item-three">
                <img src="/assets/img/brand/brand_img04.png" alt="" />
              </div>
            </div>
            <div className="col-12">
              <div className="brand-item-three">
                <img src="/assets/img/brand/brand_img05.png" alt="" />
              </div>
            </div>
            <div className="col-12">
              <div className="brand-item-three">
                <img src="/assets/img/brand/brand_img06.png" alt="" />
              </div>
            </div>
            <div className="col-12">
              <div className="brand-item-three">
                <img src="/assets/img/brand/brand_img07.png" alt="" />
              </div>
            </div>
            <div className="col-12">
              <div className="brand-item-three">
                <img src="/assets/img/brand/brand_img08.png" alt="" />
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};
export default Brand2;
