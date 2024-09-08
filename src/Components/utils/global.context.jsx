import axios from "axios";
import React, { createContext, useEffect, useReducer } from "react";

export const initialState = { theme: "light", data: [] };

export const ContextGlobal = createContext(undefined);

const globalReducer = (state, action) => {
  switch (action.type) {
    case "SET_THEME":
      return { ...state, theme: action.payload };
    case "SET_DATA":
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [state, dispatch] = useReducer(globalReducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        dispatch({ type: "SET_DATA", payload: response.data });
      } catch (error) {
        console.error("Error fetching data from API", error);
      }
    };
    
    fetchData();
  }, []);

  const toggleTheme = () => {
    dispatch({
      type: "SET_THEME",
      payload: state.theme === "light" ? "dark" : "light"
    });
  };

  return (
    <ContextGlobal.Provider value={{ state, toggleTheme }}>
      {children}
    </ContextGlobal.Provider>
  );
};
