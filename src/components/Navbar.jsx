
import Cookies from "js-cookie";
import { NavLink } from "react-router-dom";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Navbar = () => {
  const handleLogout = async () => {
    // const res = await axios.get("/logout");
    Cookies.remove("my-token");
    window.location.replace("/login");
    // navigate('/login')
  };
  return (
    <>
    <div className="bg-gray-800 border-gray-200 dark:bg-gray-900">
       <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
         
      
            <Button variant="yellow" onClick={handleLogout}> Search</Button>
        </div>
      </div>
{/* <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
   <span class="sr-only">Open sidebar</span>
   <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
   <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
   </svg>
</button> */}

<aside id="default-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
   <div class="h-full px-3 py-4 overflow-y-auto bg-gray-800">
      <div class="space-y-2 font-medium">
      
          <div class="flex items-center p-2 text-yellow-500 rounded-lg hover:bg-yellow-500 hover:text-white"> 
             <NavLink
              className="flex-1 ms-3 whitespace-nowrap"
              to="/"
            >
              {" "}
              Dashboard{" "}
            </NavLink>
          </div>
         
         <div class="flex items-center p-2 text-yellow-500 rounded-lg hover:bg-yellow-500 hover:text-white">
            <NavLink
              className="flex-1 ms-3 blackspace-nowrap"
              to="/drivers"
            >
              
              {" "}
               Drivers' Details{" "}
            </NavLink>
         </div>
          
          <div class="flex items-center p-2 text-yellow-500 rounded-lg hover:bg-yellow-500 hover:text-white">
            <NavLink
              className="flex-1 ms-3 whitespace-nowrap"
              to="/drivers/add"
            >
              {" "}
              Add New Driver{" "}
            </NavLink>
          </div>
            

          <div>
            <Button variant="yellow" onClick={handleLogout} > Logout</Button>
          </div>
      </div>
      </div>
</aside>
    </>
  );
};

export default Navbar;



// import Cookies from "js-cookie";
// import { NavLink } from "react-router-dom";
// import { Button } from "./ui/button";

// const Navbar = () => {
//   const handleLogout = async () => {
//     // const res = await axios.get("/logout");
//     Cookies.remove("my-token");
//     window.location.replace("/login");
//     // navigate('/login')
//   };
//   return (
    
//     <div className="bg-white border-gray-200 dark:bg-gray-900">
//       <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//         <p className="self-center text-2xl font-semibold whitespace-nowrap text-white-500">
//           Tax Drive
//         </p>
//         <div className="hidden w-full md:block md:w-auto" id="navbar-default">
//           <nav className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//             <NavLink
//               className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-500 md:p-0 dark:text-white md:dark:hover:text-yellow-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent0"
//               to="/"
//             >
//               {" "}
//               Home{" "}
//             </NavLink>
//             <NavLink
//               className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-500 md:p-0 dark:text-white md:dark:hover:text-yellow-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent0"
//               to="/drivers"
//             >
//               {" "}
//               Drivers' Details{" "}
//             </NavLink>
//             <NavLink
//               className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-500 md:p-0 dark:text-white md:dark:hover:text-yellow-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent0"
//               to="/drivers/add"
//             >
//               {" "}
//               Add New Driver{" "}
//             </NavLink>
//             <Button variant="yellow" onClick={handleLogout}> Logout</Button>
//           </nav>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;





