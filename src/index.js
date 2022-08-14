import React, { Component } from "react";
import { createRoot } from 'react-dom/client';
import Main from "./Components/Main";

const root = createRoot(document.getElementById('root'));
root.render(<Main />);