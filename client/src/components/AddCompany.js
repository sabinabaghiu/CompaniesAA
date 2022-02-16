import { useState } from "react";

const AddCompany = ({ onAdd, isLoading, defaultValues = {} }) => {
  const [name, setName] = useState(defaultValues.name ?? "");
  const [country, setCountry] = useState(defaultValues.country ?? "");
  const [email, setEmail] = useState(defaultValues.email ?? "");
  const [owners, setOwners] = useState(
    defaultValues.owners ?? [
      {
        name: "",
        securityNumber: "",
      },
      {
        name: "",
        securityNumber: "",
      },
    ]
  );

  const onSubmit = (e) => {
    e.preventDefault();

    onAdd({
      name,
      country,
      email,
      owners: owners.filter(
        (owner) => owner.name.length > 0 && owner.securityNumber.length > 0
      ),
    });

    if (Object.keys(defaultValues).length === 0) {
      setName("");
      setCountry("");
      setEmail("");
      setOwners([
        {
          name: "",
          securityNumber: "",
        },
      ]);
    }
  };

  const handleUpdateOwnerName = (e, index) => {
    setOwners((prev) => {
      let temp = [...prev];

      temp[index].name = e.target.value;
      return temp;
    });
  };

  const handleUpdateOwnerSecurityNumber = (e, index) => {
    setOwners((prev) => {
      let temp = [...prev];

      temp[index].securityNumber = e.target.value;
      return temp;
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form-control">
        <label>Name *</label>
        <input
          type="text"
          placeholder="Name"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Country *</label>
        <input
          type="text"
          placeholder="Country"
          value={country}
          required
          onChange={(e) => setCountry(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Email </label>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      {owners.map((owner, index) => (
        <div key={index}>
          <div className="form-control">
            <label>Owner name {index === 0 ? "*" : ""}</label>
            <input
              type="text"
              placeholder="Owner name"
              value={owner.name}
              required={index === 0}
              onChange={(e) => handleUpdateOwnerName(e, index)}
            />
          </div>

          <div className="form-control">
            <label>Security number {index === 0 ? "*" : ""}</label>
            <input
              type="text"
              placeholder="Security number"
              value={owner.securityNumber}
              required={index === 0}
              onChange={(e) => handleUpdateOwnerSecurityNumber(e, index)}
            />
          </div>
        </div>
      ))}

      <input
        type="submit"
        value={isLoading ? "Loading..." : "Save Company"}
        className="btn btn-block"
      />
    </form>
  );
};

export default AddCompany;
