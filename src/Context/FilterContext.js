/** @format */

import { createContext, useContext, useReducer, useEffect } from "react";
import axios from "axios";
import { projectsReducer } from "../Reducer/reducer";

const FilterContext = createContext(null);
const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(projectsReducer, {
    data: [],
    genre: "",
    url: "",
    search: "",
    dragable: [],
    id: [],
    dragid: [],
    cart: [],
  });

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
          // setAnime(response.data);

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
  }, []);

  return (
    <FilterContext.Provider value={{ state, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};
const useFilter = () => useContext(FilterContext);
export { FilterProvider, useFilter };
