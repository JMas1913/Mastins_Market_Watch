import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useHistory, useParams } from 'react-router-dom'



function UserDetails(props) {
    let history = useHistory()
    let {id} = useParams()
    const [selectUser, setUser] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const getUserDetails = async () => {
      const res = await axios.get(`http://localhost:3001/api/users/${id}`)
      setUser(res.data.userId)
  }

  useEffect(() => {
  getUserDetails()
  setUser(selectUser)
  setName(selectUser.name)
  setPassword(selectUser.password)
  }, [])

  const putUser = async () => {
    const res = await axios.put(
      `http://localhost:3001/api/user/${id}`,
      {
        name,
        password
      }
    )
    history.push(`/listofusers`)
  }


  const deleteUser = async () => {
    const res = await axios.delete(`http://localhost:3001/api/user/${id}`)
  }




  return selectUser ? (
    <div className='details'>
      <div className='detail-header'>
        <div style={{ minWidth: '30em', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <h2>{selectUser.name}</h2>
        </div>
      </div>
      <div className='info-wrapper'>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <h3>Password: {selectUser.password}</h3>
        </div>
      </div>
      <div>
        <form onSubmit={() => putUser()}>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} name={'name'} placeholder={'name'} />
          <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} name={'password'} placeholder={'password'} />
          <button type='submit'>Submit</button>
        </form>

        <button onClick={() => deleteUser()}>
          Delete the User
        </button>
      </div>
    </div>
  ) : null;


}


export default UserDetails