import axios from "axios";
import React, { createContext, useEffect, useReducer, useMemo} from "react";

export const initialState = {
  theme: "light",
  data: [],
  favorites: JSON.parse(localStorage.getItem("favorites")) || [],
};

export const ContextGlobal = createContext(undefined);

const globalReducer = (state, action) => {
  switch (action.type) {
    case "SET_THEME":
      return { ...state, theme: action.payload };
    case "SET_DATA":
      return { ...state, data: action.payload };
    case "ADD_TO_FAVORITES":
      const updatedFavorites = [...state.favorites, action.payload];
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      return {
        ...state,
        favorites: updatedFavorites,
      };
    case "REMOVE_FROM_FAVORITES":
      const filteredFavorites = state.favorites.filter(
        (data) => data.id !== action.payload.id
      );
      localStorage.setItem("favorites", JSON.stringify(filteredFavorites));
      return {
        ...state,
        favorites: filteredFavorites,
      };
    default:
      return state;
  }
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  const addToFavorites = (data) => {
    dispatch({ type: "ADD_TO_FAVORITES", payload: data });
  };

  const removeFromFavorites = (data) => {
    dispatch({ type: "REMOVE_FROM_FAVORITES", payload: data });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
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
      payload: state.theme === "light" ? "dark" : "light",
    });
  };

  const contextValue = useMemo( () => ({ state, toggleTheme, addToFavorites, removeFromFavorites, }), [state] );
  return (
    <ContextGlobal.Provider value={contextValue}>
      {children}
    </ContextGlobal.Provider>
  );
};
