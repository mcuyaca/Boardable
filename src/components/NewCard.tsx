import React from "react";
import { Input } from "./Input";
import { Button } from "./Button";

function NewCard() {
  const [showMenu, setShowMenu] = React.useState(false);

  function handleClick() {
    setShowMenu(!showMenu);
  }

  return (
    <>
      {showMenu ? (
        <div className="flex w-full items-center justify-between rounded-md bg-background p-2 shadow-menu">
          <div className="flex w-full flex-col gap-2">
            <label className="text-sm" htmlFor="">
              Card Title
            </label>
            <Input type="text" />
            <div className="flex gap-2">
              <Button buttonText="Add card" />
              <Button
                variant="secondary"
                buttonText="Cancel"
                onClick={handleClick}
              />
            </div>
          </div>
        </div>
      ) : (
        <p
          className="pl-2 font-semibold text-muted-foreground"
          onClick={handleClick}
        >
          + Add a card
        </p>
      )}
    </>
  );
}

export default NewCard;
