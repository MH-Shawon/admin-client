import { Link, Outlet } from "react-router-dom";

import useAdmin from "../../hooks/useAdmin";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";


const AdminPanel = () =>
{
  const [ user ] = useAuthState( auth );
  const admin = useAdmin( user );
  return (


    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content text-center">
        <h2 className="text-5xl underline text-fuchsia-700 m-2">
          Admin Role
        </h2>
        <Outlet></Outlet>
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="w-36 rounded text-center mt-8  underline bg-blue-500  text-white uppercase font-bold text-2xl">
          {/* Sidebar content here */}
          <li>
            {admin &&
              <Link to='/adminpanel'>User</Link>}
          </li>

        </ul>

      </div>

    </div>
  );
};

export default AdminPanel;