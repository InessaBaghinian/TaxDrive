import { Toaster } from "@/components/ui/toaster";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Toaster />
    </>
  );
}

export default App;
