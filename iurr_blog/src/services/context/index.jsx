import PropTypes from "prop-types";
import { createContext, useReducer } from "react";

const initialState = {
  bookmarkList: [],
};

export const GlobalContext = createContext(initialState);

let newList = [];
let newList2 = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_BOOKMARK":
      newList = [...state.bookmarkList];
      newList.push(action.payload);
      return {
        ...state,
        bookmarkList: [...new Set([...newList])],
      };
    case "REMOVE_BOOKMARK":
      newList2 = [...state.bookmarkList];

      newList2 = newList2.filter((item) => item !== action.payload);

      return {
        ...state,
        bookmarkList: newList2,
      };
    default:
      return state;
  }
};

export default function GlobalContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}

GlobalContextProvider.propTypes = {
  children: PropTypes.node,
};
