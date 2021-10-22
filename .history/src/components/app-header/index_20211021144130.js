import { memo } from 'react'
import { NavLink } from 'react-router-dom' 

import He

export default memo(function HYAppFooter() {
    return (
        <div>
            <NavLink to="/">Discover</NavLink>
            <NavLink to="/mime">PlayList</NavLink>
            <NavLink to="/friend">Friend</NavLink>
        </div>
    )
})
