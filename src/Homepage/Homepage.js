/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./Homepage.css";
import { useFilter } from "../Context/FilterContext";

const Homepage = () => {
  const [anime, setAnime] = useState([]);
  const [value, setValue] = useState("");

  const dragStared = (e, id) => {
    console.log("drag has started", id);
    e.dataTransfer.setData("mal_id", id);
  };

  const { state, dispatch } = useFilter();

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
  }, [anime, dispatch]);

  return (
    <div>
      <div className='sidebar-container'>
        <h3>Color</h3>
        <div>
          <input
            type='checkbox'
            onChange={() => {
              dispatch({
                type: "FETCH_COLOR",
                payload: { color: "Red", data: anime },
              });
            }}
          />
          <label>Red</label>
        </div>
        <div>
          <input
            type='checkbox'
            onChange={() => {
              dispatch({
                type: "FETCH_COLOR",
                payload: { color: "Blue", data: anime },
              });
            }}
          />
          <label>Blue</label>
        </div>
        <div>
          <input
            type='checkbox'
            onChange={() => {
              dispatch({
                type: "FETCH_COLOR",
                payload: { color: "Green", data: anime },
              });
            }}
          />
          <label>Green</label>
        </div>

        <div className='sidebar-content'>
          <h3>Gender</h3>
          <div>
            <input
              type='checkbox'
              onChange={() => {
                dispatch({
                  type: "FETCH_GENDER",
                  payload: { gender: "Men", data: anime },
                });
              }}
            />
            <label>Men</label>
          </div>
          <div>
            <input
              type='checkbox'
              onChange={() => {
                dispatch({
                  type: "FETCH_GENDER",
                  payload: { gender: "Women", data: anime },
                });
              }}
            />
            <label>Women</label>
          </div>
        </div>

        <div className='sidebar-content'>
          <h3>Price</h3>
          <div>
            <input
              type='checkbox'
              onChange={() => {
                dispatch({
                  type: "FETCH_PRICE",
                  payload: { price: 250, data: anime, value: 0 },
                });
              }}
            />
            <label>0 - Rs 250</label>
          </div>
          <div>
            <input
              type='checkbox'
              onChange={() => {
                dispatch({
                  type: "FETCH_PRICE",
                  payload: { price: 450, data: anime, value: 250 },
                });
              }}
            />
            <label>Rs 250 - 450</label>
          </div>
          <div>
            <input
              type='checkbox'
              onChange={() => {
                dispatch({
                  type: "FETCH_PRICE_EQUAL",
                  payload: { price: 450, data: anime, value: 250 },
                });
              }}
            />
            <label>Rs 450</label>
          </div>
        </div>

        <div className='sidebar-content'>
          <h3>Type</h3>
          <div>
            <input
              type='checkbox'
              onChange={() => {
                dispatch({
                  type: "FETCH_TYPE",
                  payload: { type: "Polo", data: anime },
                });
              }}
            />
            <label>Polo</label>
          </div>
          <div>
            <input
              type='checkbox'
              onChange={() => {
                dispatch({
                  type: "FETCH_TYPE",
                  payload: { type: "Hoodie", data: anime },
                });
              }}
            />
            <label>Hoodie</label>
          </div>
          <div>
            <input
              type='checkbox'
              onChange={() => {
                dispatch({
                  type: "FETCH_TYPE",
                  payload: { type: "Basic", data: anime },
                });
              }}
            />
            <label>Basic</label>
          </div>
        </div>
      </div>
      <div className='search-alingment'>
        <ul className='navbar-list-h1s'>
          <div className='form'>
            <input
              type='text'
              id='email'
              className='form__input'
              autoComplete='off'
              placeholder=' Search for Product'
              onChange={(e) => {
                setValue(e.target.value);
                dispatch({
                  type: "FETCH_SEARCH_NAME",
                  payload: { search: e.target.value, data: anime },
                });
              }}
            />
            <button
              className='search-button button'
              onClick={() =>
                dispatch({
                  type: "FETCH_SEARCH_NAME",
                  payload: { search: value, data: anime },
                })
              }>
              <AiOutlineSearch />
            </button>
          </div>
        </ul>
      </div>
      <div className='menu-container'>
        {state.data.map((item, key) => {
          return (
            <div
              className='card'
              draggable
              onDragStart={(e) => dragStared(e, item.id)}
              key={item.id}>
              <b>{item.name}</b>
              <img className='img-grid' src={item.imageURL} alt='' />
              <div className='item-content'>
                <b>Rs {item.price}</b>
                <button
                  className='btn-add-to-cart'
                  onClick={() => {
                    dispatch({
                      type: "FETCH_COLOR1",
                      payload: { color: "Green", data: anime, id: item.id },
                    });
                    toast("Product Added To cart");
                  }}>
                  Add to cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Homepage;
