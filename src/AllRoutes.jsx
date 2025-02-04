import React from "react";
import { Route, Routes } from "react-router-dom";
import Authpage from "./Auth/Authpage.jsx";
import Homepage from "./page/Homepage.jsx";
import Productpage from "./page/Productpage.jsx";
import Descriptionpage from "./page/Descriptionpage.jsx";
import Cartpage from "./page/Cartpage.jsx";

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/auth" element={<Authpage />}></Route>
        <Route path="/card" element={<Productpage />}></Route>
        <Route path="/description/:id" element={<Descriptionpage />}></Route>
        <Route path="/cart" element={<Cartpage />}></Route>
      </Routes>
    </div>
  );
}

export default AllRoutes;
