import { memo } from 'react'
import { NavLink } from 'react-router-dom' 

export default memo(function HYAppFooter() {
    return (
        <div>
            <NavLink to="/">Discover</NavLink>
            <NavLink to="/mime">Discover</NavLink>
            <NavLink to="/">Discover</NavLink>
        </div>
    )
})
