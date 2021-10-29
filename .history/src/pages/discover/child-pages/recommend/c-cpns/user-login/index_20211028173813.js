import React, { memo } from "react";
import UserLoginWrapper from "./style";

export default memo(function UserLogin() {

// handle function
//   const handleLogin = () => {
//     if (!isLogin) dispatch(changeIsVisible(true))
//   }
    return (
        <UserLoginWrapper >
          <div className="profile-info sprite_02">
            <p className="login-detail">
            Log in to enjoy the fun of unlimited collection, and unlimited synchronization to mobile phones
            </p>
            <button className="user-login sprite_02" 
            onClick={() => handleLogin()}>
              用户登录
            </button>
          </div>
        </UserLoginWrapper>
      )
  
})
