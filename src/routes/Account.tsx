import PageName from "../components/PageName";
import LabeledInput from "../components/LabeledInput";
import { Button } from "../components/Button";
import { authProvider } from "../auth";
import { Form, redirect, useRouteLoaderData } from "react-router-dom";
import { getUserData, updateUser } from "../services/user";

async function loader({ request }: { request: Request }) {
  if (!authProvider.isAuthenticated) {
    const params = new URLSearchParams();
    params.set("from", new URL(request.url).pathname);
    return redirect("/login?" + params.toString());
  }

  const [userData] = await Promise.all([getUserData()]);
  return { userData };
}

async function action({ request }: { request: Request }) {
  const formData = await request.formData();
  const name = formData.get("name")?.toString();
  const email = formData.get("email")?.toString();
  const userData = {
    name,
    email,
  };
  console.log(userData);
  try {
    await updateUser(userData);
    return redirect("/account");
  } catch (error) {
    if (error instanceof Error) {
      return { error: error.message };
    }
  }
}

interface UserData {
  id: number;
  username: string;
  name: string;
  email: string;
}

function Account() {
  const routeData = useRouteLoaderData("account");
  const { userData } = routeData as { userData: UserData };
  console.log(userData);
  return (
    <div className="flex h-full w-full flex-col gap-4 px-20 pt-4">
      <PageName page="My Account"></PageName>
      <div className="flex w-full items-center justify-center ">
        <Form className="flex w-80 flex-col gap-4" method="PATCH">
          <LabeledInput
            name="username"
            label="Username"
            placeholder={userData.username}
            disabled={true}
          />
          <LabeledInput name="name" label="Name" placeholder={userData.name} />
          <LabeledInput
            name="password"
            label="Password"
            disabled={true}
            value="Deshabilitado :("
          />
          <LabeledInput
            name="email"
            label="Email"
            placeholder={userData.email}
          />
          {!userData.name && (
            <p className="text-center text-red-500">** Name no registrado **</p>
          )}
          {!userData.email && (
            <p className="text-center text-red-500">
              ** Email no registrado **
            </p>
          )}

          <Button buttonText="Update" type="submit" />
          <Button variant="danger" buttonText="Delete my Account" />
        </Form>
      </div>
    </div>
  );
}

export default Account;
Account.loader = loader;
Account.action = action;
