import InputForm from "../Elements/Input/index";
import Button from "../Elements/Button/index";
import { useEffect, useRef, useState } from "react";
import { login } from "../../services/auth.service";

export default function FormLogin() {
  const [loginFailed, setLoginFailed] = useState("");
  const handleLogin = (event) => {
    event.preventDefault();
    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };
    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/products";
      } else {
        setLoginFailed(res.response.data);
      }
    });
  };

  const usernameRef = useRef(null);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);
  return (
    <form onSubmit={handleLogin}>
      <InputForm
        name="username"
        type="text"
        label="Username"
        placeholder="ikbaldjaya"
        ref={usernameRef}
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
      {loginFailed && (
        <p className="text-red-500 text-center mt-5">{loginFailed}</p>
      )}
    </form>
  );
}
