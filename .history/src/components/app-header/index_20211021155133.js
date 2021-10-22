import { memo } from "react";
import { NavLink } from "react-router-dom";

import { HeaderWrapper } from "./style";

export default memo(function HYAppFooter() {
  return (
    <HeaderWrapper>
      <div className="content w1100">
          <div cl></div>
        <NavLink to="/">Discover</NavLink>
        <NavLink to="/mime">PlayList</NavLink>
        <NavLink to="/friend">Friend</NavLink>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  );
});
