const Button = (props) => {
  const {children = "...", variant="bg-black"} = props;
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${variant} text-white`}
      type="submit"
    >
      {children}
    </button>
  );
};

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
