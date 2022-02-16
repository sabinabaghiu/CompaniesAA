import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import CreateCompany from "./pages/CreateCompany";
import EditCompany from "./pages/EditCompany";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create-company" element={<CreateCompany />} />
      <Route path="/edit-company/:companyId" element={<EditCompany />} />
    </Routes>
  );
};

export default App;
