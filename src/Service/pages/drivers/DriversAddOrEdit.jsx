import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { useEffect } from "react";
import { Label } from "../../../components/Label";
import { formatInputValue } from "../../../lib/utils";
import axiosClient from "../../../services/axiosClient";

const initialValues = {
  name: "",
  email: "",
  phone_number: "",
  driver_license_number: "",
  password: "",
};

const DriversAddOrEdit = () => {
  const [user, setUser] = useState(initialValues);
  console.log("🚀 ~ DriversAddOrEdit ~ user:", user)
  const { name, email, phone_number, driver_license_number, password } = user;
  const navigte = useNavigate();
  const { id } = useParams();
  const {toast} = useToast()
  console.log("🚀 ~ DriversAddOrEdit ~ id:", id);

  const getUserData = async () => {
    const response = await axiosClient.getUser();
    const data = response.data.data
      setUser({
        name: data.name,
        email: data.email,
        phone_number: data.phone_number,
        driver_license_number: data.driver_license_number,
        password: password
      })
  };

  useEffect(()=>{
    if(id){
      getUserData()
    }
  },[])

  const valueChange = (e, isNumber) => {
    setUser({ ...user, [e.target.name]: isNumber ? formatInputValue(e.target.value, 'integerWithDash'): e.target.value });
  };

  const addDriver = async () => {

      try{
        if(id){
          await axiosClient.put(`/api/company/drivers/${id}`,user);
        } else {
          await axiosClient.post(`/api/company/drivers`,user);
        }
    navigte("/drivers");

      } catch(error){
        if (error) {
          console.log(11111);
          
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
  };

  return (
  <div className="flex flex-col items-center justify-center px-6 py-8 m-auto md:h-screen lg:py-0">
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
      <div className="max-w-sm mx-auto">
        <h1 className="text-yellow-500 font-bold text-3xl text-center">
          {id ? 'Edit': 'Add'} New Driver
        </h1>
        
        <div className="pt-4">
          <Label>Name</Label>
          <Input
            onChange={(e) => valueChange(e)}
            type="text"
            name="name"
            value={name}
          />
        </div>
      
        <div className="pt-4">
          <Label>User Name</Label>
          <Input
            onChange={(e) => valueChange(e)}
            type="email"
            name="email"
            value={email}
          />
        </div>
       
        <div className="pt-4"> 
          <Label> Phone Number </Label>
          <Input
            onChange={(e) => valueChange(e,true)}
            type="number"
            name="phone_number"
            value={phone_number}
          />
        </div>
        
         <div className="pt-4">
          <Label> Driver License Number</Label>
          <Input
            onChange={(e) => valueChange(e)}
            type="text"
            name="driver_license_number"
            maxLength={8}
            value={driver_license_number}
          />
        </div>

        <div className="pt-4">
          <Label>Password</Label>
          <Input
            onChange={(e) => valueChange(e)}
            type="text"
            name="password"
            value={password}
          />
        </div>

        <Button 
          variant="yellow"
          onClick={() => addDriver()}
          className="mt-8"
        >
              {id ? 'Update': 'Add New'} Driver
        </Button>
      </div>
    </div>
    </div>
    </div>
  );
};

export default DriversAddOrEdit;

