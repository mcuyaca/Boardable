import * as React from "react";
import ColorPicker from "./ColorPicker";
import { Input } from "./Input";
import { Button } from "./Button";

const arrList = [
  { title: "My board title 1", color: "#E1E7EF" },
  { title: "My board title 2", color: "#fec8c8" },
  { title: "My board title 3", color: "#FED6A9" },
  { title: "My board title 4", color: "#FEF08B" },
  { title: "My board title 5", color: "#D9F99F" },
];

function BoardList() {
  const [color, setColor] = React.useState("#E1E7EF");

  return (
    <ul className="mt-8 flex flex-wrap gap-8">
      <li
        style={{ backgroundColor: color }}
        className="flex h-36 w-64 flex-col rounded-md bg-color1 p-4"
      >
        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="h-fit text-sm leading-none" htmlFor="">
              Board Title
            </label>
            <Input className="flex h-10 " type="text" />
          </div>

          <div className="relative flex items-center justify-between">
            <ColorPicker
              onChange={(event) => {
                const target = event.target as HTMLInputElement;
                console.log(target.name);
                setColor(target.name);
              }}
            />

            <Button buttonText="Create" />
          </div>
        </form>
      </li>

      {arrList.map((element) => {
        return (
          <li
            style={{ backgroundColor: element.color }}
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
