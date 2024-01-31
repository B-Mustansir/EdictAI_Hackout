import { useState } from "react";
import Select from "react-select";

const countries = [
  {
    value: "us",
    label: "English (American)",
    image: "assets/img/images/flag01.png",
  },
  {
    value: "uk",
    label: "English (British)",
    image: "/assets/img/images/s_voice_img02.png",
  },
  {
    value: "bd",
    label: "Bengali (Bangladesh)",
    image: "assets/img/images/flag03.png",
  },
  {
    value: "ca",
    label: "English (Canada)",
    image: "assets/img/images/flag04.png",
  },
  {
    value: "za",
    label: "Zulu (South Africa)",
    image: "assets/img/images/flag05.png",
  },
  {
    value: "in",
    label: "Hindi (India)",
    image: "assets/img/images/flag06.png",
  },
];
const voices = [
  {
    value: "v1",
    label: "Amber (HD)",
    image: "assets/img/images/s_voice_img01.png",
  },
  {
    value: "v2",
    label: "Brandon (HD)",
    image: "/assets/img/images/s_voice_img02.png",
  },
  {
    value: "v3",
    label: "Tony (HD)",
    image: "assets/img/images/s_voice_img03.png",
  },
  {
    value: "v4",
    label: "Michael (HD)",
    image: "assets/img/images/s_voice_img04.png",
  },
  {
    value: "v5",
    label: "Sara (HD)",
    image: "assets/img/images/s_voice_img05.png",
  },
  {
    value: "v6",
    label: "Prabhat (HD)",
    image: "assets/img/images/s_voice_img06.png",
  },
];
const punctuation = [
  {
    value: "v1",
    label: "Punctuation: Auto",
  },
  {
    value: "v2",
    label: "Punctuation: Off",
  },
  {
    value: "v3",
    label: "Punctuation: On",
  },
];
const filter = [
  {
    value: "v1",
    label: "Profanity Filter: On",
  },
  {
    value: "v2",
    label: "Profanity Filter: Off",
  },
];
const Speech = () => {
  const [isToggled, setToggled] = useState(false);
  const toggleTrueFalse = () => setToggled(!isToggled);

  const [selectCountry, setSelectCountry] = useState();
  const [selectVoice, setSelectVoice] = useState();
  const [selectPunctuation, setSelectPunctuation] = useState();
  const [selectFilter, setSelectFilter] = useState();
  // const handleSelectCountry = (selected) => {
  // };

  const colourStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "transparent",
      borderColor: "#393A3D",
      borderRadius: "5px",
      height: "50px",
      boxShadow: "none",
      ":hover": {
        borderColor: "#393A3D",
      },
    }),
    option: (styles) => ({
      ...styles,
      backgroundColor: "transparent",
      transition: "all 0.3s ease-out 0s",
      ":hover": {
        backgroundColor: "#00C39A !important",
      },
      ":active": {
        backgroundColor: "#00C39A !important",
      },
      padding: "6px 10px",
      color: "f0f0f0",
    }),

    menu: (base) => ({
      ...base,
      padding: "0px 4px",
      borderRadius: "5px",
      width: "100%",
      border: "1px solid #393A3D",
      backgroundColor: "#222325",
      boxShadow: "none",
    }),
  };

  return (
    <section className="speech-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-10">
            <div className="speech-item">
              <form className="engine-form">
                <div className="row">
                  <div className="col-md-6">
                    <div className="lang-ordering">
                      <Select
                        defaultValue={countries[0]}
                        value={selectCountry}
                        className="react-select-2-listbox"
                        // onChange={handleSelectCountry}
                        options={countries}
                        isSearchable={false}
                        styles={colourStyles}
                        formatOptionLabel={(country) => (
                          <div className="react-select-option">
                            <img src={country.image} alt="country-image" />
                            <p>{country.label}</p>
                          </div>
                        )}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="voice-ordering">
                      <Select
                        defaultValue={voices[0]}
                        value={selectVoice}
                        // onChange={handleSelectCountry}
                        options={voices}
                        isSearchable={false}
                        styles={colourStyles}
                        formatOptionLabel={(voices) => (
                          <div className="react-select-option">
                            <img src={voices.image} alt="voice-img" />
                            <p>{voices.label}</p>
                          </div>
                        )}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-grp">
                  <textarea placeholder="Enter Text here.." />
                  <div className="form-content">
                    <span>
                      Free use of Voicer Studio is limited to 50 characters. For
                      more <br /> usage and premium voices, you can purchase
                      packages.
                    </span>
                    <span id="maxLenghtCounter" className="badge-default">
                      0 characters
                    </span>
                  </div>
                </div>
                <button className="speech-btn" onClick={toggleTrueFalse}>
                  <span />
                  <span />
                  <span />
                  text to speech
                </button>
                <div
                  className="hidden-btn-wrap"
                  style={{ display: `${isToggled ? "block" : "none"}` }}
                >
                  <div className="hidden-btn-inner">
                    <button>
                      <i className="fas fa-play" />
                      listen
                    </button>
                    <button className="download">
                      <i className="fas fa-download" />
                      Download
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-6 col-md-10">
            <div className="speech-item">
              <div className="browser-upload">
                <input type="file" />
                <h6 className="title">
                  <i className="fas fa-file-import" />
                  Browser
                </h6>
                <span>.mp3</span>
                <span>.wav</span>
              </div>
              <form action="#" className="engine-form-two">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-grp">
                      <input
                        type="text"
                        placeholder="Give a name to your work"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-grp cus-select">
                      <Select
                        defaultValue={punctuation[0]}
                        value={selectPunctuation}
                        // onChange={handleSelectCountry}
                        options={punctuation}
                        isSearchable={false}
                        styles={colourStyles}
                        formatOptionLabel={(punctuation) => (
                          <div className="react-select-option">
                            <p>{punctuation.label}</p>
                          </div>
                        )}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-grp cus-select">
                      <Select
                        defaultValue={filter[0]}
                        value={selectFilter}
                        // onChange={handleSelectCountry}
                        options={filter}
                        isSearchable={false}
                        styles={colourStyles}
                        formatOptionLabel={(filter) => (
                          <div className="react-select-option">
                            <p>{filter.label}</p>
                          </div>
                        )}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-grp cus-select">
                      <Select
                        defaultValue={countries[0]}
                        value={selectCountry}
                        // onChange={handleSelectCountry}
                        options={countries}
                        isSearchable={false}
                        styles={colourStyles}
                        formatOptionLabel={(country) => (
                          <div className="react-select-option">
                            <img src={country.image} alt="country-image" />
                            <p>{country.label}</p>
                          </div>
                        )}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-content">
                  <span>
                    Voicer Transcribe free use is limited to 5 minutes. You can{" "}
                    <br /> purchase packages for more use and to transcribe
                    longer files.
                  </span>
                  <span className="badge-default" id="infos">
                    00 Minutes
                  </span>
                </div>
                <button>
                  <span />
                  <span />
                  <span />
                  Convert audio to text
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="speech-shape-wrap">
        <div
          className="shape-one"
          data-background="assets/img/images/speech_shape01.png"
        />
        <div
          className="shape-two"
          data-background="assets/img/images/speech_shape02.png"
        />
      </div>
    </section>
  );
};
export default Speech;
