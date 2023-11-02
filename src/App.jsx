import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from './pages/Root'
import './App.css'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>

    </Route>
  )
);

function App() {

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
