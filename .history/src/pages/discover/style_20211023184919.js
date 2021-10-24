import styled from "styled-components";

export const SubMenuWrapper = styled.div`
  height: 34px;
  background-color: #c20202;
  .submenu-content {
    .submenu-list {
      padding-left: 184px;
      height: 34px;
      display: flex;
      align-items: center;
      .submenu-item {
        padding: 0 13px;
        .submenu-item-link {
          display: inline-block;
          height: 20px;
          line-height: 20px;
          /* padding: 0px 5px 2px; */
          background-color: #9b0909;
          border-radius: 20px;
          color: #fff;
          padding: 0px 5px;
          text-decoration: none;
          &:hover {
            background-color:#333;
            transform:scale(105%);
          }
        }
      }
    }
  }
`;

export const DiscoverWrapper = styled.div``;
