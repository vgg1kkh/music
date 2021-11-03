import { memo, useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "antd4";
import { SearchOutlined } from "@ant-design/icons";

import logo from "@/assets/img/logo.jpg";

import { HeaderWrapper, HeaderLeft, HeaderRight } from "./style";
import { headerLinks } from "@/common/local-data";

export default memo(function HYAppHeader() {
  const [activeIndex, setActiveIndex] = useState(-1);

  const showNavItems = (item, index) => {
    console.log(index === activeIndex);
    if (index < 3) {
      return (
        <Link
          exact
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
          <div className="search">
            <Input
              placeholder="music/vedio/radio"
              prefix={<SearchOutlined />}
              bordered={false}
            />
          </div>
          <div className="creator">2</div>
          <div className="login">3</div>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  );
});

{
  /* <NavLink to="/">Discover</NavLink>
<NavLink to="/mime">PlayList</NavLink>
<NavLink to="/friend">Friend</NavLink> */
}
