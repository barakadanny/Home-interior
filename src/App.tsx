import { Loader2 } from "lucide-react";
import { Button } from "./components/ui/button";
import { useAppSelector } from "./hooks";

function App() {
  const { name } = useAppSelector((state) => state.userState);
  console.log(name);
  return (
    <>
      <h1 className="text-3xl font-bold underline text-red-500">
        Hello world!
      </h1>
      <Button disabled size="lg">
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Please wait
      </Button>
    </>
  );
}

export default App;
