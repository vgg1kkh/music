import React, { memo } from 'react'
import { connect } from 'react-redux'

function Recommend() {

    return (
        <div>
            Recommend
        </div>
    )
}

export default connect(mapStateToProps,mapDispatch)(memo(Recommend))
