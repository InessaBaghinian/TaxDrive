// import { useEffect } from "react";
// import { useForm } from "react";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/hooks/use-toast";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import {useState} from "react";
import { Label } from "../../components/Label";
import { Link, useNavigate } from "react-router-dom";
import TaxDrive_2 from "@/assets/TaxDrive_2.png";
import axiosClient from "../../services/axiosClient";
import Cookies from "js-cookie";

const Registration = () => {
  const [name, setName] = useState("");
  const [company_name, setCompany_name] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPassword_confirmation] = useState("");
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()

async function handleSubmit(e) {
  e.preventDefault()
  const data = {
    name,
    company_name,
    email,
    password,
    password_confirmation
  };
  setLoading(true);
  try {
    const res = await axiosClient.post("/register", data);
    const resToken = res.data.access_token;
    if (resToken) {
      Cookies.set("driveTaxToken", resToken);
      navigate("/drivers");
    }
  } catch (error) {
    toast({
      title: "Something went wrong",
      variant: "destructive",
    });
    if (error) {
      if (error?.response?.data.message) {
        toast({
          title: error.response.data.message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Something went wrong",
          variant: "destructive",
        });
      }
    }
  }
  setLoading(false);
}

    return (
      <section className="bg-gray-50 dark:bg-gray-900">
      < Toaster />
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <img src={TaxDrive_2} className="w-96 object-center" alt="logo"/>
            <p className="text-yellow-500 font-extrabold text-center size"> Registration Form</p>
          <form
            className="mb-4 w-full grid grid-cols-1 gap-6"
            onSubmit={handleSubmit}
          >
            <div>
                <Label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Name
                </Label>
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="name"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name"
                  required
                />
              </div>

              <div>
                <Label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Password
                </Label>
                <Input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  name="password"
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="***********"
                  required
                />
              </div>
              
              <div>
                <Label
                  htmlFor="company_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Company Name
                </Label>
                <Input
                  value={company_name}
                  onChange={(e) => setCompany_name(e.target.value)}
                  type="text"
                  name="company_name"
                  id="company_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required
                />
              </div>
              
              <div>
                <Label
                  htmlFor="password_confirmation"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                 Comfirm Your Password
                </Label>
                <Input
                  value={password_confirmation}
                  onChange={(e) => setPassword_confirmation(e.target.value)}
                  type="password"
                  name="password_confirmation"
                  id="password_confirmation"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="***********"
                  required
                />
              </div>

              <div>
                <Label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </Label>
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="email"
                  required
                />
              </div>

            <div className="col-span-2 grid grid-flow-row-3 gap-3">
              {/* <Button type="reset" variant="outlined"  onClick={() => reset()}>
                Reset
              </Button> */}
              <Button variant="yellow" onClick={handleSubmit}>Create Account</Button>
              <Link to="/login" className="text-yellow-500 text-center">Back to Login Page</Link>
            </div>
          </form>
      </div>
      </div>
      </div>
      </section>
    );
  };
  
  export default Registration;