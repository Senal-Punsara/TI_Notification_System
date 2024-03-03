import logo from './logo.svg';
import './App.css';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import HomePageAdmin from "./pages/HomePage/HomePageAdmin";
import HomePageUser from "./pages/HomePage/HomePageUser";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      {/* General */}
      <Route index element={<HomePage />} />
      <Route path="admin_home_page" element={<HomePageAdmin />} />
      <Route path="user_home_page" element={<HomePageUser />} />
      {/* <Route path="*" element={<ErrorPage />} /> */}
      
      {/* <Route path="login" element={<SignInPage />} />
      <Route path="register" element={<SignUpPage />} /> */}


    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;