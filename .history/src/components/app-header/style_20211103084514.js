import styled from "styled-components";
import sprite01 from "../../../src/assets/img/sprite_01.png";

export const HeaderWrapper = styled.div`
  height: 75px;
  background-color: #242424;
  .content {
    height: 70px;
    display: flex;
    justify-content: space-between;
    color: white;
    /* background-color: grey; */
    /* background-color: green; */
  }
  .divider {
    height: 5px;
    background-color: #c20202;

  }
`;

export const HeaderLeft = styled.div`
  display: flex;
  flex: 2;
  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: white; */
    width: 176px;
    height: 69px;
    color: white;
    text-decoration: none;
    img {
      width: 40px;
      height: 40px;
      margin-right: 5px;
      border-radius: 20px;
    }
    span {
      font-size: 18px;
      color: white;
    }
  }
  .select-list {
    display: flex;
    justify-content: space-evenly;
    flex: 1;
    width: 100%;
    /* background-color: green; */
    .nav-item {
      display: inline-block;
      position: relative;
      text-decoration: none;
      color: #ccc;
      /* background-color: red; */
      padding: 0 10px;
      font-size: 14px;
      height: 70px;
      line-height: 70px;
      &::after {
        content: "";
        position: absolute;
        left: 50%;
        bottom: 0;
        border: 5px solid transparent;
        transform: translateX(-50%);
      }
    }
    .nav-item.active {
      background-color: black;
      color: #fff;
      &::after {
        border-bottom: 5px solid #c20202;
      }
    }
    & a:last-of-type {
      position: relative;
      &::after {
        position: absolute;
        content: "";
        top: 18px;
        left: 48px;
        width: 26px;
        height: 13px;
        border: 0;
        background-color: red;
        background-image: url(${sprite01});
        background-position: -192px 0;
      }
    }
  }
`;
export const HeaderRight = styled.div`
  flex: 1;
  display: flex;
  color:#ccc;
  /* background-color: pink; */
  .search-box {
    flex: 3;
    display: flex;
    justify-content: center;
    align-items:center;
    /* background-color: #fff; */
    .search {
      width: 181px;
      height: 32px;
      border-radius: 16px;
      input {
        font-size: 14px;
        font-family: "微软雅黑";
        &:focus{}
        &::placeholder {
          font-size: 12px;
        }
      }
    }
  }
  .creator {
    flex: 2;
    display: flex;
    justify-content: center;
    align-items:center;
    /* background-color: #ccc; */
    .center {
    width: 75px;
    height: 32px;
    line-height: 32px;
    color:#ccc;
    text-align: center;
    border: 1px solid #666;
    border-radius: 16px;
    margin: 0 13px;
    background-color: transparent;

    &:hover {
      cursor: pointer;
      border-color: #fff;
      color: #fff;
    }
  }
  }

  .dropdown {
      .dropdown-menu {
        background-color: red !important;
      }
    }
  .login {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items:center;
    
    a{
      cursor: pointer;
      padding: 2px 10px;
      color: #ccc;
      border: 1px solid #666;
      background-color: transparent;
      border-radius: 10px;
      text-decoration: none;
      &:hover{
        color:white;
        border: 1px solid #ececec;
      }
    }
  }
:global(.ant-dropdown-menu) {
background-color: pink;
}
`

// .left {
//     flex:7;
//     height: 70px;
//     background-color: pink;
//     .logo {
//         display: inline-block;
//         background-color: blue;
//         width: 177px;
//         height: 70px;
//         .title {
//             display:inline-block;
//             width: 157px;
//             height: 70px;
//             padding-right:20px;
//             font-size: 14px;
//             background-color: grey;
//             &::before{
//                 content: "";
//                 display:inline-block;
//                 line-height: 70px;
//                 width: 33px;
//                 height: 33px;
//                 /* background-color: red; */
//                 background: url("@/assets/img/sprite_01.png");
//                 background-position: 0 19px

//             }
//         }

//     }
// }
// .right {
//     flex:3;
//     background-color: deeppink
// }
