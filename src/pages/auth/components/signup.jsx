import React, { useState } from "react";
import { Fade } from "react-reveal";
import { Checkbox, Spinner, useToast } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { UseSignup } from "../hooks/useSignup";

function Signup(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [userName, setUserName] = useState("");
  const [name, setName] = useState("");
  const { signup, isLoading } = UseSignup();
  const nav = useNavigate();
  const toast = useToast();

  const handleSignup = async (email, password, name) => {
    if (password.length < 6) {
      toast({
        title: "Invalid password",
        description: "password must contain atleast 6 characters",
        status: "error",
        isClosable: true,
        position: "top",
        duration: 4000,
        variant: "subtle",
      });
      return;
    }
    if (!name) {
      toast({
        title: "Error",
        description: "must provide your name",
        status: "error",
        isClosable: true,
        position: "top",
        duration: 4000,
        variant: "subtle",
      });
      return;
    }
  

    console.log(email, password, name);
    const success = await signup({
      email,
      password,
      name,
    });
  };


  return (
    <div>
      <Fade>
        <form autoComplete={false}>
          <input
            type="text"
            className=" mt-3 form-control "
            placeholder="Your name"
            required
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
         
          <input
            type="email"
            className=" mt-3 form-control "
            placeholder="email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            className=" mt-3 form-control "
            placeholder="password"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <input
            type="password"
            className=" mt-3 form-control "
            placeholder="retype password"
            required
            value={retypePassword}
            onChange={(e) => {
              setRetypePassword(e.target.value);
            }}
          />


          {!isLoading && (
            <div
              className="btn btn dark_bg text-white w-100 mt-3"
              onClick={() => handleSignup(email, password, name)}
            >
              SIGN UP
            </div>
          )}
          {isLoading && (
            <div className=" mt-3">
              <Spinner />
            </div>
          )}
        </form>
        {/* <div>
          <small>Already have an account?</small>
        </div> */}
        {/* <div className="mt-1 ">
          <small>LOGIN</small>
        </div> */}
      </Fade>
    </div>
  );
}

export default Signup;
