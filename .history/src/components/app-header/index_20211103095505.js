import { memo, useState } from "react";
import { Link } from "react-router-dom";
import { Input, Dropdown, Menu } from "antd";
import { SearchOutlined, DownOutlined } from "@ant-design/icons";

import logo from "@/assets/img/logo.jpg";

import { HeaderWrapper, HeaderLeft, HeaderRight } from "./style";
import { headerLinks } from "@/common/local-data";
import { changeIsVisible } from '@/components/theme-login/store';



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

  const profileDownMenu = ()=>{
    return(
      <Menu overlayClassName="my-dropdown"
      >
      <Menu.Item key="0" >
      <a 
      href="/user"
      target="_blank"
      onClick={e=>e.preventDefault()}
      >
         HomePage
      </a>
      </Menu.Item>
      <Menu.Item key="1">
            <a
              rel="noopener noreferrer"
              href="/user"
              target="_blank"
            >
             Logout
            </a>
          </Menu.Item>
    </Menu>
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
          <Dropdown overlay={profileDownMenu} 
          overlayClassName="my-dropdown" 
          overlayStyle={{backgroundColor:'#242424'}}>
          <div className="login"
            onClick={dis}
          >
            <a href="#/">Login  <DownOutlined style={{margin:"3px 0 0 3px"}}/></a>
          </div>
          </Dropdown>

        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  );
});


