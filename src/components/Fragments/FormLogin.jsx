import InputForm from "../Elements/Input/index";
import Button from "../Elements/Button/index";

export default function FormLogin() {
  return (
    <form action="">
      <InputForm
        name="email"
        type="email"
        label="Email"
        placeholder="ikbaldjaya@gmail.com"
      />
      <InputForm
        name="password"
        type="password"
        label="Password"
        placeholder="***"
      />
      <Button classname="bg-blue-600 w-full">Login</Button>
    </form>
  );
}
