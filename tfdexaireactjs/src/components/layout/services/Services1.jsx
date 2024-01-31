import { useState } from "react";
import VideoPopup from "components/video/VideoPopup";

export default function Services1() {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleOnClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <section className="services-area pb-125">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-9">
            <div className="section-title-two text-center mb-70">
              <h2 className="title wow fadeInUp" data-wow-delay=".2s">
                Free professional actor videos &nbsp;
                <span>
                  With&nbsp;
                  <strong>
                    DEX.AI
                    <svg
                      viewBox="0 0 345 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M344.366 0.00527191C231.51 16.2892 117.803 18.0623 5.82257 7.9456C3.59842 7.74418 0.292572 9.4891 0.0174561 12.1809C-0.260559 14.9221 2.83823 17.0748 5.06818 17.301C117.89 28.79 231.159 22.6085 344.545 1.4609C345.266 1.32606 345.074 -0.0971813 344.366 0.00527191Z"
                        fill="url(#services)"
                      />
                      <defs>
                        <linearGradient
                          id="services"
                          x1="376.061"
                          y1="0.000463246"
                          x2="10.2776"
                          y2="101.79"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0.0361276" stopColor="#FAEC60" />
                          <stop offset="0.159651" stopColor="#E5A34B" />
                          <stop offset="0.269837" stopColor="#EE6E4D" />
                          <stop offset="0.42316" stopColor="#F44380" />
                          <stop offset="0.55979" stopColor="#BE3DB3" />
                          <stop offset="0.745252" stopColor="#7746E6" />
                          <stop offset="0.888441" stopColor="#5A71F1" />
                          <stop offset={1} stopColor="#439EFF" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </strong>
                </span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="services-tab-wrap">
              <ul className="nav nav-tabs" id="myTabTwo" role="tablist">
                <li className="nav-item" onClick={() => handleOnClick(1)}>
                  <button
                    className={
                      activeIndex == 1 ? "nav-link active" : "nav-link"
                    }
                  >
                    <svg
                      viewBox="0 0 19 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.5565 7.91812C13.9017 7.22319 14.5003 6.70072 15.2446 6.44855C15.556 6.34275 15.877 6.30217 16.1965 6.30072V2.17391C16.1965 0.975362 15.2056 0 13.9879 0H2.20861C0.99093 0 0 0.975362 0 2.17391V16.6667C0 17.8652 0.99093 18.8406 2.20861 18.8406H9.5331L9.45359 18.613C9.13334 17.6935 9.19592 16.7109 9.62807 15.842L13.5565 7.91812ZM2.94482 4.34783H11.7793C12.1864 4.34783 12.5155 4.67246 12.5155 5.07246C12.5155 5.47246 12.1864 5.7971 11.7793 5.7971H2.94482C2.53769 5.7971 2.20861 5.47246 2.20861 5.07246C2.20861 4.67246 2.53769 4.34783 2.94482 4.34783ZM2.94482 7.24638H11.0431C11.4502 7.24638 11.7793 7.57101 11.7793 7.97101C11.7793 8.37101 11.4502 8.69565 11.0431 8.69565H2.94482C2.53769 8.69565 2.20861 8.37101 2.20861 7.97101C2.20861 7.57101 2.53769 7.24638 2.94482 7.24638ZM8.09824 14.4928H2.94482C2.53769 14.4928 2.20861 14.1681 2.20861 13.7681C2.20861 13.3681 2.53769 13.0435 2.94482 13.0435H8.09824C8.50536 13.0435 8.83445 13.3681 8.83445 13.7681C8.83445 14.1681 8.50536 14.4928 8.09824 14.4928ZM2.94482 11.5942C2.53769 11.5942 2.20861 11.2696 2.20861 10.8696C2.20861 10.4696 2.53769 10.1449 2.94482 10.1449H9.57065C9.97777 10.1449 10.3069 10.4696 10.3069 10.8696C10.3069 11.2696 9.97777 11.5942 9.57065 11.5942H2.94482ZM18.8498 10.4601L14.9199 18.387C14.66 18.9094 14.2102 19.3007 13.6529 19.4891L12.2607 19.9601C12.182 19.987 12.1002 20 12.0215 20C11.7159 20 11.4303 19.8116 11.3258 19.5109L10.8465 18.1406C10.6543 17.5899 10.6919 17 10.951 16.479L14.8809 8.55362C15.0524 8.2058 15.3528 7.94493 15.7246 7.81884C16.0956 7.69275 16.4954 7.71594 16.8488 7.88696L18.1725 8.52246C18.5258 8.69203 18.7909 8.98768 18.919 9.35362C19.0471 9.71957 19.0228 10.1123 18.8498 10.4601Z"
                        fill="currentcolor"
                      />
                    </svg>
                    Content marketing
                  </button>
                </li>
                <li className="nav-item" onClick={() => handleOnClick(2)}>
                  <button
                    className={
                      activeIndex == 2 ? "nav-link active" : "nav-link"
                    }
                  >
                    <svg
                      viewBox="0 0 25 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.47761 14.5247C4.51179 14.8482 4.49985 15.175 4.44216 15.4951C4.31428 16.1918 3.99518 16.8392 3.52052 17.365C3.50921 17.3781 3.50198 17.3942 3.49973 17.4113C3.49747 17.4284 3.50029 17.4459 3.50783 17.4614C3.51538 17.477 3.52731 17.49 3.54217 17.4988C3.55702 17.5077 3.57414 17.512 3.59142 17.5112C5.17327 17.4049 6.53358 16.6117 7.11847 15.3799C7.22515 15.1535 7.30544 14.9157 7.35774 14.6709C7.36661 14.6163 7.39126 14.5655 7.42864 14.5247C7.46114 14.4844 7.50232 14.4519 7.54912 14.4296C7.59591 14.4074 7.64712 14.396 7.69893 14.3962C8.07113 14.4007 9.01936 14.3962 12.409 14.3962C13.3543 14.3965 14.2904 14.2106 15.1638 13.8491C16.0372 13.4877 16.8309 12.9577 17.4995 12.2895C18.8499 10.94 19.6088 9.10939 19.6094 7.20033C19.61 5.29127 18.8522 3.46017 17.5027 2.10985C16.1532 0.759522 14.3225 0.00058849 12.4135 9.06756e-07H7.77425C6.24647 -0.000765789 4.75808 0.484689 3.52454 1.38609C2.29101 2.28749 1.37634 3.55806 0.91295 5.01388C0.449557 6.46969 0.461483 8.0352 0.947004 9.48379C1.43253 10.9324 2.36645 12.1889 3.61357 13.0714C3.85225 13.2387 4.05269 13.4547 4.20164 13.7053C4.35059 13.9558 4.44465 14.2351 4.47761 14.5247Z"
                        fill="currentcolor"
                      />
                      <path
                        d="M8.23155 15.2807C9.51355 16.3199 11.1141 16.8863 12.7644 16.8847C16.1541 16.8847 17.1024 16.8891 17.4746 16.8847C17.5546 16.8835 17.6325 16.9102 17.6948 16.9604C17.7571 17.0106 17.7999 17.081 17.8157 17.1594C17.868 17.4041 17.9483 17.642 18.055 17.8684C18.6399 19.1046 20.0002 19.8978 21.5821 19.9997C21.5993 20.0005 21.6165 19.9962 21.6313 19.9873C21.6462 19.9785 21.6581 19.9655 21.6656 19.9499C21.6732 19.9343 21.676 19.9169 21.6737 19.8998C21.6715 19.8826 21.6643 19.8665 21.653 19.8535C21.1782 19.3295 20.859 18.6835 20.7313 17.988C20.6737 17.6679 20.6618 17.3411 20.6959 17.0176C20.7277 16.7277 20.8213 16.448 20.9704 16.1973C21.1194 15.9466 21.3204 15.7308 21.5599 15.5643C22.6853 14.7677 23.5583 13.6647 24.075 12.3863C24.5917 11.108 24.7304 9.70819 24.4747 8.35332C24.2189 6.99845 23.5794 5.74552 22.6323 4.74354C21.6851 3.74156 20.4701 3.03267 19.1317 2.70117C19.9478 3.9181 20.4176 5.33404 20.4908 6.79744C20.564 8.26083 20.2379 9.71659 19.5474 11.0089C18.8568 12.3012 17.8279 13.3814 16.5706 14.1339C15.3134 14.8863 13.8752 15.2828 12.41 15.2807H8.23155Z"
                        fill="currentcolor"
                      />
                    </svg>
                    Communications
                  </button>
                </li>
                <li className="nav-item" onClick={() => handleOnClick(3)}>
                  <button
                    className={
                      activeIndex == 3 ? "nav-link active" : "nav-link"
                    }
                  >
                    <svg
                      viewBox="0 0 25 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.148582 8.35194C0.138063 9.30587 0.701587 10.1644 1.55777 10.4989V6.41094C1.55777 6.35211 1.58593 6.2639 1.58593 6.20508C0.723975 6.53686 0.150686 7.39318 0.148582 8.35194Z"
                        fill="currentcolor"
                      />
                      <path
                        d="M7.84254 13.4121H4.15039L5.53142 18.647C5.73593 19.4459 6.43001 20.0012 7.22248 19.9999C7.78633 20.0069 8.3198 19.734 8.65988 19.2647C9.00325 18.8182 9.10915 18.2218 8.9417 17.6766L7.84254 13.4121Z"
                        fill="currentcolor"
                      />
                      <path
                        d="M1.58594 6.17587H1.6141V6.14648C1.6141 6.17587 1.6141 6.17587 1.58594 6.17587Z"
                        fill="currentcolor"
                      />
                      <path
                        d="M21.7939 5.76367H21.5684V11.0574H21.7939C23.1948 11.0574 24.3304 9.87237 24.3304 8.41058C24.3304 6.94873 23.1947 5.76367 21.7939 5.76367Z"
                        fill="currentcolor"
                      />
                      <path
                        d="M2.40332 6.4113V10.5875C2.4338 11.669 3.28303 12.529 4.31982 12.5285H9.44938V4.58789H4.31982C3.3052 4.58789 2.40332 5.35256 2.40332 6.4113Z"
                        fill="currentcolor"
                      />
                      <path
                        d="M10.2949 12.6462L20.7231 16.9988V0L10.2949 4.35266V12.6462Z"
                        fill="currentcolor"
                      />
                    </svg>
                    Promotional
                  </button>
                </li>
                <li className="nav-item" onClick={() => handleOnClick(4)}>
                  <button
                    className={
                      activeIndex == 4 ? "nav-link active" : "nav-link"
                    }
                  >
                    <svg
                      viewBox="0 0 23 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.7059 7.7898C9.6444 7.7898 7.97325 6.046 7.97325 3.8949C7.97325 1.74381 9.6444 0 11.7059 0C13.7673 0 15.4385 1.74381 15.4385 3.8949C15.4385 6.046 13.7673 7.7898 11.7059 7.7898Z"
                        fill="currentcolor"
                      />
                      <path
                        d="M4.15495 7.78982C2.85173 7.78982 1.79525 6.68742 1.79525 5.32753C1.79525 3.96764 2.85173 2.86523 4.15495 2.86523C5.45818 2.86523 6.51465 3.96764 6.51465 5.32753C6.51465 6.68742 5.45818 7.78982 4.15495 7.78982Z"
                        fill="currentcolor"
                      />
                      <path
                        d="M19.2575 7.78982C17.9543 7.78982 16.8978 6.68742 16.8978 5.32753C16.8978 3.96764 17.9543 2.86523 19.2575 2.86523C20.5607 2.86523 21.6172 3.96764 21.6172 5.32753C21.6172 6.68742 20.5607 7.78982 19.2575 7.78982Z"
                        fill="currentcolor"
                      />
                      <path
                        d="M16.9322 10.0022C17.8611 9.20808 18.7023 9.3132 19.7763 9.3132C21.3826 9.3132 22.6895 10.6688 22.6895 12.3347V17.2239C22.6895 17.9473 22.1236 18.5356 21.4277 18.5356C18.4233 18.5356 18.7852 18.5923 18.7852 18.4004C18.7852 14.9359 19.1785 12.3952 16.9322 10.0022Z"
                        fill="currentcolor"
                      />
                      <path
                        d="M10.6847 9.33017C12.5606 9.1669 14.1912 9.33205 15.5976 10.5434C17.9512 12.5106 17.4982 15.1592 17.4982 18.3995C17.4982 19.2567 16.8298 19.9673 15.9957 19.9673C6.93956 19.9673 6.57912 20.2721 6.0421 19.0312C5.86598 18.6115 5.91425 18.7449 5.91425 14.7302C5.91425 11.5415 8.56024 9.33017 10.6847 9.33017Z"
                        fill="currentcolor"
                      />
                      <path
                        d="M3.63639 9.31309C4.71627 9.31309 5.55285 9.20904 6.48047 10.0021C4.25098 12.3773 4.62746 14.7447 4.62746 18.4003C4.62746 18.5934 4.92792 18.5355 2.03008 18.5355C1.3093 18.5355 0.723234 17.9262 0.723234 17.1772V12.3345C0.723234 10.6687 2.03008 9.31309 3.63639 9.31309Z"
                        fill="currentcolor"
                      />
                    </svg>
                    People Culture
                  </button>
                </li>
                <li className="nav-item" onClick={() => handleOnClick(5)}>
                  <button
                    className={
                      activeIndex == 5 ? "nav-link active" : "nav-link"
                    }
                  >
                    <svg
                      viewBox="0 0 16 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.79676 22C10.459 18.9646 12.3552 16.3331 13.5823 13.9733C14.765 11.6988 15.3255 9.66655 15.2957 7.76067C15.2532 5.04836 14.064 3.27869 13.0739 2.2721C11.6486 0.822465 9.71806 0 7.75426 0C7.70098 0 7.64729 0.000472656 7.59402 0.00210547C4.02219 0.0833594 0.31619 3.04902 0.296952 7.86994C0.281457 11.7003 2.60048 16.0785 7.79676 22ZM7.79684 2.36496C10.555 2.36496 12.799 4.7358 12.799 7.64977C12.799 10.5639 10.5549 12.9347 7.79684 12.9347C5.03862 12.9347 2.7946 10.5639 2.7946 7.64977C2.7946 4.73576 5.03862 2.36496 7.79684 2.36496ZM7.79684 11.3368C5.87248 11.3368 4.30708 9.68305 4.30708 7.64977C4.30708 5.61705 5.87248 3.96279 7.79684 3.96279C9.72111 3.96279 11.2866 5.61705 11.2866 7.64977C11.2866 9.68305 9.72111 11.3368 7.79684 11.3368Z"
                        fill="currentcolor"
                      />
                    </svg>
                    Localization
                  </button>
                </li>
                <li className="nav-item" onClick={() => handleOnClick(6)}>
                  <button
                    className={
                      activeIndex == 6 ? "nav-link active" : "nav-link"
                    }
                  >
                    <svg
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19.013 6.28113V16.0498C19.013 16.7281 18.7432 17.3793 18.264 17.8594C17.784 18.3385 17.1327 18.6083 16.4545 18.6083H3.42956C2.75134 18.6083 2.10009 18.3385 1.62003 17.8594C1.1409 17.3793 0.871094 16.7281 0.871094 16.0498V6.28113C0.871094 5.6029 1.1409 4.95165 1.62003 4.47159C2.10009 3.99246 2.75134 3.72266 3.42956 3.72266H16.4545C17.1327 3.72266 17.784 3.99246 18.264 4.47159C18.7432 4.95165 19.013 5.6029 19.013 6.28113ZM5.29027 13.2588C5.29027 13.6439 5.60287 13.9565 5.98803 13.9565C6.3732 13.9565 6.6858 13.6439 6.6858 13.2588V12.0958H8.08133V13.2588C8.08133 13.6439 8.39392 13.9565 8.77909 13.9565C9.16426 13.9565 9.47685 13.6439 9.47685 13.2588V10.4677C9.47685 9.31128 8.53999 8.37442 7.38356 8.37442C6.22713 8.37442 5.29027 9.31128 5.29027 10.4677V13.2588ZM8.08133 10.7003H6.6858V10.4677C6.6858 10.0825 6.9984 9.76995 7.38356 9.76995C7.76873 9.76995 8.08133 10.0825 8.08133 10.4677V10.7003ZM10.4072 13.2588C10.4072 13.6439 10.7198 13.9565 11.105 13.9565H12.5005C13.6569 13.9565 14.5938 13.0197 14.5938 11.8632V10.4677C14.5938 9.31128 13.6569 8.37442 12.5005 8.37442H11.105C10.7198 8.37442 10.4072 8.68702 10.4072 9.07218V13.2588ZM11.8027 12.561V9.76995H12.5005C12.8857 9.76995 13.1983 10.0825 13.1983 10.4677V11.8632C13.1983 12.2484 12.8857 12.561 12.5005 12.561H11.8027Z"
                        fill="currentcolor"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.59241 1.11615C6.36168 0.808205 6.42401 0.370009 6.73196 0.139281C7.03991 -0.0914461 7.4781 -0.0291125 7.70883 0.278834L9.94168 3.25596L12.1745 0.278834C12.4052 -0.0291125 12.8434 -0.0914461 13.1514 0.139281C13.4593 0.370009 13.5217 0.808205 13.2909 1.11615L10.4999 4.83756C10.3678 5.0134 10.1612 5.11667 9.94168 5.11667C9.72211 5.11667 9.51557 5.0134 9.38346 4.83756L6.59241 1.11615Z"
                        fill="currentcolor"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M15.7549 19.3023C15.7549 19.6874 15.4423 20 15.0571 20C14.672 20 14.3594 19.6874 14.3594 19.3023V17.9067C14.3594 17.5216 14.672 17.209 15.0571 17.209C15.4423 17.209 15.7549 17.5216 15.7549 17.9067V19.3023Z"
                        fill="currentcolor"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.52248 19.3023C5.52248 19.6874 5.20988 20 4.82472 20C4.43955 20 4.12695 19.6874 4.12695 19.3023V17.9067C4.12695 17.5216 4.43955 17.209 4.82472 17.209C5.20988 17.209 5.52248 17.5216 5.52248 17.9067V19.3023Z"
                        fill="currentcolor"
                      />
                    </svg>
                    Advertisement
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="myTabContentTwo">
                <div
                  className={
                    activeIndex == 1
                      ? "tab-pane fade show active"
                      : "tab-pane fade"
                  }
                >
                  <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6">
                      <div className="services-item">
                        <img
                          src="/assets/img/services/services_img01.jpg"
                          alt=""
                        />
                        <VideoPopup />
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="services-item">
                        <img
                          src="/assets/img/services/services_img02.jpg"
                          alt=""
                        />
                        <VideoPopup />
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="services-item">
                        <img
                          src="/assets/img/services/services_img03.jpg"
                          alt=""
                        />
                        <VideoPopup />
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="services-item">
                        <img
                          src="/assets/img/services/services_img04.jpg"
                          alt=""
                        />
                        <VideoPopup />
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="services-item">
                        <img
                          src="/assets/img/services/services_img05.jpg"
                          alt=""
                        />
                        <VideoPopup />
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="services-item">
                        <img
                          src="/assets/img/services/services_img06.jpg"
                          alt=""
                        />
                        <VideoPopup />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={
                    activeIndex == 2
                      ? "tab-pane fade show active"
                      : "tab-pane fade"
                  }
                >
                  <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6">
                      <div className="services-item">
                        <img
                          src="/assets/img/services/services_img04.jpg"
                          alt=""
                        />
                        <VideoPopup />
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="services-item">
                        <img
                          src="/assets/img/services/services_img02.jpg"
                          alt=""
                        />
                        <VideoPopup />
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="services-item">
                        <img
                          src="/assets/img/services/services_img05.jpg"
                          alt=""
                        />
                        <VideoPopup />
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="services-item">
                        <img
                          src="/assets/img/services/services_img01.jpg"
                          alt=""
                        />
                        <VideoPopup />
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="services-item">
                        <img
                          src="/assets/img/services/services_img03.jpg"
                          alt=""
                        />
                        <VideoPopup />
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="services-item">
                        <img
                          src="/assets/img/services/services_img06.jpg"
                          alt=""
                        />
                        <VideoPopup />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={
                    activeIndex == 3
                      ? "tab-pane fade show active"
                      : "tab-pane fade"
                  }
                >
                  <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6">
                      <div className="services-item">
                        <img
                          src="/assets/img/services/services_img01.jpg"
                          alt=""
                        />
                        <VideoPopup />
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="services-item">
                        <img
                          src="/assets/img/services/services_img02.jpg"
                          alt=""
                        />
                        <VideoPopup />
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="services-item">
                        <img
                          src="/assets/img/services/services_img03.jpg"
                          alt=""
                        />
                        <VideoPopup />
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="services-item">
                        <img
                          src="/assets/img/services/services_img04.jpg"
                          alt=""
                        />
                        <VideoPopup />
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="services-item">
                        <img
                          src="/assets/img/services/services_img05.jpg"
                          alt=""
                        />
                        <VideoPopup />
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="services-item">
                        <img
                          src="/assets/img/services/services_img06.jpg"
                          alt=""
                        />
                        <VideoPopup />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={
                    activeIndex == 4
                      ? "tab-pane fade show active"
                      : "tab-pane fade"
                  }
                >
                  <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6">
                      <div className="services-item">
                        <img
                          src="/assets/img/services/services_img04.jpg"
                          alt=""
                        />
                        <VideoPopup />
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="services-item">
                        <img
                          src="/assets/img/services/services_img02.jpg"
                          alt=""
                        />
                        <VideoPopup />
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="services-item">
                        <img
                          src="/assets/img/services/services_img05.jpg"
                          alt=""
                        />
                        <VideoPopup />
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="services-item">
                        <img
                          src="/assets/img/services/services_img01.jpg"
                          alt=""
                        />
                        <VideoPopup />
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="services-item">
                        <img
                          src="/assets/img/services/services_img03.jpg"
                          alt=""
                        />
                        <VideoPopup />
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="services-item">
                        <img
                          src="/assets/img/services/services_img06.jpg"
                          alt=""
                        />
                        <VideoPopup />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={
                    activeIndex == 5
                      ? "tab-pane fade show active"
                      : "tab-pane fade"
                  }
                >
                  <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6">
                      <div className="services-item">
                        <img
                          src="/assets/img/services/services_img01.jpg"
                          alt=""
                        />
                        <VideoPopup />
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="services-item">
                        <img
                          src="/assets/img/services/services_img02.jpg"
                          alt=""
                        />
                        <VideoPopup />
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="services-item">
                        <img
                          src="/assets/img/services/services_img03.jpg"
                          alt=""
                        />
                        <VideoPopup />
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="services-item">
                        <img
                          src="/assets/img/services/services_img04.jpg"
                          alt=""
                        />
                        <VideoPopup />
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="services-item">
                        <img
                          src="/assets/img/services/services_img05.jpg"
                          alt=""
                        />
                        <VideoPopup />
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="services-item">
                        <img
                          src="/assets/img/services/services_img06.jpg"
                          alt=""
                        />
                        <VideoPopup />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={
                    activeIndex == 6
                      ? "tab-pane fade show active"
                      : "tab-pane fade"
                  }
                >
                  <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6">
                      <div className="services-item">
                        <img
                          src="/assets/img/services/services_img04.jpg"
                          alt=""
                        />
                        <VideoPopup />
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="services-item">
                        <img
                          src="/assets/img/services/services_img02.jpg"
                          alt=""
                        />
                        <VideoPopup />
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="services-item">
                        <img
                          src="/assets/img/services/services_img05.jpg"
                          alt=""
                        />
                        <VideoPopup />
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="services-item">
                        <img
                          src="/assets/img/services/services_img01.jpg"
                          alt=""
                        />
                        <VideoPopup />
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="services-item">
                        <img
                          src="/assets/img/services/services_img03.jpg"
                          alt=""
                        />
                        <VideoPopup />
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="services-item">
                        <img
                          src="/assets/img/services/services_img06.jpg"
                          alt=""
                        />
                        <VideoPopup />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="services-shape-wrap">
        <img
          src="/assets/img/images/services_shape01.png"
          alt=""
          data-aos="fade-left"
          data-aos-delay={300}
        />
        <img
          src="/assets/img/images/services_shape02.png"
          alt=""
          data-aos="fade-right"
          data-aos-delay={300}
        />
      </div>
    </section>
  );
}
