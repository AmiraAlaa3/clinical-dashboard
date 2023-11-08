import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from './pages/Root';
import './App.css';
import Dashboard from './pages/Dashboard/Dashboard';
import Orders from './pages/Orders/Orders';
import Welcome from "./pages/Welcome/Welcome";
import React from "react";
import Analytics from "./pages/Analytics/Analytics.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <React.Fragment>
      <Route index element={<Welcome />} />
      <Route path="/" element={<Root />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path='/Orders' element={<Orders />} />
        <Route path='/analytics' element={<Analytics />} />
      </Route>
    </React.Fragment>
  )
);


function App() {

  return (
    <div className="App w-100">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
