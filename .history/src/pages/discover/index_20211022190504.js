import React, { memo } from 'react';
import { Link } from 're'
import { SubMenuWrapper } from './style';
import discoverMenu from '../../common/local-data'


const showDiscoverMenu = (item,index) => {
    return <li key={index}>
        <Link to={item.path}>{item.title}</Link>
    </li>
}

export default memo(function HYDiscover() {
    return (
        <div>
            <SubMenuWrapper>
                <div className="submenu-content w1100">
                    <div className="submenu-list">
                        {discoverMenu.map((item,index) =>{
                            return showDiscoverMenu(item,index)
                        }   
                        )}
                    </div>
                </div>
            </SubMenuWrapper>
        </div>
    )
})
