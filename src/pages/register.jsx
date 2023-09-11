import AuthLayouts from "../components/Layouts/AuthLayouts";
import FormRegister from "../components/Fragments/FormRegister";
import { Link } from "react-router-dom";

export default function RegisterPage() {
  return (
    <AuthLayouts title="Register">
      <FormRegister />
      <p className="text-sm mt-5 text-center">
        Have an account?{" "}
        <Link to={"/login"} className="font-bold text-blue-600">
          Login
        </Link>
      </p>
    </AuthLayouts>
  );
}
