import { Routes as RouterRoutes, Route } from "react-router-dom";
import EditContact from "./pages/EditContact";
import Home from "./pages/Home";
import NewContact from "./pages/NewContact";

export default function AppRoutes() {
  return (
    <RouterRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<NewContact />} />
      <Route path="/edit/:id" element={<EditContact />} />
    </RouterRoutes>
  );
}
