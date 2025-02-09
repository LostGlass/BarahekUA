import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./header";
import MainBlocMenu from "./main-bloc-menu";
const header = ReactDOM.createRoot(document.getElementById("headerId"));
header.render(<Header />);
const mainBlocMenu = ReactDOM.createRoot(
  document.getElementById("mainBlocMenuId"),
);
mainBlocMenu.render(<MainBlocMenu />);
