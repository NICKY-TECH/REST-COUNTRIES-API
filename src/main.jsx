import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import dropSlice from "./features/dropdown.js";
import darkMode from "./features/darkmode.js";
import searchItem from "./features/search.js";
import dropFound from "./features/dropSearch.js"

const store = configureStore({
  reducer: {
    drop: dropSlice,
    dark: darkMode,
    searchItem,
    dropFound
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
