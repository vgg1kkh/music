import React, { memo } from 'react';
import { SubMenuWrapper } from './style';
import discoverMenu from '../../common/local-data'


const showDiscoverMenu = (item,index) => {
    return 
}

export default memo(function HYDiscover() {
    return (
        <div>
            <SubMenuWrapper>
                <div className="submenu-content w1100">
                    <div className="submenu-list">
                        {discoverMenu.map((item,index) =>{
                            showDiscoverMenu(item,index)
                        }   
                        )}
                    </div>
                </div>
            </SubMenuWrapper>
        </div>
    )
})
