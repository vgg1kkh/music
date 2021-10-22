import { memo } from 'react'
import { NavLink } from 'react-router-dom' 

export default memo(function HYAppFooter() {
    return (
        <div>
            <NavLink to="/">Discover</NavLink>
            <NavLink to="/mime">My PlayList</NavLink>
            <NavLink to="/">Discover</NavLink>
        </div>
    )
})
