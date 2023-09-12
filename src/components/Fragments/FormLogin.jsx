import InputForm from "../Elements/Input/index";
import Button from "../Elements/Button/index";

export default function FormLogin() {
  const handleLogin = (event) => {
    event.preventDefault();
    localStorage.setItem("email", event.target.email.value);
    localStorage.setItem("password", event.target.password.value);
    window.location.href = "/products";
  };
  return (
    <form onSubmit={handleLogin}>
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
      <Button type="submit" classname="bg-blue-600 w-full">
        Login
      </Button>
    </form>
  );
}
