import React from 'react';
import {BrowserRouter} from "react-router-dom";
import AppHeader from "./components/AppHeader";
import AppRouter from "./components/AppRouter";

function App() {
  return (
    <BrowserRouter>
      <AppHeader />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
