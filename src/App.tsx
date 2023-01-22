import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/home";
import MainPage from "./components/mainpage";
import Profile from "./components/profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "main",
    element: <MainPage />,
  },
  {
    path: "profile",
    element: <Profile />,
  },
]);

function App() {
  return (
    <div className="app">
      <h1>React Router</h1>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
