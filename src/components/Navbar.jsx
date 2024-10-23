import Cookies from "js-cookie";
import { NavLink } from "react-router-dom";
import { Button } from "./ui/button";
import TaxD_original_2 from "../assets/TaxD_original_2.png";

const Navbar = () => {
  const handleLogout = async () => {
    // const res = await axios.get("/logout");
    Cookies.remove("driveTaxToken");
    window.location.replace("/login");
    // navigate('/login')
  };
  return (
    <>
      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 shrink-0 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-800">
          <div className="space-y-2 font-medium">
            <img src={TaxD_original_2} className="w-56 pb-16" alt="logo" />
           
            <div className="flex items-center p-2 text-white bg-yellow-500 rounded-lg hover:bg-white hover:text-yellow-500">
              <NavLink classNameName="flex-1 ms-3 whitespace-nowrap" 
              to="/"
              >
                {" "}
                Dashboard{" "}
              </NavLink>
            </div>

            <div className="flex items-center p-2 text-white bg-yellow-500 rounded-lg hover:bg-white hover:text-yellow-500">
              <NavLink
                classNameName="flex-1 ms-3 blackspace-nowrap"
                to="/drivers"
              >
                {" "}
                Drivers Details{" "}
              </NavLink>
            </div>

            <div className="flex items-center p-2 text-white bg-yellow-500 rounded-lg hover:bg-white hover:text-yellow-500">
              <NavLink
                classNameName="flex-1 ms-3 whitespace-nowrap"
                to="/drivers/add"
              >
                {" "}
                Add New Driver{" "}
              </NavLink>
            </div>

            <div className="flex items-center p-2 text-white bg-yellow-500 rounded-lg hover:bg-white hover:text-yellow-500">
              <NavLink
                classNameName="flex-1 ms-3 blackspace-nowrap"
                to="/cars"
              >
                {" "}
                Cars Details{" "}
              </NavLink>
            </div>

            <div className="flex items-center p-2 text-white bg-yellow-500 rounded-lg hover:bg-white hover:text-yellow-500">
              <NavLink
                classNameName="flex-1 ms-3 blackspace-nowrap"
                to="/cars/add"
              >
                {" "}
                Add New Car{" "}
              </NavLink>
            </div>

          </div>

           <div className="mt-36">
              <Button variant="yellow" onClick={handleLogout}>
                {" "}
                Logout
              </Button>
            </div>
            
        </div>
      </aside>
    </>
  );
};

export default Navbar;
