import React, { Component } from "react";
import { createRoot } from 'react-dom/client';
// import Main from "./Components/Main";
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./redux/reducer.js";   // root reducer defines how data is going to updated in redux store
import { Provider } from "react-redux";
import App from "./Components/App";

// root reducer is combination of many reducers which are used by components to update the state of the store
const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
   })
});

const root = createRoot(document.getElementById('root'));

//Wrap the entire application in a <BrowserRouter> component to keep tracks of the changes in the URL
root.render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>);

//we need to provide the store to Main.js to access it there
