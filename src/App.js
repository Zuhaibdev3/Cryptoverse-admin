import React from "react";
import RouterNavigation from "./config/router";
import './App.css'
import { Toaster } from 'react-hot-toast';

const App = () => {
  return <>
    <Toaster position="top right" />
    <RouterNavigation />;
  </>
};

export default App;
