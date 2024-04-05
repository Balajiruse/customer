import { useNavigate } from "react-router-dom";
import pic1 from '../assets/Balaji.jpg'

export default function DashboardTopar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
    window.location.reload();
  };

  return (
    <div className="grid card rounded-box place-items-center m-1">
      <div className="navbar bg-base-100 m-2 ">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl font-bold">Money Manager</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            {/* <li className="p-2 btn-sm bg-base-100" onClick={() => navigate('/Expense')}> Expense</li>
          <li className="p-2 btn-sm bg-base-100" onClick={() => navigate('/Income')}> Income</li> */}
            <li
              className="p-2 btn-sm bg-base-100 text-xl font-bold"
              onClick={() => navigate("/addexpense")}
            >
              Add Expense
            </li>
            {/* <li className="p-2 btn-sm bg-base-100" onClick={() => navigate('/addincome')}>Add Income</li> */}
            <li className="p-2 btn-sm bg-base-100 text-xl font-bold" onClick={() => logout()}>
              Logout
            </li>
          </ul>
          <div className="dropdown dropdown-hover dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src={pic1}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}