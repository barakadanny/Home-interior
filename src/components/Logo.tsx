import { Link } from "react-router-dom";
import { Lightbulb } from "lucide-react";

function Logo() {
  return (
    <Link
      to="/"
      className="hidden lg:flex justify-center items-center bg-primary p-2 rounded-lg text-white "
    >
      <Lightbulb className="w-5 h-5" />
    </Link>
  );
}

export default Logo;
