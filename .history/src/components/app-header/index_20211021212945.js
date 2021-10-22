import { memo, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "@/assets/img/logo.jpg";

import { HeaderWrapper, HeaderLeft, HeaderRight } from "./style";
import { headerLinks } from "@/common/local-data";

export default memo(function HYAppHeader() {
  const [activeIndex, setActiveIndex] = useState(-1);

  const showNavItems = (item, index) => {
    console.log(index===activeIndex);
    if (index < 3) {
      return (
        <NavLink key={index} to={item.link} 
        className={index===activeIndex? "" active":"")}
        className={"nav-item"+(index===activeIndex?" active":"")}
        onClick={()=>setActiveIndex(index)}>
          {item.title}
        </NavLink>
      );
    } else {
      return (
        <a
          key={index}
          href={item.link}
          className={"nav-item"+(index===activeIndex?" active":"")}
          rel="noreferrer"
          target="_blank"
          onClick={()=>setActiveIndex(index)} 
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
        <HeaderRight>right</HeaderRight>
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
