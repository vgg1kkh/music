import React, { memo } from "react";
import UserLoginWrapper from "./style";

export default memo(function UserLogin() {

    .user-login {
        display: block;
        margin: 0 auto;
        width: 100px;
        height: 31px;
        line-height: 31px;
        text-align: center;
        color: #fff;
        text-shadow: 0 1px 0 #8a060b;
        background-position: 0 -195px;
        cursor: pointer;
      }
  return (
    <UserLoginWrapper>
      <div className="profile-info sprite_02">
        <p className="login-detail">
          Log in to enjoy the fun of unlimited collection, and unlimited
          synchronization to mobile phones
        </p>
        <button className="user-login sprite_02" 
        // onClick={() => handleLogin()}
        >
          Login
        </button>
      </div>
    </UserLoginWrapper>
  );
});
