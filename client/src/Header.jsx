import {Link} from "react-router-dom";
import {useContext} from "react";
import {UserContext} from "./UserContext.jsx";
// import LogOutDialog from "./components/LogOutDialog.jsx";

import { FaUser } from "react-icons/fa";

export default function Header() {
  const {user} = useContext(UserContext);
  return (
    <header className="w-full flex justify-end">
      <Link to={user?'/logout':'/login'} className="flex flex-row gap-x-4 text-2xl p-4">
        <div>
          <FaUser />
        </div>
        {user ? 
          <div>
            {user.name}
          </div> :
          <div>
            SignIn
          </div>
        }
      </Link>
    </header>
  );
}