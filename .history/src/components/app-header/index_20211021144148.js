import { memo } from 'react'
import { NavLink } from 'react-router-dom' 

import { HeaderWrapper } from './style'

export default memo(function HYAppFooter() {
    return (
        <HeaderWrapper>
            <NavLink to="/">Discover</NavLink>
            <NavLink to="/mime">PlayList</NavLink>
            <NavLink to="/friend">Friend</NavLink>
        </HeaderWrapper>
    )
})