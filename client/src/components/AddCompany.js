import { useState } from 'react'

const AddCompany = ({ onAdd }) => {
  const [name, setName] = useState('')
  const [country, setCountry] = useState('')
  const [email, setEmail] = useState('')
  const [ownerName1, setOwnerName1] = useState('')
  const [securityNumber1, setSecurityNumber1] = useState('')
  const [ownerName2, setOwnerName2] = useState('')
  const [securityNumber2, setSecurityNumber2] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    onAdd({ name, country, email, ownerName1, securityNumber1, ownerName2, securityNumber2 })

    setName('')
    setCountry('')
    setEmail('')
    setOwnerName1('')
    setOwnerName2('')
    setSecurityNumber1('')
    setSecurityNumber2('')
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Name</label>
        <input
          type='text'
          placeholder='Add Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Country</label>
        <input
          type='text'
          placeholder='Country'
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Email</label>
        <input
          type='text'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Owner name 1</label>
        <input
          type='text'
          placeholder='Owner name'
          value={ownerName1}
          onChange={(e) => setOwnerName1(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Security number 1</label>
        <input
          type='text'
          placeholder='Security number'
          value={securityNumber1}
          onChange={(e) => setSecurityNumber1(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Owner name 2</label>
        <input
          type='text'
          placeholder='Owner name'
          value={ownerName2}
          onChange={(e) => setOwnerName2(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Security number 2</label>
        <input 
          type='text'
          placeholder='Security number'
          value={securityNumber2}
          onChange={(e) => setSecurityNumber2(e.target.value)}
        />
      </div>

      <input type='submit' value='Save Company' className='btn btn-block' />
    </form>
  )
}

export default AddCompany