import './App.css';
import { HashRouter, Routes, Route } from "react-router-dom";
import React from "react";
import routes from './router';

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          {
            routes.map(route => (
              <Route key={route.path} path={route.path} element={route.component} />
            ))
          }
        </Routes>
      </HashRouter></>

  );
}

export default App;
