import { Outlet, NavLink, useNavigate } from "react-router-dom"
import { useEffect } from "react";
import React from 'react';
import Footer from "../generalComponents/footer";
import NavBar from "../generalComponents/navBar";
import { useCheckLocalStorageForUser } from "../pages/auth/hooks/useCheckLocalStorageForUser";

function RootLayout(props) {
  useCheckLocalStorageForUser();
  return (
    <div className="root-layoute"
    //  style={{overflow:'hidden'}}
    >
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default RootLayout;