import React, { memo ,useEffect} from 'react'
import { connect } from 'react-redux'

import getTopBannerAction from './store/actionCreators'

function Recommend(props) {

    useEffect(() => {
        effect
       
    }, [input])

    return (
        <div>
            Recommend
        </div>
    )
}

const mapStateToProps= (state)=>({
    topBanner: state.recommend.topBanner,
})

const mapDispatchToProps = dispatch =>(
    {
        getTopBannerAction: dispatch(getTopBannerAction())
    }
)

export default connect(mapStateToProps,mapDispatchToProps)(memo(Recommend))
