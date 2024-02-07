import logoSvg from "../assets/images/Logo.svg";
import arrowRight from "../assets/images/arrow-right.svg";
import { Button } from "../components/Button";
import LabeledInput from "../components/LabeledInput";
function Signup() {
  return (
    <section className="mx-auto flex h-screen  max-w-screen-lg flex-col items-center justify-center gap-8 ">
      <img src={logoSvg} alt="Bordable Logo" />
      <h1 className="text-center font-welcome text-4xl font-semibold">
        Welcome to Boardable
      </h1>
      <form className="flex w-80 flex-col gap-4 " action="">
        <LabeledInput name="username" label="Username" />
        <LabeledInput name="password" label="Password" />
        <Button className="h-11" buttonText="Signup"></Button>
      </form>
      <a className="flex items-center gap-1 text-sm text-primary " href="">
        Login to your account{" "}
        <img className="h-4 w-4" src={arrowRight} alt="" />
      </a>
    </section>
  );
}

export default Signup;
