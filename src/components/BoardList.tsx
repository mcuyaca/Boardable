import * as React from "react";
import ColorPicker from "./ColorPicker";
import { Input } from "./Input";
import { Button } from "./Button";
import {
  Form,
  Link,
  useNavigation,
  useOutletContext,
  useRouteLoaderData,
} from "react-router-dom";

type Boards = {
  id: number;
  color: string;
  createdat: string;
  updatedat: string;
  title: string;
  userid: number;
};

const initialValues = {
  title: "",
  color: "#E1E7EF",
};

function BoardList() {
  const [formData, setFormData] = React.useState(initialValues);
  const navigation = useNavigation();
  const error = useOutletContext();
  const isSubmitting = Boolean(navigation.formMethod);

  async function handleChange(event) {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
    console.log(formData);
  }

  React.useEffect(() => {
    if (navigation.state === "idle" && !error) {
      setFormData(initialValues);
    }
  }, [navigation.state, error]);

  const routeData = useRouteLoaderData("app");
  const { boards }: { boards: Boards[] } = routeData as { boards: Boards[] };

  const [color, setColor] = React.useState("#E1E7EF");

  return (
    <ul className="mt-8 flex flex-wrap gap-8">
      <li
        key="form"
        style={{ backgroundColor: color }}
        className="flex h-36 w-64 flex-col rounded-md bg-color1 p-4"
      >
        <Form
          className="flex flex-col gap-4"
          method="POST"
          action="/"
          onChange={handleChange}
        >
          <div className="flex flex-col gap-2">
            <label className="h-fit text-sm leading-none" htmlFor="title">
              Board Title
            </label>
            <Input className="flex h-10 " type="text" name="title" id="title" />
          </div>

          <div className="relative flex items-center justify-between">
            <ColorPicker
              onChange={(event) => {
                const target = event.target as HTMLInputElement;
                setColor(target.value);
                console.log(color);
                handleChange(event);
              }}
            />
            <input type="hidden" value={color} name="color" />
            <Button buttonText={isSubmitting ? "Creating..." : "Create"} />
            {error && <p className="text-center text-red-500">{error}</p>}
          </div>
        </Form>
      </li>
      {boards.map((element, index) => {
        return (
          <Link
            to={`/boards/${element.id}`}
            key={index}
            style={{ backgroundColor: element.color }}
            className={`flex h-36 w-64 items-center justify-center rounded-md p-4 bg-${element.color}`}
          >
            {element.title}
          </Link>
        );
      })}
    </ul>
  );
}

export default BoardList;
