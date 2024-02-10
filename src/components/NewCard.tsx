import React from "react";
import { Input } from "./Input";
import { Button } from "./Button";
import { Form } from "react-router-dom";

interface Props {
  listId: number | string;
}

function NewCard({ listId }: Props) {
  const [showMenu, setShowMenu] = React.useState(false);

  function handleClick() {
    setShowMenu(!showMenu);
  }

  return (
    <>
      {showMenu ? (
        <div className="flex w-full items-center justify-between rounded-md bg-background p-2 shadow-menu">
          <Form
            method="POST"
            className="flex w-full flex-col gap-2"
            onSubmit={() => handleClick()}
          >
            <label className="text-sm" htmlFor="content">
              Card Title
            </label>
            <Input type="text" name="content" id="content" />
            <input type="hidden" name="listId" id="listId" value={listId} />
            <div className="flex gap-2">
              <Button type="submit" buttonText="Add card" />
              <Button variant="secondary" buttonText="Cancel" />
            </div>
          </Form>
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
