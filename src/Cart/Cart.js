/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useFilter } from "../Context/FilterContext";
import "./Cart.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const { state, dispatch } = useFilter();

  const [anime, setAnime] = useState([]);

  const [id] = useState([]);

  useEffect(() => {
    const initFetch = async () => {
      const options = {
        method: "GET",
        url: "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json",
      };

      axios
        .request(options)
        .then(function (response) {
          console.log(response.data);
          setAnime(response.data);

          dispatch({
            type: "FETCH_DATA",
            payload: { data: response.data, dragable: response.data },
          });

          //  console.log(anime[5].genres[0].name);
        })
        .catch(function (error) {
          console.error(error);
        });
    };
    initFetch();
    localStorage.setItem("id", JSON.stringify(id));
  }, [dispatch, id]);

  return (
    <div>
      <h1>Shopping Cart</h1>
      {state.cart.map((item, key) => {
        return (
          <div className='card1' draggable key={item.id}>
            <img className='img-grid1' src={item.imageURL} alt='' />
            <div className='item-content1'>
              <b>Rs {item.price}</b>
              <b>{item.name}</b>
            </div>
            <select className='btn-add-to-delete'>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
            </select>
            <button
              className='btn-add-to-delete'
              onClick={() => {
                dispatch({
                  type: "FETCH_COLOR2",
                  payload: { color: "Green", data: anime, id: item.id },
                });
                toast("Product Deleted from cart");
              }}>
              Delete
            </button>
          </div>
        );
      })}
      <ToastContainer />
    </div>
  );
};

export default Cart;
