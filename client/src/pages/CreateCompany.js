import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddCompany from "../components/AddCompany";

const CreateCompany = () => {
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleAddCompany = (data) => {
    setLoading(true);

    fetch("http://localhost:5000/companies", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(() => {
        alert("Success");
        navigate("/");
      })
      .catch(() => {
        alert("Couldn't create company");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="container">
      <AddCompany onAdd={handleAddCompany} isLoading={isLoading} />
    </div>
  );
};

export default CreateCompany;
