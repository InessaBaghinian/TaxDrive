// import axios from "axios";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Cookies from "js-cookie";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/Label";
import { useToast } from "@/hooks/use-toast";
import { Link, useNavigate } from "react-router-dom";
import axiosClient from "../../services/axiosClient";
import { Toaster } from "@/components/ui/toaster";
import TaxDrive_2 from "@/assets/TaxDrive_2.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()

  async function handleLogin() {
    const data = {
      email,
      password,
      type: 2,
    };
    setLoading(true);
    try {
      const res = await axiosClient.post("login", data);
      const resToken = res.data.access_token;
      if (resToken) {
        Cookies.set("driveTaxToken", resToken);
        navigate("/");
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
      <Toaster />
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <img src={TaxDrive_2} alt="logo"/>
           
            <form className="space-y-4 md:space-y-6" action="#">
              
              <div>
                <Label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </Label>
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required=""
                />
              </div>
            
              <div>
                <Label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </Label>
                <Input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              
              <div className="flex items-center justify-between">
                <Link to="/forgetPassword"
                  className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Forgot password?
                </Link>
              </div>
              
              <Button
                disabled={loading}
                onClick={handleLogin}
                variant="trnaspert"
                className="bg-yellow-500 text-background w-full"
              >
                Sign in
              </Button>
             
             <div className="text-center">
             <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Dont have an account yet?
              </p>
              <Link
                to="/registration"
                className="font-medium text-yellow-500  hover:underline dark:text-primary-500">
                Sign up
              </Link>
             </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
