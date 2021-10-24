import React, { memo } from 'react'
import { connect } from 'react-redux'

import getTopBannerAction from './store/actionCreators'

function Recommend() {

    return (
        <div>
            Recommend
        </div>
    )
}

const mapStateToProps= (state)=>({
    topBanner: state.topBanner,
})

const mapDispatchToProps = dispatch =>(
    {
        getTopBannerAction: dispatch(getTopBannerAction)
    }
)

export default connect(mapStateToProps,mapDispatchToProps)(memo(Recommend))
