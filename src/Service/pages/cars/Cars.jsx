import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../../../services/axiosClient";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

const Cars = () => {
  const [cars, setCars] = useState([]);
  console.log("🚀 ~ Cars ~ cars:", cars)

  const getAllUsers = async() =>{
   const res = await axiosClient('/api/company/cars')
   setCars(res.data.data);
  }
  useEffect(() => {
    getAllUsers();
  }, []);

  const deleteUserData = async (id) => {
    await axiosClient.delete(`/api/company/cars/${id}`)
    getAllUsers()
  };

  return (
     <div>
       <div className="ml-64 pr-46 bg-white rounded-lg shadow dark:border dark:bg-yellow-500 dark:border-yellow-400">
        <div className="p-6 space-y-4 sm:m-6">
      <div>
     <h1 className="text-center items-center text-white bg-yellow-500 w-64 h-6 rounded-lg">Cars Details</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead> Vehicle Model </TableHead>
            <TableHead> Vehicle Registration Certificate </TableHead>
            <TableHead> Vehicle Plate Number </TableHead>
            <TableHead> Driver ID </TableHead>
            <TableHead> </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cars.map((user, index) => (
            <TableRow key={index}>
              <TableCell> {user.vehicle_model} </TableCell> 
              <TableCell> {user.vehicle_registration_certificate} </TableCell>
              <TableCell> {user.vehicle_plate_number} </TableCell>
              <TableCell> {user.driver_id} </TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Link
                  to={`/cars/${user.id}/edit`}
                  >
                  <Button variant="yellow"> Edit </Button></Link>
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button variant="destructive">Delete </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                            <AlertDialogDescription>
                              This action cannot be undone. This will permanently delete your account and remove your data from our servers.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction variant="destructive" onClick={() => deleteUserData(user.id)}>Delete </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
            </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
     </div>
     </div> 
     </div>
     </div>
    
    
  );
};

export default Cars;
