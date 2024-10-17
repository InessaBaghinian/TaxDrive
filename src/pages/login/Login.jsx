import axios from "axios";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Cookies from "js-cookie";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import {Registration} from "./Registration"

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { toast } = useToast();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get("http://127.0.0.1:3000/users");
      const token = res.data[0].email;
      if (token) {
        Cookies.set("my-token", token);
      }

      window.location.replace("/")
      // setIsLoggedIn(true);
 
      // alert("Invalid username or password");
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Invalid username or password",
      });
    }
  };

  return (
    <section class="bg-gray-50 dark:bg-gray-900">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-center text-xl font-bold leading-tight tracking-tight text-yellow-500 md:text-2xl dark:text-white">
                 Tax Driver
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  <div class="flex items-center justify-between">
                      <div class="flex items-start">
                          <div class="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                          </div>
                          <div class="ml-3 text-sm">
                            <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                          </div>
                      </div>
                      <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                  </div>
                  <Button
              onClick={handleLogin}
              variant="trnaspert"
              className="bg-yellow-500 text-background w-full"
            >
              Sign in
            </Button>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don’t have an account yet? 
                  </p>
                  <Link to={Registration} class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
              </form>
          </div>
      </div>
  </div>
</section>
    // <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    //   <div className="max-w-md w-full space-y-8">
    //     <div>
    //       <h2 className="text-yellow-600 font-bold text-3xl text-center">
    //         Admin account
    //       </h2>
    //     </div>
    //     <form onSubmit={handleLogin}>
    //       <div className="mt-8 space-y-6">
    //         <Input
    //           type="text"
    //           value={username}
    //           onChange={(e) => setUsername(e.target.value)}
    //           placeholder="Username"
    //         />
    //         <Input
    //           type="password"
    //           value={password}
    //           onChange={(e) => setPassword(e.target.value)}
    //           placeholder="Password"
    //         />
    //         <Button
    //           onClick={handleLogin}
    //           variant="trnaspert"
    //           className="bg-yellow-700 text-background"
    //         >
    //           Sign in
    //         </Button>
    //       </div>
    //     </form>
    //   </div>
    //    <div className="inline-block border-[1px] justify-center w-20 border-yellow-600 border-solid"></div>
    //          <p className='text-gray-400 mt-4 text-sm'>Don't have an account?</p>
    //          <p className='text-yellow-500 mb-4 text-sm font-medium cursor-pointer' onClick={() => handleLogin(false)}>Create a New Account?</p>
    //     </div>
  )
}



export default Login;
