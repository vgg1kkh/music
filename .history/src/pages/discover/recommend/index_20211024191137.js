import React, { memo } from 'react'
import { connect } from 'react-redux'

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

const mapDispatchToProps = dispatch

export default connect(mapStateToProps,mapDispatchToProps)(memo(Recommend))
