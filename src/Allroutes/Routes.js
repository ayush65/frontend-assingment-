/** @format */

import React from "react";
import { Routes, Route } from "react-router-dom";
import Cart from "../Cart/Cart";
import Homepage from "../Homepage/Homepage";

const Routess = () => {
  return (
    <div>
      <Routes>
        <Route exact path='/cart' element={<Cart />}></Route>
        <Route exact path='/' element={<Homepage />}></Route>
      </Routes>
    </div>
  );
};

export default Routess;
