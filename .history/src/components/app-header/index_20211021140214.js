import { memo } from 'react'
import { NavLink } from 'react-router-dom' 

export default memo(function HYAppFooter() {
    return (
        <div>
            <NavLink to="/discover">Discover</NavLink>
        </div>
    )
})
