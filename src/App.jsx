import Button from "./components/Elements/Button";

export default function App() {
  return (
    <div className="flex justify-center min-h-screen bg-blue-600 items-center gap-x-5">
      <Button variant="bg-blue-700"> 
        Login
      </Button>
      <Button variant="bg-red-700"> 
        Logout
      </Button>
      <Button></Button>
    </div>
  );
}
