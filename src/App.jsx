import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Homepage from "../src/pages/Homepage";
import Product from "../src/pages/Product";
import Pricing from "../src/pages/Pricing";
import PageNotFound from "../src/pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";

export default function App() {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route index element={<Homepage />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="app" element={<AppLayout />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  );
  return <RouterProvider router={route} />;
}
