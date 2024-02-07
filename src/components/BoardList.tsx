import * as React from "react";
import ColorPicker from "./ColorPicker";
import { Input } from "./Input";
import { Button } from "./Button";

const arrList = [
  { title: "My board title 1", color: "color1" },
  { title: "My board title 2", color: "color2" },
  { title: "My board title 3", color: "color3" },
  { title: "My board title 4", color: "color4" },
  { title: "My board title 5", color: "color5" },
];

function BoardList() {
  return (
    <ul className="mt-8 flex flex-wrap gap-8">
      <li className="flex h-36 w-64 flex-col rounded-md bg-color1 p-4">
        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="h-fit text-sm leading-none" htmlFor="">
              Board Title
            </label>
            <Input className="flex h-10 " type="text" />
          </div>

          <div className="relative flex items-center justify-between">
            <div className="flex gap-2">
              <label htmlFor="">Color</label>
              <div className="h-6 w-6 rounded-full border border-black bg-transparent  "></div>
              <ColorPicker />
            </div>

            <Button buttonText="Create" />
          </div>
        </form>
      </li>

      {arrList.map((element) => {
        return (
          <li
            className={`flex h-36 w-64 items-center justify-center rounded-md p-4 bg-${element.color}`}
          >
            {element.title}
          </li>
        );
      })}
    </ul>
  );
}

export default BoardList;
