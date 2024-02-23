import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../hook/UserContext";
import { FaUser } from "react-icons/fa";

export default function Header() {
  const { user } = useContext(UserContext);
  return (
    <>
      <header className="w-full flex flex-row items-center justify-between sm:p-2 md:p-2 lg:p-4 xl:p-6 2xl:p-6">
        <div style={{ fontFamily: 'Times New Roman' }} className="sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-4xl">
          IPB智藥管家
        </div>
        <Link to={user ? '/logout' : '/login'} className="flex flex-row gap-x-4 sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-3xl">
          <div>
            <FaUser />
          </div>
          {user ?
            <div>
              {user.name}
            </div> :
            <div>
              Sign In
            </div>
          }
        </Link>
      </header>
    </>
  );
}