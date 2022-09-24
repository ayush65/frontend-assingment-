/** @format */

export const initState = {
  data: [],
  genre: "",
  url: "",
  search: "",
  dragable: [],
  id: [],
  dragid: [],
  cart: [],
};

export const projectsReducer = (state, action) => {
  let filterStateCopy = { ...state };
  switch (action.type) {
    case "FETCH_DATA":
      let { data } = action.payload;
      console.log(action.payload);
      // console.log(data);
      return { ...filterStateCopy, data };

    case "FETCH_COLOR":
      console.log(filterStateCopy);
      console.log(action.payload.data);
      filterStateCopy = {
        ...filterStateCopy,

        data: action.payload.data.filter((value, i) => {
          if (action.payload.data[i].color === action.payload.color) {
            return value;
          } else {
            return false;
          }

          //console.log(anime[i].genres[0].name);
        }),
      };
      return { ...filterStateCopy };

    case "FETCH_COLOR1":
      console.log(filterStateCopy);
      console.log(action.payload);
      // console.log(action.payload.cart);
      filterStateCopy = {
        ...filterStateCopy,

        cart: action.payload.data.filter((value, i) => {
          if (action.payload.data[i].id === action.payload.id) {
            return value;
          } else {
            return false;
          }
        }),
      };
      return { ...filterStateCopy };

    case "FETCH_COLOR2":
      console.log(filterStateCopy);
      console.log(action.payload);
      // console.log(action.payload.cart);
      filterStateCopy = {
        ...filterStateCopy,

        cart: action.payload.data.filter((value, i) => {
          if (action.payload.data[i].id === action.payload.id) {
            return false;
          } else {
            return false;
          }
        }),
      };
      return { ...filterStateCopy };

    case "FETCH_GENDER":
      // console.log(filterStateCopy);
      // console.log(action.payload.data);
      filterStateCopy = {
        ...filterStateCopy,

        data: action.payload.data.filter((value, i) => {
          if (action.payload.data[i].gender === action.payload.gender) {
            return value;
          } else {
            return false;
          }

          //console.log(anime[i].genres[0].name);
        }),
      };
      return { ...filterStateCopy };

    case "FETCH_TYPE":
      // console.log(filterStateCopy);
      // console.log(action.payload.data);
      filterStateCopy = {
        ...filterStateCopy,

        data: action.payload.data.filter((value, i) => {
          if (action.payload.data[i].type === action.payload.type) {
            return value;
          } else {
            return false;
          }

          //console.log(anime[i].genres[0].name);
        }),
      };
      return { ...filterStateCopy };

    case "FETCH_PRICE":
      // console.log(filterStateCopy);
      // console.log(action.payload.data);
      filterStateCopy = {
        ...filterStateCopy,

        data: action.payload.data.filter((value, i) => {
          if (action.payload.data[i].price <= action.payload.price) {
            return value;
          } else {
            return false;
          }

          //console.log(anime[i].genres[0].name);
        }),
      };
      return { ...filterStateCopy };

    case "FETCH_PRICE_EQUAL":
      // console.log(filterStateCopy);
      // console.log(action.payload.data);
      filterStateCopy = {
        ...filterStateCopy,

        data: action.payload.data.filter((value, i) => {
          if (action.payload.data[i].price === action.payload.price) {
            return value;
          } else {
            return false;
          }

          //console.log(anime[i].genres[0].name);
        }),
      };
      return { ...filterStateCopy };

    case "FETCH_SEARCH_NAME":
      console.log(action.payload);
      console.log(action.payload.data);
      filterStateCopy = {
        ...filterStateCopy,

        data: action.payload.data.filter((value, i) => {
          if (
            action.payload.data[i].name
              .toLowerCase()
              .includes(action.payload.search)
          ) {
            return value;
          } else {
            return false;
          }

          // console.log(action.payload.data[i].color);
        }),
      };
      return { ...filterStateCopy };

    default:
      return state;
  }
};
