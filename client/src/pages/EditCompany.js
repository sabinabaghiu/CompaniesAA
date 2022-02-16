import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AddCompany from "../components/AddCompany";

const EditCompany = () => {
  const { companyId } = useParams();
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(true);
  const [isSubmitLoading, setSubmitLoading] = useState(false);
  const [company, setCompany] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/companies/${companyId}`)
      .then((res) => res.json())
      .then((data) => setCompany(data))
      .finally(() => setLoading(false));
  }, []);

  const handleUpdateCompany = (data) => {
    setSubmitLoading(true);

    fetch(`http://localhost:5000/companies/${companyId}`, {
      method: "PUT",
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(() => {
        alert("Success");
        navigate("/");
      })
      .catch(() => {
        alert("Couldn't update company");
      })
      .finally(() => {
        setSubmitLoading(false);
      });
  };

  if (isLoading) {
    return <h1>Loading</h1>;
  }

  if (company == null) {
    navigate("/");
  }

  return (
    <div className="container">
      <AddCompany
        onAdd={handleUpdateCompany}
        isLoading={isSubmitLoading}
        defaultValues={company}
      />
    </div>
  );
};

export default EditCompany;