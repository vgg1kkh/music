import { memo, useState } from "react";
import { Link } from "react-router-dom";
import { Input, Dropdown } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import logo from "@/assets/img/logo.jpg";

import { HeaderWrapper, HeaderLeft, HeaderRight } from "./style";
import { headerLinks } from "@/common/local-data";


export default memo(function HYAppHeader() {
  const [activeIndex, setActiveIndex] = useState(-1);

  const showNavItems = (item, index) => {
    if (index < 3) {
      return (
        <Link    
          key={index}
          to={item.link}
          className={"nav-item" + (index === activeIndex ? " active" : "")}
          onClick={() => setActiveIndex(index)}
        >
          {item.title}
        </Link>
      );
    } else {
      return (
        <a
          key={index}
          href={item.link}
          className={"nav-item" + (index === activeIndex ? " active" : "")}
          rel="noreferrer"
          target="_blank"
          onClick={() => setActiveIndex(0)}
        >
          {item.title}
        </a>
      );
    }
  };

  //Dropdown Menu of Login

  const profileDwonMenu = ()=>{
    return(
      <a 
      href="/"
      target="_blank"
      onClick=
      >
        NickName
      </a>
    )
  }

  
  return (
    <HeaderWrapper>
      <div className="content w1100">
        <HeaderLeft>
          <a href="#/" className="logo">
            <img src={logo} alt="logo"></img>
            <span>Birdy Music</span>
          </a>
          <div className="select-list">
            {headerLinks.map((item, index) => {
              return showNavItems(item, index);
            })}
          </div>
        </HeaderLeft>
        <HeaderRight>
          <div className="search-box">
            <Input
              className="search"
              placeholder="music/vedio/radio"
              prefix={<SearchOutlined />}
              size="large"
              bordered="false"
            />
          </div>
          <div className="creator">
            <button className="center">Creators</button>
          </div>
          <Dropdown overlay={profileDwonMenu}>
          <div className="login">
            <a href="#/">Login</a>
          </div>
          </Dropdown>

        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  );
});


