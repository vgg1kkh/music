import React, { memo } from 'react'
import UserLoginWrapper from './style'

export default memo(function UserLogin() {
    return (
        <UserLoginWrapper>
            <div className="profile-info sprite_02">
            <p className="login-detail">Log in to enjoy the fun of unlimited collection, and unlimited synchronization to mobile phones</p>
            <button className="user-login sprite_02" onClick={() => handleLogin()}>
          Login
        </button>
            </div>
            
        </UserLoginWrapper>
    )
})
