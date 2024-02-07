import * as React from "react";

function ColorPicker() {
  return (
    <div className="absolute top-9 grid h-[68px] w-[124px] grid-cols-4 rounded-md bg-background p-2 shadow-lg ">
      <input className="h-6 w-6 rounded-full border border-black bg-color1"></input>
      <input className="h-6 w-6 rounded-full border border-black bg-color2"></input>
      <input className="h-6 w-6 rounded-full border border-black bg-color3"></input>
      <input className="h-6 w-6 rounded-full border border-black bg-color4"></input>
      <input className="h-6 w-6 rounded-full border border-black bg-color5"></input>
      <input className="h-6 w-6 rounded-full border border-black bg-color6"></input>
      <input className="h-6 w-6 rounded-full border border-black bg-color7"></input>
      <input className="h-6 w-6 rounded-full border border-black bg-color8"></input>
    </div>
  );
}

export default ColorPicker;
