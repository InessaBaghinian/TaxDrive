import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { addUser, editUser, getUser } from "../../Api";
import { Label } from "../../../components/Label";
import { useEffect } from "react";
import { formatInputValue } from "../../../lib/utils";

const initialValues = {
  name: "",
  username: "",
  email: "",
  phone: "",
};

const DriversAddOrEdit = () => {
  const [user, setUser] = useState(initialValues);
  const { name, username, email, phone } = user;
  const navigte = useNavigate();
  const { id } = useParams();
  console.log("🚀 ~ DriversAddOrEdit ~ id:", id);

  const getUserData = async () => {
    const response = await getUser(id);
    const data = response.data
      setUser({
        name: data.name,
        username: data.username,
        email: data.email,
        phone: data.phone
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

  const addUserDetail = async () => {
    if(id){
      await editUser({
        user,
        id,
      });
    } else{
      await addUser(user);
    }
    navigte("/drivers");
  };

  return (
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
      <div className="max-w-sm mx-auto">
        <h1 className="text-yellow-500 font-bold text-3xl text-center">
          {id ? 'Edit': 'Add'} New Driver
        </h1>
        <div>
          <Label>Full Name</Label>
          <Input
            onChange={(e) => valueChange(e)}
            type="text"
            name="name"
            value={name}
          />
        </div>
      
        <div>
          <Label>Email</Label>
          <Input
            onChange={(e) => valueChange(e)}
            type="email"
            name="email"
            value={email}
          />
        </div>
        <div>
          <Label>Car Number</Label>
          <Input
            onChange={(e) => valueChange(e)}
            type="text"
            name="username"
            value={username}
          />
        </div>
        <div>
          <Label> Phone </Label>
          <Input
            onChange={(e) => valueChange(e,true)}
            type="text"
            name="phone"
            value={phone}
          />
        </div>

        <Button 
          variant="yellow"
          onClick={() => addUserDetail()}
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