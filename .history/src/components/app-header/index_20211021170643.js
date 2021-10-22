import { memo } from "react";
import { Link, NavLink } from "react-router-dom";

import { HeaderWrapper } from "./style";

export default memo(function HYAppFooter() {
  return (
    <HeaderWrapper>
      <div className="content w1100">
        
          <NavLink to="/">Discover</NavLink>
          <NavLink to="/mime">PlayList</NavLink>
          <NavLink to="/friend">Friend</NavLink>
        </div>
        <div className="right"></div>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  );
});
