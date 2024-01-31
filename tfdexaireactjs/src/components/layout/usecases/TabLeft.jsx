import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

function TabLeft() {
  return (
    <div className="cases-details-left">
      <p>Keywords</p>
      <input type="text" placeholder="AI 2023" />
      <p>Creativity</p>
      <RangeSlider
        className="single-thumb"
        defaultValue={[0, 60]}
        thumbsDisabled={[true, false]}
        rangeSlideDisabled={true}
        onThumbDragStart={false}
      />
      <div className="group-language">
        <div className="inner-left">
          <p>Language</p>
          <input type="text" placeholder="Swedish" />
        </div>
        <div>
          <p>Language</p>
          <input type="text" placeholder="Professional" />
        </div>
      </div>
      <button className="gradient-btn">Generate</button>
    </div>
  );
}

export default TabLeft;
