import logoSvg from "../assets/images/Logo.svg";
import arrowRight from "../assets/images/arrow-right.svg";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
function Login() {
  return (
    <section className="mx-auto flex h-screen w-80 max-w-screen-lg flex-col items-center justify-center gap-8 ">
      <img className="mx-auto" src={logoSvg} alt="Bordable Logo" />
      <h1 className="font-welcome text-center text-4xl font-semibold">
        Welcome to Boardable
      </h1>
      <form className="flex w-80 flex-col justify-center gap-4 " action="">
        <div className="flex flex-col gap-2">
          <label className="flex justify-start text-base" htmlFor="username">
            Username
          </label>
          <Input
            id="username"
            className="h-10  "
            name="username"
            type="text"
            autoComplete="username"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="flex justify-start text-base" htmlFor="password">
            Password
          </label>
          <Input
            id="password"
            className="h-10"
            name="password"
            type="password"
            autoComplete="current-password"
          />
        </div>

        <Button className="h-11" buttonText="Login"></Button>
      </form>
      <a
        className="text-primary flex items-center justify-center gap-1 text-sm "
        href=""
      >
        Create an account <img className="h-4 w-4" src={arrowRight} alt="" />
      </a>
    </section>
  );
}

export default Login;
