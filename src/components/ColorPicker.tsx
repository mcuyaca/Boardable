import * as React from "react";
interface Props {
  onChange: (value: React.MouseEvent<HTMLInputElement>) => void;
}

function ColorPicker({ onChange = () => {} }: Props) {
  const [showMenu, setShowMenu] = React.useState(false);

  function handleClick() {
    setShowMenu(!showMenu);
  }

  function handleClickColor(event: React.MouseEvent<HTMLInputElement>) {
    setShowMenu(!showMenu);
    onChange(event);
  }
  const colors = [
    "#E1E7EF",
    "#FEC8C8",
    "#FED6A9",
    "#FEF08B",
    "#D9F99F",
    "#BEDBFE",
    "#FBD0E8",
    "#DED7FE",
  ];

  const inputSytle =
    "h-6 w-6 rounded-full border border-black cursor-pointer text-transparent";

  return (
    <div className="flex gap-2">
      <p>Color</p>
      <div
        className="h-6 w-6 rounded-full border border-black bg-transparent"
        onClick={handleClick}
      ></div>
      {showMenu && (
        <div className="absolute top-9 grid h-[68px] w-[124px] grid-cols-4 rounded-md bg-background p-2 shadow-menu ">
          {colors.map((color) => (
            <input
              key={color}
              type="button"
              className={inputSytle}
              style={{ backgroundColor: color }}
              name="color"
              value={color}
              onClick={handleClickColor}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ColorPicker;
