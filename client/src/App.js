import { useState, useEffect } from "react"
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import Header from "./components/Header"
import Companies from "./components/Companies"
import AddCompany from "./components/AddCompany";

const App = () => {
  const [companies, setCompanies] = useState([
   
  ])

  useEffect(( ) => {
    fetch("http://localhost:5000/companies").then(response => response.json())
    .then(data => setCompanies(data));
  }, [])

  

  //Edit company
  const editCompany = (id) => {
    console.log('edit')
  }

  return (
    <div className="container">
      <Header></Header>
      <Companies companies={companies} onEdit={editCompany}></Companies>
    </div>
  );
};

export default App;
