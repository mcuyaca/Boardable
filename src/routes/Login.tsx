import {
  Form,
  redirect,
  useActionData,
  useLocation,
  useNavigation,
} from "react-router-dom";
import logoSvg from "../assets/images/Logo.svg";
import arrowRight from "../assets/images/arrow-right.svg";
import { Button } from "../components/Button";
import LabeledInput from "../components/LabeledInput";
import { authProvider } from "../auth";

export async function action({ request }: { request: Request }) {
  const formData = await request.formData();
  const username = formData.get("username")?.toString();
  const password = formData.get("password")?.toString();
  console.log({ username, password });
  try {
    await authProvider.login(username!, password!);
  } catch (error) {
    console.log(error);
    return {
      error: "Invalid login attempt",
    };
  }

  const redirectTo = formData.get("reditectTo")?.toString();
  return redirect(redirectTo || "/");
}

interface ActionData {
  error?: string;
}

function Login() {
  const actionData = useActionData() as ActionData;
  const navigation = useNavigation();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const redirectTo = searchParams.get("from");

  const isSubmitting = navigation.state === "submitting";

  return (
    <section className=" flex h-screen w-screen flex-col items-center justify-center gap-8 ">
      <img src={logoSvg} alt="Bordable Logo" />
      <h1 className="w-80 text-center font-welcome text-4xl font-semibold">
        Welcome to Boardable
      </h1>
      <Form className="flex w-80 flex-col gap-4 " method="POST">
        {redirectTo && (
          <input type="hidden" name="redirectTo" value={redirectTo} />
        )}
        <LabeledInput name="username" label="Username" />
        <LabeledInput name="password" label="Password" />
        <Button
          className="h-11"
          buttonText={isSubmitting ? "Entering ..." : "Login"}
        ></Button>

        {actionData?.error && (
          <p className="text-red-500">{actionData.error}</p>
        )}
      </Form>
      <a className="flex items-center gap-1 text-sm text-primary" href="">
        Create an account <img className="h-4 w-4" src={arrowRight} alt="" />
      </a>
    </section>
  );
}

export default Login;
