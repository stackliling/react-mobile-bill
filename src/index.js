import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./theme.css";
import { RouterProvider } from "react-router-dom";
import router from "@/router";
import axios from "@/axios";
import store from "./store";
import { Provider } from "react-redux";

axios.get("/get_bill").then((res) => console.log(res));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
  </Provider>
);
