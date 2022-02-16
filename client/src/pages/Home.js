import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Companies from "../components/Companies";

const Home = () => {
  const [isLoading, setLoading] = useState(true);
  const [companies, setCompanies] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:5000/companies")
      .then((response) => response.json())
      .then((data) => setCompanies(data))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      <Header onAdd={() => navigate("/create-company")}></Header>
      <Companies
        companies={companies}
        isLoading={isLoading}
        onEdit={(companyId) => navigate(`/edit-company/${companyId}`)}
      ></Companies>
    </div>
  );
};

export default Home;
