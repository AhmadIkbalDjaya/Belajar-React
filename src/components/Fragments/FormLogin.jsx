import InputForm from "../Elements/Input/index";
import Button from "../Elements/Button/index";
import { useEffect, useRef } from "react";

export default function FormLogin() {
  const handleLogin = (event) => {
    event.preventDefault();
    localStorage.setItem("email", event.target.email.value);
    localStorage.setItem("password", event.target.password.value);
    window.location.href = "/products";
  };

  const emailRef = useRef(null);

  useEffect(() => {
    emailRef.current.focus();
  }, []);
  return (
    <form onSubmit={handleLogin}>
      <InputForm
        name="email"
        type="email"
        label="Email"
        placeholder="ikbaldjaya@gmail.com"
        ref={emailRef}
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
