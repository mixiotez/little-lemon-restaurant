import { Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";

const Router = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" />
    <Route path="/menu" />
    <Route path="/reservations" />
    <Route path="/order" />
    <Route path="/login" />
  </Routes>
);

export default Router;
