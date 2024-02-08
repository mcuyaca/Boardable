import { Form, Link, redirect, useActionData } from "react-router-dom";
import logoSvg from "../assets/images/Logo.svg";
import arrowRight from "../assets/images/arrow-right.svg";
import { authProvider } from "../auth";
import { Button } from "../components/Button";
import LabeledInput from "../components/LabeledInput";

export async function action({ request }: { request: Request }) {
  const formData = await request.formData();
  const username = formData.get("username")?.toString();
  const password = formData.get("password")?.toString();

  try {
    await authProvider.signup(username!, password!);
  } catch (error) {
    return {
      error: "Create user failed",
    };
  }

  return redirect("/");
}

interface ActionData {
  error?: string;
}

function Signup() {
  const actionData = useActionData() as ActionData;
  return (
    <section className="mx-auto flex h-screen  max-w-screen-lg flex-col items-center justify-center gap-8 ">
      <img src={logoSvg} alt="Bordable Logo" />
      <h1 className="w-80 text-center font-welcome text-4xl font-semibold">
        Welcome to Boardable
      </h1>
      <Form className="flex w-80 flex-col gap-4 " method="POST">
        <LabeledInput name="username" label="Username" />
        <LabeledInput name="password" label="Password" />
        <Button className="h-11" buttonText="Signup"></Button>
        {actionData?.error && (
          <p className="text-center text-red-500">{actionData.error}</p>
        )}
      </Form>
      <Link
        className="flex items-center gap-1 text-sm text-primary "
        to="/login"
      >
        Login to your account{" "}
        <img className="h-4 w-4" src={arrowRight} alt="" />
      </Link>
    </section>
  );
}

export default Signup;
