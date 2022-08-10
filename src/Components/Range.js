import React from "react";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

function valueLabelFormat(value) {
  const [coefficient, exponent] = value
    .toExponential()
    .split("e")
    .map((item) => Number(item));
  return `${Math.round(coefficient)}`;
}

export default function NonLinearSlider() {
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Typography id="non-linear-slider" gutterBottom></Typography>
      <Slider
        value={value}
        min={+0}
        step={0.1}
        max={+100}
        scale={(x) => x}
        getAriaValueText={valueLabelFormat}
        valueLabelFormat={valueLabelFormat}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="non-linear-slider"
      />
    </div>
  );
}
