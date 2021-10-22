import { memo } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "@/assets/img/logo.jpg"

import { HeaderWrapper,HeaderLeft,HeaderRight } from "./style";
import { headerLinks } from "@/common/local-data";

export default memo(function HYAppFooter() {
  return (
    <HeaderWrapper>
      <div className="content w1100">
            <HeaderLeft>
                <a href="#/" className="logo">
                    <img src={logo} alt="logo"></img>
                    <span>Birdy Music</span>
                </a>
                <div className="selete-list">
                    {headerLinks.map((item,index)=>(
                        <div key={index}>

                        </div>
                    ))}
                </div>

            </HeaderLeft>
            <HeaderRight>
                right
            </HeaderRight>
      </div>
      <div className="divider"></div>

    </HeaderWrapper>
  );
});

{/* <NavLink to="/">Discover</NavLink>
<NavLink to="/mime">PlayList</NavLink>
<NavLink to="/friend">Friend</NavLink> */}