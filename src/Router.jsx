import { Route, Routes } from "react-router-dom";

const Router = () => (
  <Routes>
    <Route path="/" />
    <Route path="/about" />
    <Route path="/menu" />
    <Route path="/reservations" />
    <Route path="/order" />
    <Route path="/login" />
  </Routes>
);

export default Router;
