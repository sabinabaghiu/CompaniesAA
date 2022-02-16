import {FaPen} from 'react-icons/fa'

const Company = ({ company, onEdit }) => {
    return (
      <div className="company">
          <h3>{company.name} <FaPen onClick={onEdit}/></h3>
          <p>{company.country}</p>
          <p>{company.email}</p>
      </div>
    )
  }

export default Company