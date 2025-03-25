"use client";
import DateReserve from "@/components/DateReserve";
import { Select, MenuItem, TextField, SelectChangeEvent } from "@mui/material";
import { getServerSession } from "next-auth";
import getUserProfile from "@/libs/getUserProfile";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { addBooking } from "@/redux/features/bookSlice";
import { useRef } from "react";
import { useSession } from "next-auth/react";
import Email from "next-auth/providers/email";
import userRegister from "@/libs/userRegister";

export default function Booking() {
  const userPass = useRef("");
  const userName = useRef("");
  const userEmail = useRef("");
  const userPhone = useRef("");

  const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  const validateEmail = (e: string) => {
    if (e.match(isValidEmail)) {
      return true;
    } else {
      return false;
    }
  };

  const { data: session } = useSession();

  console.log(session);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    userName.current=event.target.value;
  };

  const handleTelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    userPhone.current=event.target.value;
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    userEmail.current=event.target.value;
  };

  const handlePassChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    userPass.current=event.target.value;
  };

  const registerUser = async () => {
    const userPassExists = userPass.current.length != 0;
    const userTelCorrect = userPhone.current.length == 10;
    const userEmailExists = userEmail.current.length != 0;
    const userNameExists = userName.current.length != 0;
    const userEmailCorrect = validateEmail(userEmail.current);

    if (userPassExists && userTelCorrect && userEmailExists && userNameExists) {
      if (userEmailCorrect) {
        const registerInfo = {
          name : userName.current,
          email : userEmail.current,
          phone : userPhone.current,
          pass : userPass.current
        }
        console.log("Trying to Register with")
        console.log(registerInfo)
        try{
          const registeredUser = await userRegister(userName.current ,  userEmail.current, userPass.current, userPhone.current);
          if(registeredUser){
          console.log(registeredUser)
          alert("registered successfully")
          }
        }catch(Error){
          alert(Error);
        }
      } else {
        alert("Please input a valid email");
      }
    } else {
      alert("Please input valid info");
    }
  };

  return (
    <>
      {!session ? (
        <main className="w-[100%] flex flex-col items-center space-y-9 my-20">
          <TextField
            variant="standard"
            name="Name-Lastname"
            label="Name-Lastname"
            className="w-[15%]"
            onChange={handleNameChange}
          />
          <TextField
            variant="standard"
            name="Contract-Number"
            label="Contact-Number"
            className="w-[15%]"
            onChange={handleTelChange}
          />
          <TextField
            variant="standard"
            name="Email"
            label="Email"
            className="w-[15%]"
            onChange={handleEmailChange}
          />
          <TextField
            variant="standard"
            name="userPassword"
            label="Password"
            className="w-[15%]"
            onChange={handlePassChange}
          />
          <button
            name="Register"
            className="block bg-white text-black-600 border border-black border-800 font-semibold rounded hover:bg-black hover:text-white hover:border-transparent px-3 py-2 shadow-sm"
            onClick={registerUser}
          >
            Register
          </button>
        </main>
      ) : (
        <div className="flex flex-row justify-center my-20">
          <div>you are already logged in</div>
        </div>
      )}
    </>
  );
}
