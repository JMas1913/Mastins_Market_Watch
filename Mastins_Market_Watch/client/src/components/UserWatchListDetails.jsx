import React, { useEffect, useState } from 'react'
import axios from 'axios'


export default function UserWatchList(props) {
  const [userWatchList, setUserWatchList] = useState([])
  
  const showUserWatchList = (userWatchList) => {
    props.history.push(`/userwatchlist/${userWatchList._id}`)
  }

  

  const getUserWatchList = async () => {
    const res = await axios.get("http://localhost:3001/api/userwatchlist")
    setUserWatchList(res.data)
  }


  useEffect(() => {
    getUserWatchList()
  }, [])


  return (
    <div key={userWatchList}>
      { userWatchList.userWatchList &&
      userWatchList.userWatchList.map((userWatchList) => (
        <div className="userWatchList-card" onClick={() => showUserWatchList(userWatchList)}>
          <h3>{userWatchList.name}</h3>
        </div>
      ))}


    </div>
  )
}