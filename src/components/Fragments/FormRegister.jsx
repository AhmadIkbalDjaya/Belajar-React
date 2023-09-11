import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

export default function FormRegister() {
  return (
    <form action="">
      <InputForm
        name="name"
        type="text"
        label="FullName"
        placeholder="Input Full Name"
      />
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
      <InputForm
        name="confirmPassword"
        type="password"
        label="Confirm Password"
        placeholder="***"
      />
      <Button classname="bg-blue-600 w-full">Register</Button>
    </form>
  );
}
