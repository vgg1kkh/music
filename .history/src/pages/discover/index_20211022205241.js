import React, { memo } from "react";
import { Link } from "react-router-dom";
import 
import { SubMenuWrapper } from "./style";
import { dicoverMenu } from "../../common/local-data";

const showDiscoverMenu = (item, index) => {
  return (
    <li key={index} className="submenu-item">
      <Link to={item.link}>{item.title}</Link>
    </li>
  );
};

export default memo(function HYDiscover() {
  return (
    <div>
      <SubMenuWrapper>
        <div className="submenu-content w1100">
          <div className="submenu-list">
            {dicoverMenu.map((item, index) => {
              return showDiscoverMenu(item, index);
            })}
          </div>
          <div>
              HYDiscovery
              {

              }
          </div>
        </div>
      </SubMenuWrapper>
    </div>
  );
});
