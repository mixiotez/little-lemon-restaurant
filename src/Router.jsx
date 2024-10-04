import { Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";
import Reservations from "@/pages/Reservations";
import ReservationCompleted from "@/pages/ReservationCompleted";

const Router = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="about" />
    <Route path="menu" />
    <Route path="reservations" element={<Reservations />} />
    <Route path="reservations/success" element={<ReservationCompleted />} />
    <Route path="order" />
    <Route path="login" />
  </Routes>
);

export default Router;
