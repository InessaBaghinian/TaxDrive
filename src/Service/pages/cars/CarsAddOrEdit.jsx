import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { useEffect } from "react";
import { Label } from "../../../components/Label";
import { formatInputValue } from "../../../lib/utils";
import axiosClient from "../../../services/axiosClient";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const initialValues = {
  vehicle_model: "",
  vehicle_registration_certificate: "",
  vehicle_plate_number: "",
  driver_id: "",
};

const CarsAddOrEdit = () => {
  const [user, setUser] = useState(initialValues);
  const [freeDrivers, setFreeDrivers] = useState([]);
  const [driverName, setDriverName] = useState("");
  console.log("🚀 ~ CarsAddOrEdit ~ user:", user);
  const {
    vehicle_model,
    vehicle_registration_certificate,
    vehicle_plate_number,
    driver_id,
  } = user;
  const navigte = useNavigate();
  const { id } = useParams();
  const { toast } = useToast();
  console.log("🚀 ~ CarsAddOrEdit ~ id:", id);

  const getCarData = async () => {
    const response = await axiosClient(`/api/company/cars/${id}`);
    const data = response.data.data;
    setUser({
      vehicle_model: data.vehicle_model,
      vehicle_registration_certificate: data.vehicle_registration_certificate,
      vehicle_plate_number: data.vehicle_plate_number,
      // driver_id: data.driver.id + '',
    });
    setDriverName(data.driver.name);
  };

  const getFreeDriversData = async () => {
    const res = await axiosClient(`/api/company/free-drivers`);
    setFreeDrivers(res.data.data);
  };

  useEffect(() => {
    if (id) {
      getCarData();
    }
    getFreeDriversData();
  }, []);

  const valueChange = (e, isNumber) => {
    setUser({
      ...user,
      [e.target.name]: isNumber
        ? formatInputValue(e.target.value, "integerWithDash")
        : e.target.value,
    });
  };

  const handleSelectChange = (value) => {
    setUser({
      ...user,
      driver_id: value,
    });
  };

  const addCar = async () => {
    const data = {
      ...user,
      driver_id: user.driver_id === "No Driver" ? null : user.driver_id,
    };
    try {
      if (id) {
        await axiosClient.put(`/api/company/cars/${id}`, data);
      } else {
        await axiosClient.post(`/api/company/cars`, data);
      }
      navigte("/cars");
    } catch (error) {
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
              {id ? "Edit" : "Add"} New Car
            </h1>

            <div className="pt-4">
              <Label> Vehicle Model</Label>
              <Input
                onChange={(e) => valueChange(e)}
                type="text"
                name="vehicle_model"
                value={vehicle_model}
              />
            </div>

            <div className="pt-4">
              <Label>Vehicle Registration Certificate</Label>
              <Input
                onChange={(e) => valueChange(e)}
                type="text"
                name="vehicle_registration_certificate"
                value={vehicle_registration_certificate}
              />
            </div>

            <div className="pt-4">
              <Label> Vehicle Plate Number </Label>
              <Input
                onChange={(e) => valueChange(e)}
                type="text"
                name="vehicle_plate_number"
                value={vehicle_plate_number}
              />
            </div>

            <Select
              value={driver_id}
              onValueChange={(value) => handleSelectChange(value)}
            >
              <p className="text-yellow-500 pt-4"> Driver Name</p>
              <SelectTrigger className="w-[385px]">
                <SelectValue
                  placeholder={driverName ?? "Choose a driver"}
                  className="text-yellow-500"
                />
              </SelectTrigger>
              <SelectContent> 
                <SelectGroup value={driver_id}>
                  <SelectItem value="No Driver">No Driver</SelectItem>
                  {[
                    freeDrivers.map((driver) => (
                      <SelectItem key={driver.id} value={driver.id + ""}>
                        {driver.name}
                      </SelectItem>
                    )),
                  ]}
                </SelectGroup>
              </SelectContent>
            </Select>

            <Button variant="yellow" onClick={() => addCar()} className="mt-8">
              {id ? "Update" : "Add New"} Car
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarsAddOrEdit;
