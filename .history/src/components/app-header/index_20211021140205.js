import { memo } from 'react'
import { NavLink } from 'react-router-dom' 

export default memo(function HYAppFooter() {
    return (
        <div>
            <Link to="/discover">Discover</Link>
        </div>
    )
})
