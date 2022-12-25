import React, { Component } from "react";
import { createRoot } from 'react-dom/client';
import Main from "./Components/Main";
import { BrowserRouter } from "react-router-dom";

const root = createRoot(document.getElementById('root'));

//Wrap the entire application in a <BrowserRouter> component to keep tracks of the changes in the URL
root.render(<BrowserRouter><Main /></BrowserRouter>);
