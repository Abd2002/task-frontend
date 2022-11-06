import { useWeb3 } from "@3rdweb/hooks";
import Router from 'next/router';
import React from 'react'

const UserHome = () => {
  var { address } = useWeb3();

  if (typeof window !== "undefined") {
    if (address === undefined) {
      Router.push('/');
    }
  }

  const clickHundler = async () => {
    localStorage.setItem('isConnected', 'no')
    if (localStorage.getItem('isConnected') === 'no') {
      Router.push('/');
    }
  }

  return (
    <div className="main">
      <div className="header">
        <div className="user-profile">
          <h4 className="m-0">User Dashboard</h4>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mx-auto text-center">
            <div className='user-box'>
              <div className="info">
                <h3> <b>Wallet Address </b> {address || ''}</h3>
                <button type="button" className="logout-btn" onClick={() => clickHundler()}>Logout</button></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserHome