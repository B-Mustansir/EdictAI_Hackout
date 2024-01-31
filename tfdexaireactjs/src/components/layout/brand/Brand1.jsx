import Slider from "react-slick";
const settings1 = {
  speed: 7000,
  autoplay: true,
  autoplaySpeed: 0,
  centerMode: true,
  cssEase: "linear",
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  infinite: true,
  initialSlide: 1,
  arrows: false,
  buttons: false,
  responsive: [
    {
      breakpoint: 1200,
      settings: {},
    },
    {
      breakpoint: 992,
      settings: {},
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
const settings2 = {
  speed: 7000,
  autoplay: true,
  autoplaySpeed: 0,
  centerMode: true,
  cssEase: "linear",
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  infinite: true,
  initialSlide: 1,
  arrows: false,
  buttons: false,
  rtl: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {},
    },
    {
      breakpoint: 992,
      settings: {},
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
const Brand1 = () => {
  return (
    <div className="brand-area-two pb-100">
      <div className="container-fluid g-0">
        <div className="brand-item-wrap">
          <h4 className="title">Trusted by 10,000+ marketing teams</h4>
          <Slider {...settings1} className="brand-active-two">
            <div className="brand-item-two">
              <img src="/assets/img/brand/h2_brand_img01.png" alt="" />
            </div>
            <div className="brand-item-two">
              <img src="/assets/img/brand/h2_brand_img02.png" alt="" />
            </div>
            <div className="brand-item-two">
              <img src="/assets/img/brand/h2_brand_img03.png" alt="" />
            </div>
            <div className="brand-item-two">
              <img src="/assets/img/brand/h2_brand_img04.png" alt="" />
            </div>
            <div className="brand-item-two">
              <img src="/assets/img/brand/h2_brand_img05.png" alt="" />
            </div>
            <div className="brand-item-two">
              <img src="/assets/img/brand/h2_brand_img06.png" alt="" />
            </div>
            <div className="brand-item-two">
              <img src="/assets/img/brand/h2_brand_img07.png" alt="" />
            </div>
            <div className="brand-item-two">
              <img src="/assets/img/brand/h2_brand_img08.png" alt="" />
            </div>
            <div className="brand-item-two">
              <img src="/assets/img/brand/h2_brand_img09.png" alt="" />
            </div>
          </Slider>
          <Slider {...settings2} className="brand-active-three" dir="rtl">
            <div className="brand-item-two">
              <img src="/assets/img/brand/h2_brand_img01.png" alt="" />
            </div>
            <div className="brand-item-two">
              <img src="/assets/img/brand/h2_brand_img02.png" alt="" />
            </div>
            <div className="brand-item-two">
              <img src="/assets/img/brand/h2_brand_img03.png" alt="" />
            </div>
            <div className="brand-item-two">
              <img src="/assets/img/brand/h2_brand_img04.png" alt="" />
            </div>
            <div className="brand-item-two">
              <img src="/assets/img/brand/h2_brand_img05.png" alt="" />
            </div>
            <div className="brand-item-two">
              <img src="/assets/img/brand/h2_brand_img06.png" alt="" />
            </div>
            <div className="brand-item-two">
              <img src="/assets/img/brand/h2_brand_img07.png" alt="" />
            </div>
            <div className="brand-item-two">
              <img src="/assets/img/brand/h2_brand_img08.png" alt="" />
            </div>
            <div className="brand-item-two">
              <img src="/assets/img/brand/h2_brand_img09.png" alt="" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}
export default Brand1