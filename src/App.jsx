import { Toaster } from "@/components/ui/toaster";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="flex">
      <Navbar />
      <div className="flex-1">
        <Outlet />
      </div>
      <Toaster />
    </div>
  );
}

export default App;
